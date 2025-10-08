// src/navigations/AppNavigation.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigation from './TabNavigation';
import { AddTaskScreen } from '../screens/Tasks';
import { screens } from '../utils';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen 
        name={screens.tasks.tab} 
        component={TabNavigation} 
      />
      <Stack.Screen
        name={screens.tasks.add}
        component={AddTaskScreen}
        options={{
          presentation: 'modal',
        }}
      />
    </Stack.Navigator>
  );
}