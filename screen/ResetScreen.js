import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Platform,
  Alert,
} from "react-native";
import { Feather, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { Loading } from "../components/Loading";
import { reset } from "../Api/auth-api";
import StackNav from "../components/StackNav";
import Heading from "../components/Heading";
import Input from "../components/Input";
import Button from "../components/Button";

export const ResetScreen = ({ navigation }) => {
  const [data, setData] = useState();
  const [show, setShow] = useState(true);
  const [loading, setLoading] = useState();

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [secret, setSecret] = useState();

  function HandleShow() {
    setShow(!show);
  }

  function HandleEmail(val) {
    setUsername(val.trim());
  }

  function HandlePassword(val) {
    setPassword(val);
  }

  function HandleSecret(val) {
    setSecret(val);
  }

  const handleReset = async () => {
    setLoading(true);
    if (username == undefined || password == undefined || secret == undefined) {
      setLoading(false);
      Alert.alert("Kindly fill all fields");
    } else {
      const result = await reset({ username, password, secret });
      if (result.data) {
        console.log(result.data);
        if (result.data.success == true) {
          setLoading(false);
          Alert.alert("Reset was successful");
        } else {
          setLoading(false);
          Alert.alert("Failed to reset");
        }
      } else {
        setLoading(false);
        Alert.alert("Failed to reset");
      }
    }
  };

  if (loading === true) {
    return <Loading />;
  } else {
    return (
      <View style={styles.container}>
        <StackNav title="Reset" />
        <Heading
          heading="Reset Password"
          subheading="Enter the email associated with your account,and we'll send an email with instructions to reset your password."
        />

        <View style={{ marginTop: 20, width: "90%" }}>
          <Input placeholder="x@y.com" title="Valid Email" />
          <Button>
            <Text
              style={{ color: "#fff", textAlign: "center", fontFamily: "bold" }}
            >
              Submit
            </Text>
          </Button>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  action: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    paddingBottom: 5,
    marginTop: 40,
    borderBottomWidth: 0.4,
  },
  textInput: {
    flex: 1,
    marginTop: -3,
    paddingLeft: 10,
    color: "black",
  },
  inputContainer: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginTop: 20,
    width: "90%",
  },
});
