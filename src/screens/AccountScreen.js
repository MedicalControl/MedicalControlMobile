import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useForm } from 'react-hook-form'
import Inputs from "../components/Inputs";

export const AccountScreen = () => {
    const back = useNavigation();
    const { control, handleSubmit, setValue } = useForm();

    return (
        <View style={style.fondo}>
            <Inputs 
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
                style={{ right: 80 }}
            />
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
    change : {
        right : '800'
    }
})
