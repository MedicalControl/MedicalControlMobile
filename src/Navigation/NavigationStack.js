import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import React from "react";
//Screens
import { AccountScreen, CreateAccount, HomeStack, SettingScreens } from '../screens/index.js'
const HomeStackNa = createNativeStackNavigator();
export function MyStack() {
    return (
        <HomeStackNa.Navigator
            initialRouteName="HomeStack"
        >
            <HomeStackNa.Screen
                name='HomeStack'
                component={HomeStack}
                options={{
                    headerShown: false
                }}
            />
            <HomeStackNa.Screen
                name='Account'
                component={AccountScreen}
                options={{
                    headerShown: false
                }}
            />
            <HomeStackNa.Screen
                name='Setting'
                component={SettingScreens}
                options={{
                    headerShown: false
                }}
            />
        </HomeStackNa.Navigator>
    )
}