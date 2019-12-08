import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class ScreenHome extends React.Component {
    render() {
        return (
            <View style={styles.container}>
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
