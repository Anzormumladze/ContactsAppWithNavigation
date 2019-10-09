import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    users: state.users,
})

const UserList = (props) => {
    return props.users.map(({ name }, index) => {
        return <Text key={index}>{name}</Text>
    })
}

const UserListHOC = connect(
    mapStateToProps,
    null
)(UserList)

export default UserListHOC