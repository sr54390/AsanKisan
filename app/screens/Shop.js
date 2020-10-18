import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

function Shop(props) {
  return (
    <View style={styles.positioning}>
      <Icon
        style={styles.inputIcons}
        name={"md-construct"}
        size={68}
        color={"rgba(255,255,255,0.7) "}
      />
      <Text style={styles.text}>Shop Module Comming Soon</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  positioning: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Roboto",
    color: "#fff",
  },
});
export default Shop;
