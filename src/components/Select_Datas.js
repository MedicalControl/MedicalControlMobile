import RNPickerSelect from 'react-native-picker-select';
import { Controller } from 'react-hook-form';
import { View,  Text } from "react-native";

export const Inputs = ({ control, setValue, placeholder = '', rules = {}, items = [] }) => {
    return (
      <View>
        <Controller
          control={control}
          render={({ field: { onChange,  value }, fieldState: { error } }) => (
            <View>
              <RNPickerSelect
                onValueChange={(value) => {
                  setValue( value);
                  onChange(value);
                }}
                value={value}
                placeholder={{ label: placeholder, value: null }}
                items={items}
              />
              {error && (
                <Text style={{ color: 'red', left: 12 }}>
                  {error.type === 'required' && 'Este campo es obligatorio'}
                </Text>
              )}
            </View>
          )}
         
          rules={rules}
        />
      </View>
    );
  };