import { View } from "react-native";
import Action from "../components/Action";

const ActionSection = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginVertical: 20,
      }}
      horizontal
    >
      <Action
        color="red"
        title="Request"
        image={require("../assets/images/withdraw.png")}
      />
      <Action
        color="green"
        title="Deposit"
        image={require("../assets/images/deposit.png")}
      />
      <Action
        color="blue"
        title="Transfer"
        image={require("../assets/images/send.png")}
      />
    </View>
  );
};

export default ActionSection;
