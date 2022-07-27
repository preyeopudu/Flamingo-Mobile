import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Platform,
  Alert,
  ScrollView,
} from "react-native";
import { Loading } from "../components/Loading";
import { AuthContext } from "../components/context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getNotification } from "../Api/user-api";
import StackNav from "../components/StackNav";
import Input from "../components/Input";
import Heading from "../components/Heading";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";

export const SignInScreen = ({ navigation }) => {
  const { navigate } = useNavigation();
  const [data, setData] = useState();
  const [show, SetShow] = useState(true);
  const [loading, setLoading] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const { auth, setAuth, user, setUser, notification, setNotification } =
    React.useContext(AuthContext);

  const HandleSignIn = async () => {
    setLoading(true);

    const note = await getNotification();
    if (note.data) {
      console.log(note.data);
      setNotification(note.data.notifications);
    }
    if (username === undefined || password === undefined) {
      setLoading(false);
      Alert.alert("LOGIN ERROR", "you skipped a field !");
    } else {
      const res = await signIn({ username, password });
      if (res.data) {
        await setUser(res.data.user);
        setAuth(true);
      } else {
        setLoading(false);
        Alert.alert("LOGIN ERROR");
      }
    }
  };

  function HandleEmail(val) {
    setUsername(val.trim());
  }

  function HandlePassword(val) {
    setPassword(val);
  }

  function showPassword() {
    SetShow(!show);
  }

  if (loading === true) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <StackNav title="Sign In" />

      <View style={{ width: "90%", marginBottom: 50, marginTop: 20 }}>
        <Heading
          heading="Welcome Back!"
          subheading="Sign in to your account."
        />
      </View>

      <ScrollView style={{ width: "90%" }}>
        <Input title="Email" placeholder="x@y.com" />
        <Input title="Password" placeholder="*******" />
        <Button>
          <Text
            style={{ color: "#fff", textAlign: "center", fontFamily: "bold" }}
          >
            Submit
          </Text>
        </Button>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#fff",
            justifyContent: "flex-end",
            marginTop: 20,
          }}
        >
          <Text style={{ fontFamily: "medium", color: "grey" }}>
            Forgot Password?
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigate("reset");
            }}
          >
            <Text
              style={{
                fontFamily: "bold",
                marginLeft: 5,
                textDecorationLine: "underline",
              }}
            >
              Reset
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  inputContainer: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginTop: 150,
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
    borderBottomColor: "grey",
    paddingBottom: 5,
    borderBottomWidth: 0.4,
  },
});
