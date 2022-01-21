import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import Home from './pages/Home'

export default function App() {

  const Stack = createStackNavigator()
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="NAOREMA" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}