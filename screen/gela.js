import React from "react";
import { View, Text } from "react-native";
import MyHeader from '../components/MyHeader';

const gela = props => {
    return (
        <View>
            <MyHeader navigation={props.navigation} title="Home" />
            <Text>This is Home Screen</Text>
        </View>
    );
};

export default gela;