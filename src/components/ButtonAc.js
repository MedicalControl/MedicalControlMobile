import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";


export function Button_find() {
    const Navigation = useNavigation();
    return (

        <TouchableOpacity
            onPress={() => Navigation.navigate("Account")}
            style={styles.Button}
    
        >
            <Text style={styles.Text} >Acceder </Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    Button: {
        backgroundColor: "#2AB9B7",
        padding: 10,
        marginTop: "20%",
        width: "50%",
        alignItems: 'center',
        borderRadius: 50,
    },
    Text: {
        fontSize: 30,
        color: "#F2E6CF",
        fontWeight: 'bold',
    }
})