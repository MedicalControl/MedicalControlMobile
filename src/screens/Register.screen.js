import React, { lazy, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from 'react-hook-form'
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RNPickerSelect from 'react-native-picker-select';
import DatePicker from 'react-native-modern-datepicker';
import { getFormatedDate } from "react-native-modern-datepicker";


//Componentes
import { Inputs, Select_Data } from "../components/index";
//constants
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants/Screen";

export const Register = () => {

    const { control, handleSubmit, setValue } = useForm();
    useEffect(() => {
        AsyncStorage.getItem('Token')
            .then((value) => { })
            .catch((err) => console.error(err))
    });

    const Onsubmit = (data) => {
        console.log(data);
        //Api
        AsyncStorage.setItem('Token', 'token123', () => {
            console.log(`Se ha guardado el token`)
        })
    }
    //Calendario


    const [openStartDatePicker, setOpenStartDatePicker] = useState(false) //open and Close the modal
    const today = new Date();
    const startDate = getFormatedDate(today.setDate(today.getDate() + 1), 'DD/MM/YYYY');
    const [selectedStartDate, setSelectedStartDate] = useState(""); //Date Variable
    const [startedDate, setStartedDate] = useState('11/02/2000');

    function handleChangeStartDate(propDate) {
        setStartedDate(propDate)
    }
    const handleOnPressStarDate = () => {
        setOpenStartDatePicker(!openStartDatePicker);
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
                            { label: 'A+', value: 129 },
                            { label: 'B+', value: 256 },
                            { label: 'AB+', value: 416 },
                            { label: 'O+', value: 246 },
                            { label: 'O-', value: 300 },
                            { label: 'AB-', value: 159 },
                            { label: 'A-', value: 140 },
                            { label: 'B-', value: 266 }
                        ]}
                    />
                    <TouchableOpacity style={style.Input}
                        placeholder="Nombre"
                        onPress={handleOnPressStarDate}>

                        <Text>{selectedStartDate}</Text>
                    </TouchableOpacity>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={openStartDatePicker}
                    >
                        <View style={style.centeredView}>
                            <View style={style.modalView}>

                                <DatePicker
                                    mode="calendar"
                                    minimumDate={startDate}
                                    selected={startedDate}
                                    onDateChange={handleChangeStartDate}
                                    onSelectedChange={date => setSelectedStartDate(date)}
                                    options={{
                                        backgroundColor: '#FFFFFF',
                                        textHeaderColor: '#469ab6',
                                        textDefaultColor: 'black',
                                        selectedTextColor: '#FFF',
                                        mainColor: '#2AB9B7',
                                        textSecondaryColor: '#2AB9B7',
                                        borderColor : 'rgba(122,146,165,0.1)'
                                    }}
                                />
                                <TouchableOpacity onPress={handleOnPressStarDate}>
                                    <Text>Close</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>

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
    },
    //Calendario
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    modalView: {
        margin: 10,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        padding: 35,
        width: '90%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    Input: {
        backgroundColor: "#D8D9ED",
        borderRadius: 20,
        width: 300,
        padding: 12,
        height: 70,
        paddingStart: 15,
        justifyContent: 'center',
        elevation: 10,

    },

})

