import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

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
        paddingVertical: 30,
      }}
    >
      <TouchableOpacity onPress={goBack}>
        <Ionicons name="arrow-back-outline" size={30} color="black" />
      </TouchableOpacity>

      <Text style={{ fontFamily: "bold", fontSize: 18 }}>{title}</Text>
    </View>
  );
};

export default StackNav;
