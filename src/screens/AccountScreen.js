import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Input_2 from "../components/Inputs";
import { useForm } from 'react-hook-form'
import Input from "../components/Input";

export const AccountScreen = () => {
    const back = useNavigation();
    const { control, handleSubmit, setValue } = useForm();
    return (
        <View style={styles.fondo}>
            <Input style={styles.boton}
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
            <Input style={styles.boton}
                control={control}
                setValue={setValue}
                name="Apellido"//campo
                placeholder="Apellido"
                rules={{
                    required: 'Este campo es obligatorio',
                    maxLength: {
                        value: 10,
                        message: 'No ingrese mas de 10 caracteres'
                    }
                }}
            />
            <Input style={styles.boton}
                control={control}
                setValue={setValue}
                name="Cedula"//campo
                placeholder="Cedula"
                rules={{
                    required: 'Este campo es obligatorio',
                    maxLength: {
                        value: 10,
                        message: 'No ingrese mas de 10 caracteres'
                    }
                }}
            />
            <Input style={styles.boton}
                control={control}
                setValue={setValue}
                name="Telefono"//campo
                placeholder="Telefono"
                rules={{
                    required: 'Este campo es obligatorio',
                    maxLength: {
                        value: 10,
                        message: 'No ingrese mas de 10 caracteres'
                    }
                }}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    fondo: {
        backgroundColor: "#2AB9B7",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
})
