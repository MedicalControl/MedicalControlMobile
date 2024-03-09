import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useForm } from 'react-hook-form'
import { useNavigation } from "@react-navigation/native";

//Nuevo componente
import Input from "../components/Inputs";

//Haz que los botones que son links sea uno solo pasa propiedades para que puedas trabajar con un mismo componente
import { Button_CreateC } from "../components/ButtonCreatC";

export const HomeStack = () => {

    const { control, handleSubmit, setValue } = useForm();
    const Navigation = useNavigation();
    useEffect(() => {
        AsyncStorage.getItem('Token')
            .then((value) => {
                if (value) {
                    Navigation.navigate('Setting')
                }
            })
            .catch((err) => console.error(err))
    });

    const Onsubmit = (data) => {
        console.log(data);
        AsyncStorage.setItem('Token', 'token123', () => {
            console.log(`Se ha guardado el token`)
        })

        Navigation.navigate('Setting')
    }
    return (
        <View style={styles.Container}>
            <Text style={styles.title}>Medical Control</Text>
            <View>
                <Input
                    control={control}
                    setValue={setValue}
                    name="Correo"
                    placeholder="Ingrese su correo electronico"
                    rules={{ required: 'Este campo es obligatorio' }} />
                <Input
                    control={control}
                    setValue={setValue}
                    name="Contraseña"
                    placeholder="Ingrese su contraseña"
                    rules={{ required: 'Este campo es obligatorio' }} />
            </View>
            <TouchableOpacity onPress={handleSubmit(Onsubmit)}
                style={styles.Button} >
                <Text style={{ fontSize: 25, textAlign: 'center', color: '#fff' }} >Iniciar Sesion</Text>
            </TouchableOpacity>
            <Text
                style={styles.textCuenta}
            >No tienes ningúna cuenta?</Text>
            <Button_CreateC />
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
    textCuenta: {
        marginTop: 20,
        right: 45,
    },
    Button: {
        backgroundColor: "gray",
        padding: 10,
        marginTop: "20%",
        width: "50%",
        alignItems: 'center',
        borderRadius: 50,
    },
})

