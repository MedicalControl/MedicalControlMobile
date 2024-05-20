import React from 'react';
import { Controller } from 'react-hook-form';
import { View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export const RNPickerselect = ({ control, name, placeholder, items, rules = {} }) => {
    return (

        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                <View >
                    <RNPickerSelect
                        onValueChange={onChange}
                        onBlur={onBlur}
                        value={value}
                        placeholder={placeholder}
                        items={items}
                    />
                    {error && (
                        <Text style={{ color: 'red', left: 12 }}>
                            {error.type === 'required' && 'Este campo es obligatorio'}
                        </Text>
                    )}
                </View>
            )}
        />
    );
};