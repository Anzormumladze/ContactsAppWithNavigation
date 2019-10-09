import GetData from './screen/getData'
import Home from './screen/Home'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SomeData from './screen/someData'
import Drawer from './screen/drawer';


const TabNavigator = createBottomTabNavigator({
  Home: { screen: Home },
  Settings: { screen: GetData },
  News: { screen: SomeData },
  drawer: { screen: Drawer }

});

const MainNavigator = createStackNavigator({
  Home: { screen: GetData },
  Profile: { screen: SomeData },
});




export default createAppContainer(TabNavigator);


