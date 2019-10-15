import { createDrawerNavigator } from 'react-navigation-drawer'
import Gela from './gela';
import Japara from './japara';
import { createAppContainer } from 'react-navigation';
import Navigator from '../MaterialBottomNavigator/Navigator';






const MyDrawerNavigator = createDrawerNavigator(
    {

        Home: {
            screen: Gela,
        },
        Notifications: {
            screen: Japara,
        }
    });


const App = createAppContainer(MyDrawerNavigator)

export default App