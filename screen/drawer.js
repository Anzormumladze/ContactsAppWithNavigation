import { createDrawerNavigator } from 'react-navigation-drawer'
import React, { Component } from 'react';
import { View, Button, StyleSheet, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import Gela from './gela';
import Japara from './japara';


const MyDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: Gela,
    },
    Notifications: {
        screen: Japara,
    },
});



const MyApp = createAppContainer(MyDrawerNavigator);

export default MyApp