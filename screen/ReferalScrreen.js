import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  StatusBar,
  Platform,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  Alert,
} from "react-native";
import {
  Feather,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  EvilIcons,
} from "@expo/vector-icons";
import Clipboard from "expo-clipboard";
import { AuthContext } from "../components/context";

export const ReferalScreen = () => {
  const { auth, setAuth, user, setUser, notification, setNotification } =
    React.useContext(AuthContext);
  const [copiedText, setCopiedText] = useState("");
  const copyToClipboard = () => {
    Alert.alert("Copied");
    Clipboard.setString(user.username);
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "white",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          width: "90%",
          alignItems: "center",
          borderRadius: 15,
          elevation: 2,
          backgroundColor: "white",
        }}
      >
        <Text style={{ fontSize: 25, marginBottom: 10, paddingTop: 20 }}>
          Your Referal Link
        </Text>
        <Feather name="link-2" size={35} color="black" />
        <Text style={{ textAlign: "center", fontSize: 18, marginVertical: 15 }}>
          Help your friends discover Flamingo Express and earn 5% of their
          initial investment.
        </Text>

        <View
          style={{
            borderColor: "gray",
            borderWidth: 0.5,
            borderRadius: 10,
            marginVertical: 15,
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}
        >
          <Text style={{ color: "black", fontSize: 20 }}>{user.username}</Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            borderRadius: 10,
            backgroundColor: "black",
            marginBottom: 30,
            alignItems: "center",
            width: 100,
            paddingVertical: 10,
          }}
          onPress={() => copyToClipboard()}
        >
          <Text style={{ color: "white" }}>Copy</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          elevation: 2,
          backgroundColor: "white",
          width: "90%",
          alignItems: "center",
          borderRadius: 10,
          marginTop: 30,
        }}
      >
        <Text style={{ color: "black", fontSize: 25 }}>
          NGN {user.referalAmount}
        </Text>
        <Text style={{ marginVertical: 15 }}>
          Total earnings from {user.referal} referal
        </Text>
      </View>
    </View>
  );
};
