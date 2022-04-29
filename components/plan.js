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
  Entypo,
} from "@expo/vector-icons";

import {ProgressBar} from 'react-native-paper'

export const Plan = () => {
  return (
    <TouchableOpacity style={{}} activeOpacity={0.5}>
      <View
        style={{
          elevation: 4,
          height: "60%",
          marginLeft: 10,
          width: 200,
          backgroundColor: "white",
          borderRadius: 10,
        }}
      >
        <View style={{ marginLeft: 20 }}>
          <Text style={{ fontWeight: "bold", fontSize: 20, color: "black" }}>
            EMERALD
          </Text>
          <Text style={{ fontWeight: "bold" }}>NGN 20,000</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
