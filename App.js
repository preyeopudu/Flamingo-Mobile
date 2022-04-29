import { StatusBar } from "expo-status-bar";
import React, { useEffect, useMemo, useState } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { AuthContext } from "./components/context";
import { NavigationContainer } from "@react-navigation/native";
import { RootStackScreen } from "./stack/RootStack";
import { MainTab } from "./stack/MainTab";

export default function App() {
  const [isloading, setIsloading] = useState(true);
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState();
  const [notification, setNotification] = useState();

  return (
    <AuthContext.Provider
      value={{ auth, setAuth, user, setUser, notification, setNotification }}
    >
      <NavigationContainer>
        {auth != false ? <MainTab /> : <RootStackScreen />}
        <StatusBar translucent={true} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
