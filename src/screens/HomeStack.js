import React from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, DimensionValue, Dimensions, Button } from "react-native";
const { width, height } = Dimensions.get('window')
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Button_find } from "../componentes/ButtonAc";
const Home = () => {
    
    return (
        <View style={styles.Container}>
            <Text style={styles.title}>Medical Control</Text>
            <TextInput
                placeholder="Correo Electrónico"
                style={styles.textInput}
            />
            <TextInput
                placeholder="Contraseña"
                style={styles.textInput}
                secureTextEntry =  {true}

            />
            <Text style={styles.fortogPassword}>Olvidaste la Contraseña?</Text>
            <Button_find/>
            <Text>No tengo una cuenta</Text>

            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "#9CD2D3",
        alignItems: 'center', //para centrar
        justifyContent: 'center' //para que vaya al mero centro
    },
    title: {
        fontSize: 45,
        color: "#000000",
        fontWeight: 'bold'
    },
    textInput: {
        backgroundColor: "#F2E6CF",
        borderRadius: 20,
        width: "60%",
        padding: 12,
        height: 50,
        marginTop: 20,
        paddingStart: 15
    },
    fortogPassword: {
        fontSize: 14,
        color: "gray",
        marginTop: 20

    }

})

export default Home
