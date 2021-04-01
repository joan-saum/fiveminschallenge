import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import type {Node} from 'react';

import Home from './scopes/Home';
import MyList from './scopes/MyList';

import TabBar from './components/TabBar/TabBar';

const Tab = createBottomTabNavigator();

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={props => (
          <TabBar
            routeNames={props.state.routeNames}
            navigation={props.navigation}
          />
        )}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="My List" component={MyList} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
