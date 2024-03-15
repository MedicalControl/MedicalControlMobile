import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useForm } from 'react-hook-form'
import Inputs from "../components/Inputs";

export const AccountScreen = () => {
    const back = useNavigation();
    const { control, handleSubmit, setValue } = useForm();

    const Input = {
        options: {
            "backgroundColor": '#000000',
            "borderRadius": 20,
            'width': '200%',
            "padding": 12,
            "height": 50,
        },
    };
    return (
        <View style={style.fondo}>
            <Inputs
                style={[style.InputStyle, {
                    backgroundColor: Input.options.backgroundColor,
                    width: Input.options.width,
                    padding: Input.options.padding,
                    borderRadius: Input.options.borderRadius,
                    height: Input.options.height
                }]}
                control={control}
                setValue={setValue}
                name="Nombre"//campo
                placeholder="Nombre"
                rules={{
                    required: 'Este campo es obligatorio',
                    maxLength: {
                        value: 10,
                        message: 'No ingrese mas de 10 caracteres'
                    }
                }}
            />

            <TextInput style={[style.InputStyle, {
                backgroundColor: Input.options.backgroundColor,
                width: Input.options.width,
                padding: Input.options.padding,
                borderRadius: Input.options.borderRadius,
                height: Input.options.height
            }]}>

            </TextInput>
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

    InputStyle: {
        
            alignItems: 'center',
            justifyContent: 'center',
        
    }
})
