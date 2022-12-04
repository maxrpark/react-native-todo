import {createStackNavigator} from '@react-navigation/stack';
import {Home, Todo} from '../screens/';

export type RootStackParams = {
  Home: undefined;
  Todo: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Todo" component={Todo} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
