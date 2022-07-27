import { TextInput, View, Text } from "react-native";

const Input = ({ title, placeholder, onChangeText }) => {
  return (
    <View
      style={{
        backgroundColor: "#E8E8E8",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        width: "100%",
        marginVertical: 10,
        borderRadius: 5,
      }}
    >
      <View>
        <Text style={{ fontFamily: "bold", letterSpacing: 0.5 }}>{title}</Text>
      </View>
      <TextInput
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={{
          marginLeft: 20,
          fontFamily: "bold",
          width: "70%",
          paddingVertical: 15,
        }}
      />
    </View>
  );
};

export default Input;
