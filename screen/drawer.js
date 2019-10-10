import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation';
import Gela from './gela';
import Japara from './japara';


const MyDrawerNavigator = createDrawerNavigator({
    Home: {

        screen: Gela,
        navigationOptions: {
            title: 'Home',
            drawerLabel: 'Home'
        }
    },
    Notifications: {
        screen: Japara,
        navigationOptions: {

            title: 'Settings',
            drawerLabel: 'Settings',


        }

    },
});



const MyApp = createAppContainer(MyDrawerNavigator);

export default MyApp