import { View, Text } from "react-native";

const Heading = ({ heading, subheading }) => {
  return (
    <View>
      <Text style={{ fontFamily: "bold", fontSize: 30 }}>{heading}</Text>
      <Text style={{ fontFamily: "medium", fontSize: 20, marginTop: 10 }}>
        {subheading}
      </Text>
    </View>
  );
};

export default Heading;
