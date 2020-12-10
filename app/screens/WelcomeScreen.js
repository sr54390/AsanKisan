import React from "react";
import { ImageBackground, StyleSheet, View, Image,Text } from "react-native";

import AppButton from "../components/AppButton";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      // blurRadius={2}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <Image style={styles.logo} source={require("../assets/asanLogo.png")} />
      <Text style={{fontSize:20,color:"#fff",top:-250,margin:10,textAlign:"center"}}>Asan Kisan Helps You To Grow Anything on your Land...</Text>
      <View style={styles.buttonContainer}>
        <AppButton
          change={() => {
            navigation.navigate("Login");
          }}
          title="Login"
          color="primary"
        />
        {/* <AppButton
          change={() => navigation.navigate("Register")}
          title="signup"
          color="secondary"
        /> */}
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
    width: "65%",
    height:100
  },
  logo: {
    width: 200,
    height: 100,
    position: "absolute",
    top: 170,

  },
});
export default WelcomeScreen;
