import React, {useState} from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useForm } from 'react-hook-form'
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RNPickerSelect from 'react-native-picker-select';
<<<<<<< HEAD
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import DateTimePicker from 'react-native-ui-datepicker'
import dayjs from "dayjs";
=======
import DatePicker from "react-native-date-picker";

>>>>>>> 8316c5777862cb2ec7bd707ff7a5ab9f47cbd940
//Componentes
import { Inputs } from "../components/index";
//constants
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants/Screen";
import { Button } from "react-native";


export const Register = () => {
    const [date, setDate] = useState(dayjs());
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

    //creando calendario
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    return (
        <View style={style.container}>
            <ScrollView style={{ flex: 2, width: "100%" }}>
                <DateTimePicker
                    mode="single"
                    date={date}
                    onChange={(params) => setDate(params.date)}
                />
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
<<<<<<< HEAD

=======
>>>>>>> 8316c5777862cb2ec7bd707ff7a5ab9f47cbd940
                        style={{
                            inputAndroid: {
                                backgroundColor: '#D8D9ED',
                            },
                        }}
                        onValueChange={(value) => console.log(value)}
<<<<<<< HEAD
                        placeholder='Municipio'
=======
>>>>>>> 8316c5777862cb2ec7bd707ff7a5ab9f47cbd940
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
                            { label: 'Estudiante', value: 123 },
                            { label: 'Ingeniero', value: 456 },
                            { label: 'Medico', value: 789 },
                            { label: 'Contador', value: 498 }
                        ]}
                    />
                    <Button title="Open" onPress={() => setOpen(true)} />
                    <DatePicker
                        mode="date"
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
