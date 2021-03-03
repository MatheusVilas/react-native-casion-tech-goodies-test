import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import News from '../screens/News';
import Details from '../screens/Details';

const Stack = createStackNavigator();

function StackRoute() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="News">
      <Stack.Screen name="News" component={News} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}

export default StackRoute;
