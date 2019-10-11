import { createDrawerNavigator } from 'react-navigation-drawer'
import Gela from './gela';
import Japara from './japara';




const MyDrawerNavigator = createDrawerNavigator(



    {





        Home: {

            screen: Gela,

        },
        Notifications: {

            screen: Japara,


        }



    });





export default MyDrawerNavigator