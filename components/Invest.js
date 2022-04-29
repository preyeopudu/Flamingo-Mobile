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
} from "@expo/vector-icons";
import { AuthContext } from "../components/context";

import { ProgressBar } from "react-native-paper";

export const Invest = () => {
  const { auth, setAuth, user, setUser, notification, setNotification } =
    React.useContext(AuthContext);

  if (user.plan.length < 1) {
    return (
      <View>
        <Text>Currently not on a plan</Text>
      </View>
    );
  } else if (user.plan.length) {
    let today = new Date();
    let matureDate = new Date(user.plan[0].matureDate).getTime();
    let startingDate = new Date(user.plan[0].startingDate).getTime();
    let diff = Number(today - startingDate);
    let dif = Number(matureDate - startingDate);
    let percent = Math.round((diff / dif) * 100);
    return <ProgressBar progress={percent / 100} color={"black"} />;
  }
};
