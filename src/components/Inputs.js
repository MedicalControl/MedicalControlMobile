import { TextInput, View, StyleSheet, Text } from "react-native";
import { Controller } from 'react-hook-form';


export default function Input({ control, setValue, name, placeholder = '', rules = {} }) {
  return (
    <View>
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
              <Text style={{ color: 'red' }}>
                {error.type === 'required' && 'Este campo es obligatorio'}
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
    width: "100%",
    padding: 12,
    height: 50,
    marginTop: 40,
    paddingStart: 15
  },
})
