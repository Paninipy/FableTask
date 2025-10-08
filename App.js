// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigation } from './src/navigations';
import { TasksProvider } from './src/context';

export default function App() {
  return (
    <TasksProvider>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </TasksProvider>
  );
}