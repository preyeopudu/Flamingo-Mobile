import { View, Text } from "react-native";

const Heading = ({ heading, subheading }) => {
  return (
    <View>
      <Text style={{ fontFamily: "bold", fontSize: 30 }}>Sign Up</Text>
      <Text style={{ fontFamily: "medium", fontSize: 20, marginTop: 10 }}>
        Create an account so you can put your money to work.
      </Text>
    </View>
  );
};

export default Heading;
