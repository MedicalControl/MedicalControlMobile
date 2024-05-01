import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useForm } from 'react-hook-form'
import { useNavigation } from "@react-navigation/native";
import Constant from 'expo-constants'
//Nuevo componente
import { Button, Button_find, Inputs } from "../components/index";

export const Login = () => {
    //objetos
    const { control, handleSubmit, setValue } = useForm();
    const Navigation = useNavigation();
    /*useEffect(() => {

        AsyncStorage.getItem('Token')
            .then((value) => {
                if (value) {
                    Navigation.navigate('Home')
                }
            })
            .catch((err) => console.error(err))
    });*/
    const Onsubmit = async (data) => {
        /*console.log(data);
        const ApiUri = await Constant.expoConfig.extra.ApiUri;
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        console.log(data);
        fetch(ApiUri, requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error('The request was not successful: ' + response.status);
                }
                return response.json();
            })
            .then(async (response) => {
                await AsyncStorage.setItem("Token", response.token, () => {
                    console.log('Token was saved successfully')
                })
            })
            .catch(error => console.error('Error:', error));*/

        Navigation.navigate('Home');
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
                        justifyContent: 'center',
                    }}
                />
                <Text style={styles.title}>Medical Control</Text>
            </View>
            <View style={{ gap: 50 }}>
                <Inputs
                    control={control}
                    setValue={setValue}
                    name="email"//campo
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
                    name="password"
                    placeholder="Ingrese su contraseña"
                    rules={{
                        required: 'Este campo es obligatorio',
                    }}
                />
            </View>

            <TouchableOpacity onPress={handleSubmit(Onsubmit)}
                style={styles.Button} >
                <Text style={{ fontSize: 25, textAlign: 'center', color: '#fff', fontWeight: 'bold' }} >Iniciar Sesion</Text>
            </TouchableOpacity>
            <View style={styles.textAccount}>
                <Text>No tienes ningúna cuenta?</Text>
                <Button />
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
        gap: 50,
    },
    title: {
        fontSize: 45,
        color: "#000000",
        fontWeight: 'bold',
        left: 22
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
        elevation: 80
    },
})