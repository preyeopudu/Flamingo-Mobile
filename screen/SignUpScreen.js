import React, { useState } from "react";
import { View, StyleSheet, Text, Alert, ScrollView } from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Loading } from "../components/Loading";
import { AuthContext } from "../components/context";
import { signUp } from "../Api/auth-api";
import { getNotification } from "../Api/user-api";
import StackNav from "../components/StackNav";
import Input from "../components/Input";
import Heading from "../components/Heading";
import Button from "../components/Button";
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
      <View style={{ width: "90%", marginBottom: 30 }}>
        <Heading
          heading="Sign Up"
          subheading="Create an account, make your money work."
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          width: "100%",
          alignSelf: "center",
        }}
        contentContainerStyle={{
          alignItems: "center",
        }}
      >
        <View style={{ width: "90%", marginVertical: 10 }}>
          <Input title="Username" placeholder="xxxxyyy" />
          <Input title="Email" placeholder="x@y.com" />
          <Input title="Refree" placeholder="y@z.com (optional)" />
          <Input title="Password" placeholder="********" />

          <Button>
            <Text
              style={{ color: "#fff", textAlign: "center", fontFamily: "bold" }}
            >
              Submit
            </Text>
          </Button>
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
