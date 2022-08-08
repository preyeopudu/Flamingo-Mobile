import { Image, View, TouchableOpacity, Text } from "react-native";
import { ScaledSheet, scale, verticalScale } from "react-native-size-matters";

const Action = ({ title, image, onPres, color }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,

        backgroundColor: "#fff",
      }}
    >
      <View
        style={{
          borderColor: "#808080",
          borderWidth: 1,
          borderRadius: 15,
          padding: 15,
        }}
      >
        <Image
          style={{
            width: scale(20),
            height: scale(20),
          }}
          source={image}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Action;
