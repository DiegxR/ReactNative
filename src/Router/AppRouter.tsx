import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartApp from '../Screens/StartApp';
import Login from '../Screens/Login';
import Register from '../Screens/Register';
// Define el tipo de las rutas


// Crea una instancia del Stack Navigator

export type RootStackParamList = {
  StartApp: undefined;
  Login: undefined;
  Register: undefined
};
const Stack = createNativeStackNavigator<RootStackParamList>();
const AppRoutes: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='StartApp'
        component={StartApp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Login'
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Register'
        component={Register}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppRoutes;