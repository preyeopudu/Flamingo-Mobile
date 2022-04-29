import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TouchableNativeFeedback,
  TextInput,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Loading } from "../components/Loading";
import { userRegister } from "../Api/user-api";
import { AuthContext } from "../components/context";

export const ForexScreen = () => {
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState();
  const { auth, setAuth, user, setUser, notification, setNotification } =
    React.useContext(AuthContext);

  const HandleRegistration = async () => {
    if (
      userName == undefined ||
      phoneNumber == undefined ||
      email == undefined
    ) {
      Alert.alert("Invalid credentials", "Fill the form properly.");
    } else {
      setLoading(true);
      const res = await userRegister(user.username, {
        userName,
        phoneNumber,
        email,
      });
      console.log(res);
      if (res.data.user) {
        setUser(res.data.user);
        Alert.alert("Succesful", "Succesfully registered");
        setLoading(false);
      } else if (res.data.insufficient) {
        Alert.alert("Insufficient balance", "Failed to add to queue");
        setLoading(false);
      } else if (res.data === null) {
        setLoading(false);
        Alert.alert("Error", "could'nt get a response");
      }
    }
  };

  if (loading == true) {
    return <Loading />;
  } else {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
        <View
          style={{
            alignItems: "center",
            paddingVertical: 10,
            paddingHorizontal: 30,
            flex: 1,
            marginTop: "50%",
          }}
        >
          <View style={styles.action}>
            <MaterialCommunityIcons
              name="account-cash-outline"
              size={20}
              color="black"
            />
            <TextInput
              placeholder="User Name"
              style={styles.textInput}
              onChangeText={(val) => {
                setUserName(val);
              }}
            />
          </View>

          <View style={styles.action}>
            <MaterialCommunityIcons
              name="card-account-phone"
              size={24}
              color="black"
            />
            <TextInput
              placeholder="Phone Number"
              style={styles.textInput}
              onChangeText={(val) => {
                setPhoneNumber(val);
              }}
            />
          </View>

          <View style={styles.action}>
            <MaterialCommunityIcons name="email" size={24} color="#05375a" />
            <TextInput
              placeholder="Email Address"
              style={styles.textInput}
              onChangeText={(val) => {
                setEmail(val);
              }}
            />
          </View>

          <TouchableNativeFeedback onPress={() => HandleRegistration()}>
            <View
              style={{
                backgroundColor: "white",
                marginTop: 30,
                paddingVertical: 10,
                paddingHorizontal: 10,
                elevation: 5,
              }}
            >
              <Text style={{ fontSize: 15 }}>Register</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  action: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
    marginTop: 40,
  },
  textInput: {
    flex: 1,
    marginTop: -3,
    paddingLeft: 10,
    color: "#05375a",
  },
});
