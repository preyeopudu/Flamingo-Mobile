import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  StatusBar,
  Platform,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Loading } from "../components/Loading";
import { AuthContext } from "../components/context";
import { signUp } from "../Api/auth-api";
import { getNotification } from "../Api/user-api";
import StackNav from "../components/StackNav";
export const SignUpScreen = ({ navigation }) => {
  const [stage, setStage] = useState(0);
  const [data, setData] = useState();
  const [loading, setLoading] = useState();
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [referee, setReferer] = useState();
  const [password, setPassword] = useState();
  const [code, setCode] = useState();

  const {
    auth,
    setAuth,
    user,
    setUser,
    notification,
    setNotification,
    ad,
    setAd,
  } = React.useContext(AuthContext);

  function showPassword() {
    SetShow(!show);
  }

  function HandleEmail(val) {
    setUsername(val.trim());
  }

  function HandleName(val) {
    setName(val.trim());
  }

  function HandleReferer(val) {
    setReferer(val.trim());
  }

  function HandlePassword(val) {
    setPassword(val);
  }

  function HandleCode(val) {
    setCode(val);
  }

  const HandleSignUp = async () => {
    const User = {
      username: username,
      password: password,
      refree: referee,
      name: name,
    };
    setLoading(true);
    if (
      username === undefined ||
      password === undefined ||
      name === undefined
    ) {
      setLoading(false);
      Alert.alert("Error", "ooops you skipped an important field!");
    } else {
      console.log(user);
      const res = await signUp(User);
      const note = await getNotification();
      if (note.data) {
        setNotification(note.data.notifications);
      }
      console.log(res.data);
      if (res.data === undefined) {
        setLoading(false);
        Alert.alert("error", "unable to connect");
      } else if (res.data) {
        if (res.data.auth === true) {
          await setUser(res.data.user);
          setAuth(true);
        } else if (res.data.err) {
          setLoading(false);
          Alert.alert(res.data.err.message);
        }
      }
    }
  };

  if (loading == true) {
    return <Loading />;
  }
  return (
    <View style={styles.container}>
      <StackNav title="Sign Up" />
      <View style={styles.inputContainer}>
        <View style={styles.action}>
          <FontAwesome name="user-o" size={20} color="black" />
          <TextInput
            placeholder="First Name"
            placeholderTextColor="black"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => {
              HandleName(val);
            }}
          />
        </View>

        <View style={styles.action}>
          <Feather name="mail" size={20} color="black" />
          <TextInput
            placeholder="Valid Email"
            placeholderTextColor="black"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => {
              HandleEmail(val);
            }}
          />
        </View>

        <View style={styles.action}>
          <Feather name="lock" size={20} color="black" />
          <TextInput
            placeholder="Password"
            placeholderTextColor="black"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => {
              HandlePassword(val);
            }}
            secureTextEntry={true}
          />
        </View>

        <View style={styles.action}>
          <FontAwesome name="users" size={20} color="black" />
          <TextInput
            placeholder="Referal (optional)"
            placeholderTextColor="black"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => {
              HandleReferer(val);
            }}
          />
        </View>

        <View style={{ alignItems: "center", marginTop: 20, width: "100%" }}>
          <TouchableOpacity
            style={{
              borderColor: "black",
              borderRadius: 12,
              borderWidth: 1.5,
              marginTop: 0,
              width: "100%",
              backgroundColor: "black",
            }}
            onPress={() => {
              HandleSignUp();
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 18,
                paddingHorizontal: 120,
                paddingVertical: 10,
                fontWeight: "900",
                width: "100%",
                textAlign: "center",
              }}
            >
              Register
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: "center", marginTop: 20, width: "100%" }}>
          <TouchableOpacity
            style={{
              borderColor: "black",
              borderRadius: 12,
              borderWidth: 1.5,
              marginTop: 0,
              width: "100%",
            }}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Text
              style={{
                color: "black",
                fontSize: 18,
                paddingHorizontal: 120,
                paddingVertical: 10,
                fontWeight: "900",
                width: "100%",
                textAlign: "center",
              }}
            >
              Back
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
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 40,
  },
  inputContainer: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginTop: 20,
    width: "90%",
  },
  textInput: {
    flex: 1,
    marginTop: -3,
    paddingLeft: 10,
    color: "black",
  },
  action: {
    flexDirection: "row",
    marginTop: 25,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    paddingBottom: 5,
    marginBottom: 5,
    borderBottomWidth: 0.4,
  },
});
