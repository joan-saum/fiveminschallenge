import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import type {Node} from 'react';
import {Provider as ReduxProvider} from 'react-redux';

import Home from './scopes/Home';
import MyList from './scopes/MyList';

import TabBar from './components/TabBar/TabBar';

import {store} from './redux/store';

const Tab = createBottomTabNavigator();

const App: () => Node = () => {
  return (
    <ReduxProvider store={store}>
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
    </ReduxProvider>
  );
};

export default App;
