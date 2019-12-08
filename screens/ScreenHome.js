import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { Ionicons } from '@expo/vector-icons';



export default class ScreenHome extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Screen HOme</Text>
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
