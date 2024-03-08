import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function Button_Setting() {
    const Navigation = useNavigation();
    return (
        <TouchableOpacity
            onPress={() => Navigation.navigate('Setting')}
        >
            <Text style={styles.fortogPassword}>¿Olvidaste tu contraseña? </Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    fortogPassword: {
        fontSize: 15,
        color: "white",
        marginTop: 45,
        textDecorationLine: 'underline'
    }
})