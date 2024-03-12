import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";


export const AccountScreen = () => {
    const back = useNavigation();

    return (
        <View style={styles.fondo} >
            <Text
                style={{
                    fontSize: 30,
                    textAlign: 'center',
                    marginTop: "20%"
                }}
            >AccountScreen Screen</Text>
            <TouchableOpacity
                onPress={() => back.goBack()}
                style={{
                    backgroundColor: "purple",
                    padding: 10,
                    marginTop: "20%",
                    width: "50%",
                    alignSelf: 'center',
                    borderRadius: 10
                }}
            >
                <Text
                    style={{
                        fontSize: 15,
                        textAlign: "center",
                        color: "white"
                    }}
                >Regresar </Text>
            </TouchableOpacity>

        </View>

    )
}

const styles = StyleSheet.create({

    fondo: {
        backgroundColor: "#9CD2D3",
        flex: 1
    }

})
