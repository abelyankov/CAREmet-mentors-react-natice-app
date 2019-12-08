import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import BottomTabNavigator from './BottomTabNavigator';
import ScreenMentorDetails from "../screens/ScreenMentorDetails";
import ScreenMentors from "../screens/ScreenMentors";
import ScreenProfile from "../screens/ScreenProfile";
import ScreenHome from "../screens/ScreenHome";
import ScreenReports from "../screens/ScreenReports";

export default createAppContainer(
    createStackNavigator({
        Button: BottomTabNavigator,
        MentorDetails: {
            screen: ScreenMentorDetails,
            navigationOptions: ({ navigation }) => ({
                title: `Наставник #${navigation.state.params.itemId}`,
            }),
        },
        Mentors: {
            screen: ScreenMentors,
            navigationOptions: () => ({
                title: `Наставники`,
            }),
        },
        Profile: {
            screen: ScreenProfile,
            navigationOptions: () => ({
                title: `Профиль`,
            }),
        },
        Home: {
            screen: ScreenHome,
            navigationOptions: () => ({
                title: `Главная`,
            }),
        },
        Reports: {
            screen: ScreenReports,
            navigationOptions: () => ({
                title: `Отчёты`,
            }),
        },
    })
);
