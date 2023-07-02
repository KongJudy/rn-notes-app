import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import Main from './screens/MainComponent';

export default function App() {
  return (
    <NavigationContainer>
      <Main />
      <StatusBar style='auto' />
    </NavigationContainer>
  );
}
