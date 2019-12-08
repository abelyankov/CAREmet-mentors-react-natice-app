import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const TabIcon = (props) => (
    <Ionicons
        name={'md-people'}
        size={30}
        color={props.focused ? 'blue' : 'darkgrey'}
    />
);

const MentorList = [
    {
        key: '1',
        first_name: 'Сергей',
        last_name: 'Иванов',
        age: 25,
        phone_number: '+7(777)111-11-11',
        work: 'АО "КБТУ"',
        workPosition: 'Программист',
        hobby: 'Любит играть в гиры',
        about: 'Нормальный человек...'
    },
    {
        key: '2',
        first_name: 'Сергей',
        last_name: 'Иванов',
        age: 26,
        phone_number: '+7(777)111-11-11',
        work: 'АО "КБТУ"',
        workPosition: 'Программист',
        hobby: 'Любит играть в гиры',
        about: 'Нормальный человек...'
    },
    {
        key: '3',
        first_name: 'Сергей',
        last_name: 'Иванов',
        age: 25,
        phone_number: '+7(777)111-11-11',
        work: 'АО "КБТУ"',
        workPosition: 'Программист',
        hobby: 'Любит играть в гиры',
        about: 'Нормальный человек...'
    },
    {
        key: '4',
        first_name: 'Сергей',
        last_name: 'Иванов',
        age: 25,
        phone_number: '+7(777)111-11-11',
        work: 'АО "КБТУ"',
        workPosition: 'Программист',
        hobby: 'Любит играть в гиры',
        about: 'Нормальный человек...'
    },
    {
        key: '5',
        first_name: 'Сергей',
        last_name: 'Иванов',
        age: 25,
        phone_number: '+7(777)111-11-11',
        work: 'АО "КБТУ"',
        workPosition: 'Программист',
        hobby: 'Любит играть в гиры',
        about: 'Нормальный человек...'
    },
    {
        key: '6',
        first_name: 'Сергей',
        last_name: 'Иванов',
        age: 25,
        phone_number: '+7(777)111-11-11',
        work: 'АО "КБТУ"',
        workPosition: 'Программист',
        hobby: 'Любит играть в гиры',
        about: 'Нормальный человек...'
    },
    {
        key: '7',
        first_name: 'Сергей',
        last_name: 'Иванов',
        age: 25,
        phone_number: '+7(777)111-11-11',
        work: 'АО "КБТУ"',
        workPosition: 'Программист',
        hobby: 'Любит играть в гиры',
        about: 'Нормальный человек...'
    },
];

function Item({first_name, last_name, age, about}) {
    return (
        <View style={styles.item}>
            <Text style={styles.full_name}>{first_name} {last_name} <Text style={styles.age}>({age} лет)</Text> </Text>
            <Text style={styles.about}>О себе: {about} </Text>
        </View>
    );
}

export default class ScreenMentors extends React.Component {

    static navigationOptions = {
        tabBarIcon: TabIcon
    };

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={MentorList}
                    renderItem={({ item }) => <Item first_name={item.first_name}
                                                    last_name={item.last_name}
                                                    age = {item.age}
                                                    about = {item.about}
                    />}
                    keyExtractor={item => item.key}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    item: {
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 10,
        borderWidth: 0.5,
        borderRadius: 5,
        borderColor: '#ccc'
    },
    full_name: {
        fontSize: 18,
    },
    age: {
        fontSize: 17,
        opacity: 0.5
    },
    about: {
        marginTop: 5,
        fontSize: 15
    }
});
