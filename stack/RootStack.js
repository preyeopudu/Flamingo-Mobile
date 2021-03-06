import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SignInScreen } from "../screen/SignInScreen";
import { SignUpScreen } from "../screen/SignUpScreen";
import { SplashScreen } from "../screen/SplashScreen";
import { ResetScreen } from "../screen/ResetScreen";

const RootStack = createStackNavigator();

export const RootStackScreen = ({ navigation }) => (
  <RootStack.Navigator>
    <RootStack.Screen
      options={{ headerShown: false }}
      name="SplashScreen"
      component={SplashScreen}
    />
    <RootStack.Screen
      options={{ headerShown: false }}
      name="signin"
      component={SignInScreen}
    />
    <RootStack.Screen
      options={{ headerShown: false }}
      name="reset"
      component={ResetScreen}
    />
    <RootStack.Screen
      options={{ headerShown: false }}
      name="signup"
      component={SignUpScreen}
    />
  </RootStack.Navigator>
);
