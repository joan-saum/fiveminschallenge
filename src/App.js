import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import type {Node} from 'react';
import {Provider as ReduxProvider} from 'react-redux';

import Home from './scopes/Home';
import Movie from './scopes/Movie';

import {store} from './redux/store';

const Stack = createStackNavigator();

const App: () => Node = () => {
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Movie" component={Movie} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
};

export default App;
