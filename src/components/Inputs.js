import { TextInput, View, StyleSheet, Text } from "react-native";
import { Controller } from 'react-hook-form';

export  const  Inputs = ({ control, setValue, name, placeholder = '', rules = {}, style }) => {
  return (
    <View style = {[style]}>
      <Controller
        control={control}

        render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
          <View>
            <TextInput
              onBlur={onBlur}
              onChangeText={(text) => {
                setValue(name, text);
                onChange(text);
              }}
              value={value}
              style={styles.Input}
              placeholder={placeholder}
            />
            {error && (
              <Text style={{ color: 'red', left: 12 }}>
                {error.type === 'required' && 'Este campo es obligatorio'}
                {error.type === 'pattern' && 'Correo no valido'}
                {error.type === 'validate' && 'Ingrese un numero valido'}
              </Text>

            )}
          </View>
        )}
        name={name}
        rules={rules}
      />
    </View>
  )
}
const styles = StyleSheet.create({
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
