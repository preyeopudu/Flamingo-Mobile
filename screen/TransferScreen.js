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
import { getUser, userWithdraw } from "../Api/user-api";
import { AuthContext } from "../components/context";

export const TransferScreen = () => {
  const { auth, setAuth, user, setUser, notification, setNotification } =
    React.useContext(AuthContext);
  const [amount, SetAmount] = useState();
  const [receiver, setReceiver] = useState();
  const [loading, setLoading] = useState(false);

  const HandleSubmit = async () => {
    setLoading(true);
    if (receiver == null || amount == null) {
      setLoading(false);
      Alert.alert("Error", "No value entered");
    } else {
      const res = await transfer(user.username, { user: receiver, amount });
      if (res.data.userFalse) {
        setLoading(false);
        Alert.alert("User does not exist");
      } else if (res.data.success) {
        setLoading(false);
        Alert.alert("Sent Successfully");
        setUser(res.data.user);
      } else if (!res.data.success) {
        setLoading(false);
        Alert.alert("Insufficient balance");
      } else {
        setLoading(false);
        Alert.alert("Can't transfer");
      }
    }
  };

  const HandleAmount = (val) => {
    SetAmount(val);
  };

  const HandleReceiver = (val) => {
    setReceiver(val);
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
            justifyContent: "center",
            alignContent: "center",
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
                HandleReceiver(val);
              }}
            />
          </View>

          <View style={styles.action}>
            <MaterialCommunityIcons
              name="credit-card-check-outline"
              size={24}
              color="black"
            />
            <TextInput
              placeholder="Amount"
              style={styles.textInput}
              keyboardType="decimal-pad"
              onChangeText={(val) => {
                HandleAmount(val);
              }}
            />
          </View>

          <TouchableNativeFeedback onPress={() => HandleSubmit()}>
            <View
              style={{
                backgroundColor: "white",
                marginTop: 30,
                paddingVertical: 10,
                paddingHorizontal: 10,
                elevation: 5,
              }}
            >
              <Text style={{ fontSize: 15 }}>Transfer</Text>
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
