import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {ReportList} from "../lists/ReportList";


function Item({title, description, status,created_at, author, event}) {
    let label;
    if (status === "accepted") {
        label =  <View style={styles.green_label}><Text style={styles.status}>Принят</Text></View>
    } else {
        label = <View style={styles.red_label}><Text style={styles.status}>Отклонён</Text></View>
    }
    return (
        <View style={styles.item}>
            {label}
            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.description}> {description} </Text>
            </View>
            <Text style={styles.created_at}> {created_at}</Text>
        </View>
    );
}

export default class ScreenProfile extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={ReportList}
                    renderItem={({ item }) =>
                            <Item title={item.title}
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
        backgroundColor: 'green',
        padding: -10,
        
    },

    title: {
        fontSize: 18
    },
    header: {
        flexDirection: 'row'
    },
    created_at: {
        fontSize: 14,
        opacity: 0.3,
        textAlign: 'right',
        paddingRight: 10
    }
});
