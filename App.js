import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import AddScreen from './src/screens/AddScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import ConfigScreen from './src/screens/ConfigScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Meus Lembretes' }} 
        />
        <Stack.Screen 
          name="Add" 
          component={AddScreen} 
          options={{ title: 'Nova Tarefa' }} 
        />
        <Stack.Screen 
          name="Details" 
          component={DetailsScreen} 
          options={{ title: 'Detalhes' }} 
        />
        <Stack.Screen 
          name="Config" 
          component={ConfigScreen} 
          options={{ title: 'Configurações' }} 
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
