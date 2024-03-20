import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useForm } from 'react-hook-form'
import { Dimensions } from "react-native";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

//Componentes
import Inputs from "../components/Inputs";

export const AccountScreen = () => {
    const back = useNavigation();
    const { control, handleSubmit, setValue } = useForm();
    useEffect(() => {
        AsyncStorage.getItem('Token')
            .then((value) => {
                if (value) {
                    back();
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
    }

    return (
        <View style={style.fondo}>
            <View>
                <Inputs
                    control={control}
                    setValue={setValue}
                    name="nombre"//campo
                    placeholder="Nombre"
                    style={{
                        right: 70,
                        width: Dimensions.get('screen').width * 0.5,
                        paddingVertical: 10

                    }}
                />
                <Inputs
                    control={control}
                    setValue={setValue}
                    name="apellido"//campo
                    placeholder="Apellido"
                    style={{
                        right: 70,
                        width: Dimensions.get('screen').width * 0.5,
                        paddingVertical: 10
                    }}
                />
                <Inputs
                    control={control}
                    setValue={setValue}
                    name="cedula"//campo
                    placeholder="Cedula"
                    style={{
                        right: 70,
                        width: Dimensions.get('screen').width * 0.5,
                        paddingVertical: 10
                    }}
                />
                <Inputs
                    control={control}
                    setValue={setValue}
                    name="telefono"//campo
                    placeholder="Telefono"
                    style={{
                        right: 70,
                        width: Dimensions.get('screen').width * 0.5,
                        paddingVertical: 10,
                    }}
                />
            </View>
            <TouchableOpacity onPress={handleSubmit(Onsubmit)}
            >
                <Text style={{ fontSize: 25, textAlign: 'center', color: '#000', fontWeight: 'bold' }} >Siguiente</Text>
            </TouchableOpacity>
        </View>
    )
}
const style = StyleSheet.create({
    fondo: {
        backgroundColor: "#2AB9B7",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    change: {
        right: '800'
    }
})
