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
  FlatList,
} from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { Loading } from "../components/Loading";
import { Entypo } from "@expo/vector-icons";
import { getUser } from "../Api/user-api";
import { AuthContext } from "../components/context";

export const TransactionScreen = () => {
  const { auth, setAuth, user, setUser, notification, setNotification } =
    React.useContext(AuthContext);

  const DATA = user.receipt.reverse();
  const Item = ({ item, onPress, style }) => (
    <View
      style={{
        backgroundColor: "white",
        borderRadius: 10,
        marginHorizontal: 10,
        marginTop: 25,
        elevation: 10,
      }}
    >
      <View style={{ paddingHorizontal: 15 }}>
        <Text style={{ color: "black", marginTop: 12, fontSize: 15 }}>
          {item.text}
        </Text>
        <Text
          style={{
            color: "black",
            textAlign: "right",
            marginTop: 15,
            marginBottom: 20,
            fontSize: 12,
            fontWeight: "800",
          }}
        >
          {new Date(item.date).toDateString()}
        </Text>
      </View>
    </View>
  );
  const renderItem = ({ item }) => {
    return <Item item={item} onPress={() => setSelectedId(item._id)} />;
  };

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <FlatList
        data={DATA}
        keyExtractor={(item, index) => item._id}
        renderItem={renderItem}
      />
    </View>
  );
};
