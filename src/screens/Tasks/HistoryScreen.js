// src/screens/Tasks/HistoryScreen.js
import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTasks } from '../../context';

export default function HistoryScreen() {
  const { completedTasks, deleteCompletedTask, clearHistory } = useTasks();

  const handleDeleteTask = (id) => {
    Alert.alert(
      'Eliminar del Historial',
      '¿Estás seguro de que quieres eliminar esta tarea del historial?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: () => deleteCompletedTask(id),
        },
      ]
    );
  };

  const handleClearHistory = () => {
    if (completedTasks.length === 0) return;
    
    Alert.alert(
      'Limpiar Historial',
      '¿Estás seguro de que quieres eliminar todas las tareas completadas?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Limpiar Todo',
          style: 'destructive',
          onPress: clearHistory,
        },
      ]
    );
  };

  const formatDate = (date) => {
    const d = new Date(date);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (d.toDateString() === today.toDateString()) {
      return `Hoy a las ${d.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' })}`;
    } else if (d.toDateString() === yesterday.toDateString()) {
      return `Ayer a las ${d.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' })}`;
    } else {
      return d.toLocaleDateString('es-MX', { 
        day: '2-digit', 
        month: 'short', 
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    }
  };

  const renderTask = ({ item }) => (
    <View style={styles.taskItem}>
      <View style={styles.taskContent}>
        <View style={styles.checkboxCompleted}>
          <Ionicons name="checkmark" size={20} color="white" />
        </View>
        <View style={styles.taskTextContainer}>
          <Text style={styles.taskTitle}>{item.title}</Text>
          {item.description ? (
            <Text style={styles.taskDescription} numberOfLines={2}>
              {item.description}
            </Text>
          ) : null}
          <Text style={styles.completedDate}>
            Completada: {formatDate(item.completedAt)}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handleDeleteTask(item.id)}
      >
        <Ionicons name="trash" size={20} color="#F44336" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Historial</Text>
        <Text style={styles.headerSubtitle}>
          {completedTasks.length} {completedTasks.length === 1 ? 'tarea completada' : 'tareas completadas'}
        </Text>
      </View>

      {completedTasks.length > 0 && (
        <TouchableOpacity style={styles.clearButton} onPress={handleClearHistory}>
          <Ionicons name="trash-outline" size={18} color="#F44336" />
          <Text style={styles.clearButtonText}>Limpiar Historial</Text>
        </TouchableOpacity>
      )}

      {completedTasks.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Ionicons name="checkmark-circle-outline" size={80} color="#ccc" />
          <Text style={styles.emptyText}>Sin tareas completadas</Text>
          <Text style={styles.emptySubtext}>
            Las tareas que completes aparecerán aquí
          </Text>
        </View>
      ) : (
        <FlatList
          data={completedTasks}
          renderItem={renderTask}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#6200EE',
    padding: 20,
    paddingTop: 60,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
  headerSubtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: 5,
  },
  clearButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginTop: 15,
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#F44336',
  },
  clearButtonText: {
    color: '#F44336',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 8,
  },
  listContainer: {
    padding: 15,
  },
  taskItem: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  taskContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxCompleted: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  taskTextContainer: {
    flex: 1,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  taskDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  completedDate: {
    fontSize: 12,
    color: '#4CAF50',
    marginTop: 6,
    fontWeight: '500',
  },
  deleteButton: {
    padding: 8,
    marginLeft: 10,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#999',
    marginTop: 20,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#bbb',
    marginTop: 8,
    textAlign: 'center',
  },
});