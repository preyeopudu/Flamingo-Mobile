import { View, Image, TouchableOpacity, Text } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

const Top = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "92%",
        alignSelf: "center",
        alignItems: "center",
        marginTop: verticalScale(30),
        backgroundColor: "#F5F5F5",
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderRadius: 15,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={{
            backgroundColor: "#000",
            borderRadius: 25,
            width: 45,
            height: 45,
            justifyContent: "center",
            alignItems: "center",
            marginRight: scale(15),
          }}
        >
          <Text
            style={{ fontFamily: "bold", fontSize: scale(18), color: "#fff" }}
          >
            P
          </Text>
        </View>
        <View>
          <Text style={{ fontFamily: "bold", color: "grey" }}>
            Hello, Preye
          </Text>
          <Text
            style={{
              letterSpacing: 1,
              fontFamily: "bold",
              fontSize: scale(18),
            }}
          >
            Welcome Back!
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          height: 40,
          width: 40,
          justifyContent: "center",
          alignItems: "center",

          borderRadius: 20,
          backgroundColor: "#E8E8E8",

          elevation: 5,
        }}
      >
        <Image
          style={{ height: 18, width: 18 }}
          source={require("../assets/images/bell.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Top;
