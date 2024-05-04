import React, { lazy, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from 'react-hook-form'
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RNPickerSelect from 'react-native-picker-select';


//Componentes
import { Inputs, Select_Data } from "../components/index";
//constants
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants/Screen";

export const Register = () => {

    const { control, handleSubmit, setValue } = useForm();
    useEffect(() => {
        AsyncStorage.getItem('Token')
            .then((value) => {            })
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
        <View style={style.container}>
            <ScrollView style={{ flex: 2, width: "100%" }}>
                <View style={[style.container, { gap: 50, paddingRight: 50 }]}>
                    <Inputs
                        control={control}
                        setValue={setValue}
                        name="nombre"//campo
                        placeholder="Nombre"
                        rules={{
                            required: 'Por favor rellenar los datos',
                            maxLength: {
                                value: 10,
                            }
                        }}
                        style={{
                            right: 70,
                            width: SCREEN_WIDTH * 0.5,
                            paddingVertical: 10
                        }}
                    />
                    <Inputs
                        control={control}
                        setValue={setValue}
                        name="apellido"//campo
                        placeholder="Apellido"
                        rules={{
                            required: 'Por favor rellenar los datos',
                            maxLength: {
                                value: 10,
                            }
                        }}
                        style={{
                            right: 70,
                            width: SCREEN_WIDTH * 0.5,
                            paddingVertical: 10
                        }}
                    />
                    <Inputs
                        control={control}
                        setValue={setValue}
                        name="cedula"//campo
                        placeholder="Cedula"
                        rules={{
                            required: 'Por favor rellenar los datos',
                            maxLength: {
                                value: 8,
                            },
                        }}
                        style={{
                            right: 70,
                            width: SCREEN_WIDTH * 0.5,
                            paddingVertical: 10
                        }}
                    />
                    <Inputs
                        control={control}
                        setValue={setValue}
                        name="telefono"//campo
                        placeholder="Telefono"
                        rules={{
                            required: 'Por favor rellenar los datos',
                            maxLength: {
                                value: 10,
                            }
                        }}
                        style={{
                            right: 70,
                            width: SCREEN_WIDTH * 0.5,
                            paddingVertical: 10
                        }} />
                    <Inputs
                        control={control}
                        setValue={setValue}
                        name="numero_inss"//campo
                        placeholder="Numero del INSS"
                        rules={{
                            required: 'Por favor rellenar los datos',
                            maxLength: {
                                value: 8,
                                message: 'El teléfono debe tener exactamente 8 números'
                            }
                        }}
                        style={{
                            right: 70,
                            width: SCREEN_WIDTH * 0.5,
                            paddingVertical: 10
                        }}
                    />
                    <RNPickerSelect
                        style={{
                            inputAndroid: {
                                backgroundColor: "#D8D9ED",
                                left: 35,
                                width: SCREEN_WIDTH * 0.7,
                                elevation: 10,
                            },
                        }}
                        placeholder={{
                            label: 'Municipios',
                            value: null,
                            color: 'gray'
                        }}
                        onValueChange={(value) => console.log(value)}
                        items={[
                            { label: 'Masaya', value: 1 },
                            { label: 'Leon', value: 2 },
                            { label: 'Granada', value: 3 },
                            { label: 'Esteli', value: 4 },
                            { label: 'Managua', value: 5 },
                            { label: 'Diriamba', value: 6 },
                            { label: 'Carazo', value: 7 },
                            { label: 'Matagalpa', value: 8 },
                            { label: 'Jinotega', value: 9 },
                            { label: 'Rivas', value: 10 },
                            { label: 'Ticuantepe', value: 11 },
                            { label: 'Tipitapa', value: 12 },
                            { label: 'Ciudad Sandino', value: 13 }
                        ]}
                    />

                    <RNPickerSelect
                        style={{
                            inputAndroid: {
                                backgroundColor: "#D8D9ED",
                                left: 35,
                                width: SCREEN_WIDTH * 0.7,
                                elevation: 10
                            }
                        }}
                        placeholder={{
                            label: 'Lugar de Nacimiento',
                            value: null,
                            color: 'gray'
                        }}
                        onValueChange={(value) => console.log(value)}
                        items={[
                            { label: 'Hospital Bautista', value: 23 },
                            { label: 'Hospital Lenin Fonseca', value: 45 },
                            { label: 'Hospital Bertha Calderon', value: 15 },
                            { label: 'Hospital Militar', value: 31 },
                            { label: 'Hospital Centro de Salud', value: 3159 },
                        ]}
                    />

                    <RNPickerSelect
                        style={{
                            inputAndroid: {
                                backgroundColor: "#D8D9ED",
                                left: 35,
                                width: SCREEN_WIDTH * 0.7,
                                elevation: 10
                            }
                        }}
                        placeholder={{
                            label: 'Sexo',
                            value: null,
                            color: 'gray'
                        }}
                        onValueChange={(value) => console.log(value)}
                        items={[
                            { label: 'F', value: 1239 },
                            { label: 'M', value: 2456 }
                        ]}
                    />

                    <RNPickerSelect
                        style={{
                            inputAndroid: {
                                backgroundColor: "#D8D9ED",
                                left: 35,
                                width: SCREEN_WIDTH * 0.7,
                                elevation: 10
                            }
                        }}
                        placeholder={{
                            label: 'Tipo de Sangre',
                            value: null,
                            color: 'gray'
                        }}
                        onValueChange={(value) => console.log(value)}
                        items={[
                            { label: 'A', value: 129 },
                            { label: 'B', value: 256 },
                            { label: 'AB', value: 4156 },
                            { label: 'O', value: 246 }
                        ]}
                    />
                </View>
                <TouchableOpacity onPress={handleSubmit(Onsubmit)}>
                    <Text style={{ fontSize: 25, textAlign: 'center', color: '#000', fontWeight: 'bold', backgroundColor: '#FFFCF5', width: '50%', borderRadius: 50, padding: 10, left: 100, marginTop: 50 }} >Siguiente</Text>
                </TouchableOpacity>
               
            </ScrollView>
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        backgroundColor: "#2AB9B7",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 8,
    },
    Inputs: {
        // Con esto puedes cambiar la separacion de los inputs
        gap: 100,
    },
    change: {
        right: '800'
    }
})

