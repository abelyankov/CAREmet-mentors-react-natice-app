import React from 'react';
import {View, StyleSheet, Text, FlatList, TouchableOpacity} from 'react-native';
import { MentorList} from "../lists/MentorList";
import { ReportList} from "../lists/ReportList";

function ItemMentor({first_name, last_name, age, about}) {
    return (
        <View style={styles.item_mentor}>
            <Text style={styles.full_name}>{first_name} {last_name} <Text style={styles.age}>({age}лет)</Text> </Text>
            <Text style={styles.about}>О себе: {about} </Text>
        </View>
    );
}

function ItemReport({title, description, status,created_at, author, event}) {
    let label;
    if (status === "accepted") {
        label =  <View style={styles.green_label}><Text style={styles.status}>Принят</Text></View>
    } else {
        label = <View style={styles.red_label}><Text style={styles.status}>Отклонён</Text></View>
    }
    return (
        <View style={styles.item}>
            {label}
            <View style={styles.body}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}> {description} </Text>
                <Text style={styles.event}>Событие: {event} </Text>
                <View style={styles.footer}>
                    <Text style={styles.author}>Автор: {author};</Text>
                    <Text style={styles.created_at}> Создан: {created_at}</Text>
                </View>
            </View>
        </View>
    );
}

export default class ScreenHome extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate('Наставники');
                    }}>
                    <Text style={styles.title_header}>Наставники</Text>
                </TouchableOpacity>
                <FlatList
                    data={MentorList}
                    renderItem={({ item }) =>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate('MentorDetails', {
                                    key: item.key,
                                    first_name: item.first_name,
                                    last_name: item.last_name,
                                    age: item.age,
                                    phone_number: item.phone_number,
                                    work: item.work,
                                    workPosition: item.workPosition,
                                    hobby: item.hobby,
                                    about: item.about

                                });
                            }}>
                            <ItemMentor first_name={item.first_name}
                                  last_name={item.last_name}
                                  age = {item.age}
                                  about = {item.about}/>
                        </TouchableOpacity>
                    }
                    keyExtractor={item =>item.key}
                />
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate('Отчёты');
                    }}>
                    <Text style={styles.title_header}>Отчёты</Text>
                </TouchableOpacity>
                <FlatList
                    data={ReportList}
                    renderItem={({ item }) =>
                        <ItemReport title={item.title}
                              description={item.description}
                              status = {item.status}
                              author = {item.author}
                              event = {item.event}
                              key = {item.key}
                              created_at={item.created_at}/>
                    }
                    keyExtractor={item =>item.key}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title_header: {
        backgroundColor: '#b3b4b5',
        fontSize: 23,
        marginBottom: 5,
        padding: 5,
        opacity: 0.5
    },
    item: {
        marginVertical: 5,
        marginHorizontal: 10,
        borderWidth: 0.5,
        borderRadius: 5,
        borderColor: '#ccc',
        flex: 1
    },
    green_label: {
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        fontSize: 17,
        backgroundColor: '#009A95',
    },
    red_label: {
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        fontSize: 17,
        backgroundColor: '#C84267',
    },
    status: {
        padding: 5,
        fontSize: 15,
        color: 'white',
    },
    body: {
        padding: 5,
    },
    title: {
        fontSize: 18
    },
    header: {
        flexDirection: 'row'
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        opacity: 0.4,
        fontSize: 14
    },
    description: {
        fontSize:15,
    },
    event: {
        opacity: 0.4
    },
    item_mentor: {
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 10,
        borderWidth: 0.5,
        borderRadius: 5,
        borderColor: '#ccc'
    }
});
