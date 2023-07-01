import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from './src/Router/AppRouter';
import { Provider } from 'react-redux';
import store from './src/Redux/Store/Store';


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar style="auto" />
        <AppRoutes />
      </NavigationContainer>
    </Provider>
  );
}

