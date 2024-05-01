import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Navigation = useNavigation();
export const Button = ({ destination }) => {
    <TouchableOpacity
        onPress={() => Navigation.navigate(destination)}>
        <Text style={styles.Sing_Up}>Registare</Text>
    </TouchableOpacity>
}
const styles = StyleSheet.create({
    Sing_Up: {
        fontSize: 15,
        color: "#2AB9B7",
        textDecorationLine: 'underline',
        textDecorationColor: '#2AB9B7',
        left: 5
    }
})