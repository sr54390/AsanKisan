import React from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import AppButton from "../components/AppButton";

function ShoppingCart({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/shop.jpg")}
      style={styles.background}
    >
      <View
        style={{
          alignContent: "center",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <Icon name="ios-construct" size={30} color="#900" />
        <Text style={{ fontSize: 20, fontFamily: "serif", fontWeight: "bold" }}>
          Shop Is Comming Soon
        </Text>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  title: {
    padding: 50,
    alignItems: "center",
    alignContent: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  background: {
    flex: 1,
  },
});
export default ShoppingCart;
