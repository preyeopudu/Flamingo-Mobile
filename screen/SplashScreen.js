import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { scale } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/Button";

export const SplashScreen = ({}) => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/icon.png")}
        style={{ height: 220, width: 220 }}
      />
      <Text
        style={{
          fontSize: 33,
          color: "black",
          fontFamily: "bold",
          width: "60%",
          textAlign: "center",
        }}
      >
        Get Your Money Under Control.
      </Text>

      <Text
        style={{
          fontSize: 18,
          textAlign: "center",
          color: "grey",
          fontFamily: "bold",
          width: "80%",
          marginVertical: 15,
        }}
      >
        Start Small And Then Build Up ...
      </Text>

      <View style={{ width: "80%", marginTop: 40 }}>
        <Button onPress={() => navigate("signup")}>
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              fontSize: scale(12),
              fontFamily: "bold",
            }}
          >
            Sign Up
          </Text>
        </Button>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            top: 30,
          }}
        >
          <Text style={{ fontFamily: "medium", color: "grey" }}>
            Already have an account?
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigate("signin");
            }}
          >
            <Text
              style={{
                fontFamily: "bold",
                marginLeft: 5,
                textDecorationLine: "underline",
              }}
            >
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "75%",
    justifyContent: "center",
    marginTop: 30,
  },
  button: {
    backgroundColor: "white",
    elevation: 20,
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    color: "black",
  },
  buttonText: {
    fontSize: 25,
    color: "black",
    padding: 10,
  },
});
