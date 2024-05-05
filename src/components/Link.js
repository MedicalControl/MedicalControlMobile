import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function Link({ destination, text, style = { color, fontSize } }) {
    const Navigation = useNavigation();
    return (
        <TouchableOpacity
            hitSlop={10}
            onPress={() => Navigation.navigate(destination)} >
            <Text style={{
                fontSize: style.fontSize, textDecorationLine: 'underline',
                color: style.color
            }}>{text}</Text>
        </TouchableOpacity>
    )
}