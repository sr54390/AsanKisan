import React from "react";
import { ImageBackground, StyleSheet, View, Image } from "react-native";

import AppButton from "../components/AppButton";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      // blurRadius={2}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <Image style={styles.logo} source={require("../assets/logoKisan.png")} />
      <View style={styles.buttonContainer}>
        <AppButton
          change={() => {
            navigation.navigate("Login");
          }}
          title="Login"
          color="primary"
        />
        <AppButton
          change={() => navigation.navigate("Register")}
          title="signup"
          color="secondary"
        />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  buttonContainer: {
    padding: 20,
    width: "55%",
  },
  logo: {
    width: 100,
    height: 100,
    position: "absolute",
    top: 70,
  },
});
export default WelcomeScreen;
