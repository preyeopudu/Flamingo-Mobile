import { StatusBar } from "expo-status-bar";
import React, { useEffect, useCallback, useState } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { AuthContext } from "./components/context";
import { NavigationContainer } from "@react-navigation/native";
import { RootStackScreen } from "./stack/RootStack";
import { MainTab } from "./stack/MainTab";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

export default function App() {
  const [isloading, setIsloading] = useState(true);
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState();
  const [notification, setNotification] = useState();
  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    async function prepare() {
      console.log("loading fonts ......");
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          bold: require("./assets/font/Roboto-Bold.ttf"),
          light: require("./assets/font/Roboto-Light.ttf"),
          medium: require("./assets/font/Roboto-Medium.ttf"),
          regular: require("./assets/font/Roboto-Regular.ttf"),
        });
        console.log("fonts loaded");
        setAppIsReady(true);
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell app to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  onLayoutRootView();

  if (!appIsReady) {
    return <View style={{ flex: 1, backgroundColor: "#fff" }}></View>;
  }
  if (appIsReady) {
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
}
