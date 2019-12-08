import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import {Ionicons} from "@expo/vector-icons";

const TabIcon = (props) => (
    <Ionicons
        name={'md-people'}
        size={30}
        color={props.focused ? '#29235C' : 'darkgrey'}
    />
);

export default class ScreenMentorDetails extends React.Component {
    static navigationOptions = {
        tabBarIcon: TabIcon
    };
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Text>Screen DETAILS</Text>

                <Text>
                    {JSON.stringify(navigation.getParam('itemId'))}
                </Text>
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
