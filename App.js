import GetData from './screen/getData'
import React from 'react'
import Home from './screen/Home'
import { createAppContainer } from 'react-navigation';
import SomeData from './screen/someData'
import Drawer from './screen/drawer';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons'

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({ focused }) => <Icon name='home' size={20} color={focused ? '#FFF' : '#DACE91'} />,
      }
    },
    Fetch: {
      screen: GetData,
      navigationOptions: {
        tabBarIcon: ({ focused }) => <Icon name='settings' size={20} color={focused ? '#FFF' : '#DACE91'} />,
      }
    },
    List: {
      screen: SomeData,
      navigationOptions: {
        tabBarIcon: ({ focused }) => <Icon name='update' size={20} color={focused ? '#FFF' : '#DACE91'} />,
      }
    },
    drawer: {
      screen: Drawer,
      navigationOptions: {
        tabBarIcon: ({ focused }) => <Icon name='power' size={20} color={focused ? '#FFF' : '#DACE91'} />,
      }
    }

  },
  {
    initialRouteName: 'Home',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: 'black' },
  }
);





export default createAppContainer(TabNavigator);


