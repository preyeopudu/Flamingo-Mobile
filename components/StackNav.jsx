import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { scale } from "react-native-size-matters";

const StackNav = ({ title }) => {
  const { goBack } = useNavigation();
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 20,
        marginTop: 40,
      }}
    >
      <TouchableOpacity
        style={{ flexDirection: "row", alignItems: "center" }}
        onPress={goBack}
      >
        <Ionicons name="arrow-back-outline" size={30} color="black" />
        <Text
          style={{ fontFamily: "bold", marginLeft: 10, fontSize: scale(14) }}
        >
          Back
        </Text>
      </TouchableOpacity>

      <Text style={{ fontFamily: "bold", fontSize: scale(14) }}>{title}</Text>
    </View>
  );
};

export default StackNav;
