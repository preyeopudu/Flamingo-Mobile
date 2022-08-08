import { View, Text, Image } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

const Wallet = () => {
  return (
    <View
      style={{
        backgroundColor: "#000",
        justifyContent: "center",
        flexDirection: "row",
        marginHorizontal: "5%",
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderRadius: 20,
        alignItems: "center",
      }}
    >
      <View>
        <Text
          style={{
            color: "#A9A9A9",
            textAlign: "center",
            fontFamily: "bold",
            fontSize: 12,
            letterSpacing: 1,
          }}
        >
          Your Balance
        </Text>
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            fontFamily: "bold",
            fontSize: 20,
            marginTop: 3,
          }}
        >
          {"\u20A6"} 500,0000.00
        </Text>
      </View>
    </View>
  );
};

export default Wallet;

const styles = ScaledSheet.create({
  image: {
    width: 30,
    height: 30,
  },
});
