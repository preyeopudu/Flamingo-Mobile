import { TouchableOpacity } from "react-native";

const Button = ({ children, onPress, style }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{
        backgroundColor: "#000",
        width: "100%",
        borderRadius: 10,
        fontFamily: "bold",
        paddingVertical: 18,
        marginVertical: 10,
        ...style,
      }}
    >
      {children}
    </TouchableOpacity>
  );
};

export default Button;
