import React, { Component } from 'react';
import { StyleSheet, View, Text, PermissionsAndroid, FlatList, TouchableOpacity } from 'react-native';
import Contacts from 'react-native-contacts';
import { Card, SearchBar } from 'react-native-elements';


export default class Home extends Component {

    state = {
        contacts: [],
        alphabet: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]





    }

    componentDidMount() {
        if (Platform.OS === 'android') {
            PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
                {
                    title: 'Contacts',
                    message: ' This app would like to see your contacts'
                }
            ).then(() => {
                this.getList();
            })
        } else if (Platform.OS === 'ios') {
            this.getList();
        }
    }

    getList = () => {
        Contacts.getAll((err, contacts) => {
            if (err === 'denied') {
                console.log("cannot access");
            } else {
                this.setState({ contacts });
                this.setState({ inMemoryContacts: contacts })
                console.log(this.state.contacts.filter(el => console.log(el.givenName)))


            }
        })
    }

    renderItem = ({ item }) => (
        <Card>
            <View style={styles.itemContainer} >
                <Text style={styles.contactName}>

                    Name: {`${item.givenName} `} {item.familyName}
                </Text>
                {item.phoneNumbers.map(phone => (
                    <Text key={item.recordID} style={styles.phones}>{phone.label} : {phone.number}</Text>
                ))}
            </View>
        </Card>
    )


    searchContacts = (value) => {
        const filterContacts = this.state.inMemoryContacts.filter(
            contact => {
                let contactLowerCase = (contact.givenName + ' ' + contact.familyName).toLowerCase()
                let searchTermLowerCase = value.toLowerCase()

                return contactLowerCase.indexOf(searchTermLowerCase) > -1
            }
        )
        this.setState({ contacts: filterContacts })
    }


    scrollToitem = (number) => {


        randomIndex = number
        this.flatListRef.scrollToIndex({ animated: true, index: "" + randomIndex, offset: 0 })
    }

    render() {


        return (

            <View style={styles.container}>

                <SearchBar
                    placeholder="Type Here..."
                    onChangeText={(value) => this.searchContacts(value)}
                    value={null}
                />
                <View style={{ flexDirection: 'row' }}>


                    <FlatList
                        ref={(ref) => { this.flatListRef = ref; }}
                        data={this.state.contacts.sort((a, b) => a.givenName.localeCompare(b.givenName))}
                        renderItem={this.renderItem}
                        //Setting the number of column
                        numColumns={1}
                        keyExtractor={(item, index) => index.toString()}


                    />
                    <View style={{ marginTop: 20, padding: 10 }}>
                        <FlatList

                            data={this.state.alphabet}
                            renderItem={({ item }) => <TouchableOpacity onPress={(number) => {
                                this.state.contacts.map((el, index) => {
                                    if (item === el.givenName[0]) {
                                        number = index
                                        this.scrollToitem(number)
                                    } else {
                                        return null
                                    }

                                })
                            }}><Text style={{ fontSize: 13 }}>{item}</Text></TouchableOpacity>}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>



                </View>
            </View>

        )
    }
}



const styles = StyleSheet.create({
    itemContainer: {
        alignItems: 'center',
        justifyContent: 'center',

    },

    contactName: {

    },
});