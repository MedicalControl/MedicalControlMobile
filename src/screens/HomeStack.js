import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useForm } from 'react-hook-form'
import { useNavigation } from "@react-navigation/native";
//Nuevo componente
import Inputs from "../components/Inputs";
//Haz que los botones que son links sea uno solo pasa propiedades para que puedas trabajar con un mismo componente
import { Button_CreateC } from "../components/ButtonCreatC";


export const HomeStack = () => {
    //objetos
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
        //Api
        AsyncStorage.setItem('Token', 'token123', () => {
            console.log(`Se ha guardado el token`)
        })
        Navigation.navigate('Setting')
    }
    return (
        <View style={styles.Container}>
            <View>
                <Image
                    source={require('../resources/logo.png')}
                    style={{
                        width: 300,
                        height: 180,
                        borderRadius: 10,
                        zIndex: 1,
                        left: 40, 
                    }}
                />
                <Text style={styles.title}>Medical Control</Text>
            </View>
            <View style={{ gap: 50 }}>
                <Inputs
                    control={control}
                    setValue={setValue}
                    name="Correo"//campo
                    placeholder="Ingrese su correo electronico"
                    rules={{
                        required: 'Este campo es obligatorio',
                        pattern: {
                            value: /^\S+@\S+$/i,
                            message: 'Ingrese un correo electrónico válido',
                        }
                    }}
                />
                <Inputs
                    secureTextEntry={true}
                    control={control}
                    setValue={setValue}
                    name="Contraseña"
                    placeholder="Ingrese su contraseña"
                    rules={{
                        required: 'Este campo es obligatorio',
                        maxLength: {
                            value: 10,
                            message: 'No ingrese más de 10 digitos',
                        },
                    }}
                />
            </View>
            <TouchableOpacity onPress={handleSubmit(Onsubmit)}
                style={styles.Button} >
                <Text style={{ fontSize: 25, textAlign: 'center', color: '#fff', fontWeight: 'bold' }} >Iniciar Sesion</Text>
            </TouchableOpacity>
            <View style={styles.textAccount}>
                <Text>No tienes ningúna cuenta?</Text>
                <Button_CreateC />
            </View>
            <StatusBar style="auto" />
        </View>
    )
}
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "#FFFCF5",
        alignItems: 'center', //para centrar
        justifyContent: 'center', //para que vaya al mero centro
        gap: 50
    },
    title: {
        fontSize: 45,
        color: "#000000",
        fontWeight: 'bold'
    },
    textAccount: {
        flexDirection: 'row',
    },
    Button: {
        backgroundColor: "#2AB9B7",
        padding: 10,
        width: "50%",
        alignItems: 'center',
        borderRadius: 50,
    },
})