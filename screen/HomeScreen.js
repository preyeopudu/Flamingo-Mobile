import React, { useState } from "react";
import {
  View,
  StyleSheet,
  RefreshControl,
  Text,
  ScrollView,
  TextInput,
  StatusBar,
  Platform,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from "react-native";
import {
  Feather,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  EvilIcons,
  AntDesign,
  FontAwesome5,
} from "@expo/vector-icons";
import * as Linking from "expo-linking";
import { Plan } from "../components/plan";
import { Invest } from "../components/Invest";
import { AuthContext } from "../components/context";
import { addPlan } from "../Api/plan-api";
import Top from "../components/Top";

export const HomeScreen = ({ navigation }) => {
  let bell = <MaterialCommunityIcons name="bell" size={35} color="grey" />;

  const notified = async () => {
    navigation.navigate("Notification");
  };

  const messager = () => {
    Linking.openURL("https://t.me/flamingoexpress1");
  };

  const HandleSignout = () => {
    setAuth(false);
  };

  const HandlePLan = async (plan) => {
    // setLoading(true);
    // const res = await addPlan(user.username, plan);
    // console.log(res.data);
    // if (res.data.user) {
    //   setUser(res.data.user);
    //   setLoading(false);
    // } else if (res.data.active) {
    //   setLoading(false);
    //   alert("Already on a plan");
    // } else if (res.data.insufficient) {
    //   setLoading(false);
    //   alert("Insufficient credit");
    // } else {
    //   setLoading(false);
    //   alert("Try again");
    // }
  };

  // const { auth, setAuth, user, setUser, notification, setNotification } =
  //   React.useContext(AuthContext);
  // const [loading, setLoading] = useState(false);

  // let display;

  // if (user.plan.length > 0) {
  //   let today = new Date();
  //   let matureDate = new Date(user.plan[0].matureDate).getTime();
  //   let startingDate = new Date(user.plan[0].startingDate).getTime();
  //   let diff = Number(today - startingDate);
  //   let dif = Number(matureDate - startingDate);
  //   let percent = Math.round((diff / dif) * 100);
  //   console.log(percent);
  //   display = (
  //     <Text style={{ textAlign: "center" }}>
  //       {percent}% of {user.plan[0].name} plan
  //     </Text>
  //   );
  // } else {
  //   display = <Text></Text>;
  // }

  return (
    <View style={styles.container}>
      <Top />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    PaddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 20,
    height: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "center",
    flex: 1,
  },
  child: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.8)",
  },
});
