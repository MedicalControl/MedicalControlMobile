import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import React from "react";
//Screens
import { Login, Register, Home } from '../screens/index.js'
const HomeStackNa = createNativeStackNavigator();
export function MyStack() {
    return (
        <HomeStackNa.Navigator
            initialRouteName="HomeStack"
        >
            <HomeStackNa.Screen
                name='Login'
                component={Login}
                options={{
                    headerShown: false
                }}
            />
            <HomeStackNa.Screen
                name='Register'
                component={Register}
                options={{
                    headerShown: false
                }}
            />
            <HomeStackNa.Screen
                name='Home'
                component={Home}
                options={{
                    headerShown: false
                }}
            />
        </HomeStackNa.Navigator>
    )
}