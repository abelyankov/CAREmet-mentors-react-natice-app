import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { Ionicons } from '@expo/vector-icons';



export default class ScreenProfile extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Screen Reports</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
