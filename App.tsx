import { StatusBar } from 'expo-status-bar';
import { NavigationContainer} from '@react-navigation/native';
import AppRoutes from './src/Router/AppRouter';

export default function App() {

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <AppRoutes/>
      
    </NavigationContainer>
  );
}

