import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Views, Text } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  Ionicons,
  Feather,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";

import { HomeScreen } from "../screen/HomeScreen";
import { TransactionScreen } from "../screen/TransactionScreen";
import { TransferScreen } from "../screen/TransferScreen";
import { WithdrawScreen } from "../screen/Withdraw";
import { NotificationScreen } from "../screen/NotificationScreen";
import { ReferalScreen } from "../screen/ReferalScrreen";
import { ForexScreen } from "../screen/ForexScreen";
const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
const TransferStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const Top = createMaterialTopTabNavigator();

export const MainTab = ({}) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="black"
      inactiveColor="gray"
      screenOptions={{ tabBarColor: "black" }}
      barStyle={{ backgroundColor: "#ffff" }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Details"
        component={ReferalScreen}
        options={{
          tabBarLabel: "Referals",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="link-variant-plus"
              size={26}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Training"
        component={ForexScreen}
        options={{
          tabBarLabel: "Forex",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="cast-education"
              size={26}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={HomeScreen}
      />
      <HomeStack.Screen name="Transactations" component={TransactionScreen} />
      <HomeStack.Screen name="Transfer" component={TransferScreen} />
      <HomeStack.Screen name="Withdraw" component={WithdrawScreen} />
      <HomeStack.Screen name="Notification" component={NotificationScreen} />
    </HomeStack.Navigator>
  );
};
