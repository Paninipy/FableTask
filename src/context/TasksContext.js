// src/context/TasksContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

const TasksContext = createContext();
const API_URL = 'http://192.168.1.83:3001'; // Cambia por la IP de tu PC

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  // 👇 Agrega este bloque para probar la conexión con tu API
  useEffect(() => {
    fetch(`${API_URL}/`)
      .then(res => res.json())
      .then(data => console.log('✅ Conexión exitosa con API:', data))
      .catch(err => console.error('❌ No se pudo conectar con API:', err));
  }, []);

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
    const taskToComplete = tasks.find((task) => task.id === id);
    if (taskToComplete) {
      const completedTask = {
        ...taskToComplete,
        completed: true,
        completedAt: new Date(),
      };

      setCompletedTasks((prev) => [completedTask, ...prev]);

      fetch(`${API_URL}/completed`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(completedTask),
      }).catch(err => console.error('Error guardando historial', err));
    }

    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    );

    setTimeout(() => {
      setTasks((prev) => prev.filter((task) => task.id !== id));
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
