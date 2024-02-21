import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import React from "react";
import { StyleSheet } from "react-native";
//Screens
import HomeStack from "./screens/HomeStack";
import SettingScreens from "./screens/SettingScreens";
import AccountScreen from "./screens/accountScreen";
import Create from "./screens/CreatScreens";


//Iconos
import { MaterialCommunityIcons } from '@expo/vector-icons';

//Funcion
const HomeStackNa = createNativeStackNavigator();
function MyStack() {
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
            <HomeStackNa.Screen
                name='Create'
                component={Create}
                options={{
                    headerShown: false
                }}
            />


        </HomeStackNa.Navigator>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
}