import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import * as Updates from 'expo-updates';

export const Home = () => {
    const Navigation = useNavigation();
    return (
        <View style={{
            marginTop: 300,
            flexDirection: 'columns',
            alignItems: 'center',
        }}>
            <Text
                style={{
                    fontSize: 30,
                    textAlign: 'center',
                }}
            >Setting Screen</Text>
            <TouchableOpacity
                style={{
                    height: 100,
                    width: 100,
                    backgroundColor: '#FF0000',
                    borderRadius: 10,
                    marginTop: 100,
                }}
                onPress={() => {
                    AsyncStorage.removeItem('Token', async () => {
                        console.log('Se ha eliminado el Token aca tienes que mandar nuevamente a la pantalla de log in lo que hare a continuacion solo es una mala solucion');
                        await Updates.reloadAsync();
                    })
                }}>
            </TouchableOpacity>
        </View >
    )
}