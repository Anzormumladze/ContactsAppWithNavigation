import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import axios from 'axios';
import { connect } from 'react-redux'

const mapDispatchToProps = (dispatch) => ({
    fetchUsers: async () => {
        const { data: users } = await axios.get('https://jsonplaceholder.typicode.com/users')

        dispatch({
            type: 'INIT_USERS',
            users
        })
    }
})

const FetchUsersButton = (props) => {
    return (
        <Button title="fetch" onPress={() => props.fetchUsers()} />

    )
}


const FetchUsersButtonHOC = connect(
    null,
    mapDispatchToProps
)(FetchUsersButton)

export default FetchUsersButtonHOC