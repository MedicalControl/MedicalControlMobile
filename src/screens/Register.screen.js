import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useForm } from 'react-hook-form'
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RNPickerSelect from 'react-native-picker-select';
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

//Componentes
import { Inputs } from "../components/index";
//constants
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants/Screen";

export const Register = () => {
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

    //Municipios
    const selectedItem = {
        title: 'Selected item title',
        description: 'Secondary long descriptive text ...',
    };

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

                    <RNPickerSelect
                   
                        style={{
                            inputAndroid: {
                                backgroundColor: '#D8D9ED',
                            },
                        }}
                        onValueChange={(value) => console.log(value)}
                        placeholder= 'Municipio'
                        items={[
                            { label: 'Masaya', value: 'masaya' },
                            { label: 'Leon', value: 'leon' },
                            { label: 'Granada', value: 'granada' },
                            { label: 'Esteli', value: 'esteli' },
                            { label: 'Managua', value: 'managua' },
                            { label: 'Diriamba', value: 'diriamba' },
                            { label: 'Carazo', value: 'carazo' },
                            { label: 'Matagalpa', value: 'matagalpa' },
                            { label: 'Jinotega', value: 'jinotega' },
                            { label: 'Rivas', value: 'rivas' },
                            { label: 'Ticuantepe', value: 'ticuantepe' },
                            { label: 'Tipitapa', value: 'tipitapa' },
                            { label: 'Ciudad Sandino', value: 'ciudad sandino' }
                        ]}
                    />
                    <Inputs
                        control={control}
                        setValue={setValue}
                        name="numero_inss"//campo
                        placeholder="Numero del INSS"
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
                    <RNPickerSelect
                        style={{
                            inputAndroid: {
                                backgroundColor: '#D8D9ED',
                            },
                        }}
                        onValueChange={(value) => console.log(value)}
                        items={[
                            { label: 'Estudiante', value: 'estudiante' },
                            { label: 'Ingeniero', value: 'ingeniero' },
                            { label: 'Medico', value: 'medico' },
                            { label: 'Contador', value: 'contador' }
                        ]}
                        placeholder='Municipio'
                    />
                </View>
                <TouchableOpacity onPress={handleSubmit(Onsubmit)}>
                    <Text style={{ fontSize: 25, textAlign: 'center', color: '#000', fontWeight: 'bold' }} >Siguiente</Text>
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
