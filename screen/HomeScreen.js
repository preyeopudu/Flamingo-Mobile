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
    setLoading(true);
    const res = await addPlan(user.username, plan);
    console.log(res.data);
    if (res.data.user) {
      setUser(res.data.user);
      setLoading(false);
    } else if (res.data.active) {
      setLoading(false);
      alert("Already on a plan");
    } else if (res.data.insufficient) {
      setLoading(false);
      alert("Insufficient credit");
    } else {
      setLoading(false);
      alert("Try again");
    }
  };

  const { auth, setAuth, user, setUser, notification, setNotification } =
    React.useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  let display;

  if (user.plan.length > 0) {
    let today = new Date();
    let matureDate = new Date(user.plan[0].matureDate).getTime();
    let startingDate = new Date(user.plan[0].startingDate).getTime();
    let diff = Number(today - startingDate);
    let dif = Number(matureDate - startingDate);
    let percent = Math.round((diff / dif) * 100);
    console.log(percent);
    display = (
      <Text style={{ textAlign: "center" }}>
        {percent}% of {user.plan[0].name} plan
      </Text>
    );
  } else {
    display = <Text></Text>;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          notified();
        }}
        style={{
          right: 20,
          position: "absolute",
          marginTop: 30,
        }}
      >
        <View>{bell}</View>
      </TouchableOpacity>

      <View
        style={{
          marginTop: 90,
          width: "90%",
          marginLeft: 28,
          marginBottom: 20,
        }}
      >
        <Text style={{ fontSize: 25, fontWeight: "500" }}>Wallet</Text>
        <Text style={{ fontSize: 35, marginTop: 10 }}>NGN {user.Amount}</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          marginLeft: 20,
          marginTop: 15,
          width: "90%",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            width: "30%",
            flex: 1,
          }}
        >
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              navigation.navigate("Transfer");
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                elevation: 4,
                paddingVertical: 12,
                flexDirection: "row",
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "black", marginRight: 5, fontSize: 16 }}>
                Transfer
              </Text>
              <EvilIcons name="arrow-down" size={25} color="black" />
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: "30%",
            flex: 1,
          }}
        >
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              navigation.navigate("Transactations");
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                elevation: 4,
                paddingVertical: 12,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "black", marginRight: 5, fontSize: 16 }}>
                Transactions
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: "30%",
            flex: 1,
          }}
        >
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              navigation.navigate("Withdraw");
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                elevation: 4,
                paddingVertical: 12,
                flexDirection: "row",
                justifyContent: "center",
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
              }}
            >
              <Text style={{ color: "black", marginRight: 5, fontSize: 16 }}>
                Withdraw
              </Text>
              <EvilIcons name="arrow-down" size={25} color="black" />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ marginTop: 30 }}>
        <Text style={{ textAlign: "center", fontSize: 28 }}>
          NGN {user.deposit}
        </Text>
      </View>

      <View style={{ backgroundColor: "white", paddingTop: 30 }}>
        <Text
          style={{
            fontSize: 12,
            textAlign: "center",
            fontWeight: "700",
            paddingHorizontal: 20,
          }}
        >
          ALL PLANS HAVE A DURATION OF 30 DAYS and returns of 30%
        </Text>
      </View>

      <View style={{ alignItems: "center" }}>
        <View style={{ width: "90%", flexDirection: "row", marginTop: 30 }}>
          <ScrollView
            style={{ height: 130 }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <TouchableOpacity
              style={{}}
              activeOpacity={0.5}
              onPress={() => {
                HandlePLan("jasper");
              }}
            >
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
                  <Text
                    style={{ fontWeight: "bold", fontSize: 20, color: "black" }}
                  >
                    Jasper
                  </Text>
                  <Text style={{ fontWeight: "bold" }}>NGN 10,000</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={{}}
              activeOpacity={0.5}
              onPress={() => {
                HandlePLan("sapphire");
              }}
            >
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
                  <Text
                    style={{ fontWeight: "bold", fontSize: 20, color: "black" }}
                  >
                    sapphire
                  </Text>
                  <Text style={{ fontWeight: "bold" }}>NGN 20,000</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={{}}
              activeOpacity={0.5}
              onPress={() => {
                HandlePLan("chalcedony");
              }}
            >
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
                  <Text
                    style={{ fontWeight: "bold", fontSize: 20, color: "black" }}
                  >
                    chalcedony
                  </Text>
                  <Text style={{ fontWeight: "bold" }}>NGN 50,000</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={{}}
              activeOpacity={0.5}
              onPress={() => {
                HandlePLan("emerald");
              }}
            >
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
                  <Text
                    style={{ fontWeight: "bold", fontSize: 20, color: "black" }}
                  >
                    emerald
                  </Text>
                  <Text style={{ fontWeight: "bold" }}>NGN 100,000</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={{}}
              activeOpacity={0.5}
              onPress={() => {
                HandlePLan("sardonyx");
              }}
            >
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
                  <Text
                    style={{ fontWeight: "bold", fontSize: 20, color: "black" }}
                  >
                    sardonyx
                  </Text>
                  <Text style={{ fontWeight: "bold" }}>NGN 300,000</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={{}}
              activeOpacity={0.5}
              onPress={() => {
                HandlePLan("sardius");
              }}
            >
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
                  <Text
                    style={{ fontWeight: "bold", fontSize: 20, color: "black" }}
                  >
                    sardius
                  </Text>
                  <Text style={{ fontWeight: "bold" }}>NGN 500,000</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={{}}
              activeOpacity={0.5}
              onPress={() => {
                HandlePLan("chrysolite");
              }}
            >
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
                  <Text
                    style={{ fontWeight: "bold", fontSize: 20, color: "black" }}
                  >
                    chrysolite
                  </Text>
                  <Text style={{ fontWeight: "bold" }}>NGN 800,000</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={{}}
              activeOpacity={0.5}
              onPress={() => {
                HandlePLan("beryl");
              }}
            >
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
                  <Text
                    style={{ fontWeight: "bold", fontSize: 20, color: "black" }}
                  >
                    beryl
                  </Text>
                  <Text style={{ fontWeight: "bold" }}>NGN 1,000,000</Text>
                </View>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View style={{ width: "80%" }}>
          <Invest />
          <Text style={{ textAlign: "center" }}>{display}</Text>
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.9}
        style={{ marginTop: 50, left: "35%" }}
        onPress={() => {
          messager();
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 30,
            width: "100%",
            elevation: 3,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 10,
              paddingVertical: 8,
            }}
          >
            <AntDesign name="message1" size={24} color="black" />
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.9}
        style={{ bottom: 50, position: "absolute", right: 20 }}
        onPress={() => {
          HandleSignout();
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 30,
            width: "100%",
            elevation: 3,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 10,
              paddingVertical: 8,
            }}
          >
            <FontAwesome5 name="door-open" size={24} color="black" />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 20,
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
