import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import GetData from './screen/getData';
import SomeData from './screen/someData';



const ChangeScreen = createStackNavigator({
    GetData: { screen: GetData },
    SomeData: { screen: SomeData }
},

    {
        initialRouteName: 'GetData'
    }
)



export default createAppContainer(ChangeScreen)