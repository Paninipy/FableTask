// src/context/TasksContext.js
import React, { createContext, useState, useContext } from 'react';

const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const addTask = (task) => {
    setTasks((prevTasks) => [task, ...prevTasks]);
  };

  const updateTask = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const deleteCompletedTask = (id) => {
    setCompletedTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    // Encontrar la tarea
    const taskToComplete = tasks.find((task) => task.id === id);
    
    if (taskToComplete) {
      // Agregar al historial con fecha de completado
      const completedTask = {
        ...taskToComplete,
        completed: true,
        completedAt: new Date(),
      };
      
      setCompletedTasks((prevCompleted) => [completedTask, ...prevCompleted]);
    }

    // Marcar como completada visualmente
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    );

    // Eliminar de tareas pendientes después de 300ms
    setTimeout(() => {
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    }, 300);
  };

  const clearHistory = () => {
    setCompletedTasks([]);
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        completedTasks,
        addTask,
        updateTask,
        deleteTask,
        deleteCompletedTask,
        completeTask,
        clearHistory,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error('useTasks debe ser usado dentro de TasksProvider');
  }
  return context;
};