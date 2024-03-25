import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function Button_CreateC() {
    const Navigation = useNavigation();
    return (
        <TouchableOpacity
            onPress={() => Navigation.navigate('Account')}>
            <Text style={styles.Sing_Up}> Registare</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    Sing_Up: {
        fontSize: 15,
        color: "black",
        textDecorationLine: 'underline',
    }
})