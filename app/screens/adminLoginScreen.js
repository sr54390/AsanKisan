import React, { Component } from "react";
import {
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import * as firebase from "firebase";

const { width: WIDTH } = Dimensions.get("window");
export default class adminLoginScreen extends Component {
  state = {
    email: "",
    password: "",
    errorMessage: null,
  };

  handleLogin = async () => {
    const { email, password } = this.state;
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.props.navigation.navigate("Admin");
      })
      .catch((error) => this.setState({ errorMessage: error.message }));

    console.log(this.props);
  };

  render() {
    return (
      <ImageBackground
        style={styles.background}
        source={require("../assets/background.jpg")}
      >
        <Image style={styles.logo} source={require("../assets/asanLogo.png")} />
        <View>
          <Text style={styles.errorMessage}>{this.state.errorMessage}</Text>
        </View>
        <View style={styles.inputContainer}>
          <Icon
            style={styles.inputIcons}
            name={"ios-person"}
            size={28}
            color={"rgba(255,255,255,0.7) "}
          />
          <TextInput
            style={styles.input}
            placeholder={"Email"}
            placeholderTextColor={"rgba(255,255,255,0.7)"}
            underlineColorAndroid="rgba(255,255,255,0.7)"
            onChangeText={(email) => this.setState({ email })}
            value={this.state.email}
          ></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Icon
            style={styles.inputIcons}
            name={"ios-lock"}
            size={28}
            color={"rgba(255,255,255,0.7) "}
          />
          <TextInput
            style={styles.input}
            placeholder={"Password"}
            secureTextEntry={true}
            placeholderTextColor={"rgba(255,255,255,0.7)"}
            underlineColorAndroid="rgba(255,255,255,0.7)"
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password}
          ></TextInput>
          <TouchableOpacity style={styles.btnEye}>
            <Icon name={"ios-eye"} size={26} color={"rgba(255,255,255,0.7) "} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={this.handleLogin}>
          <Text style={{ color: "#FFF", fontWeight: "500" }}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginTop: 10 }}
          onPress={() => {
            this.props.navigation.navigate("Login");
          }}
        >
          <Text style={{ color: "#FFF", fontWeight: "500" }}>
            Dont Have an admin account?{" "}
            <Text style={{ color: "red", fontSize: 14 }}>Log in as a User</Text>
          </Text>
        </TouchableOpacity>
       
        
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 100,
    position: "absolute",
    top: 70,
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    // backgroundColor: "rgba(0,0,0,0.65)",
    color: "rgba(255,255,255,0.7)",
    marginHorizontal: 25,
  },
  inputIcons: {
    position: "absolute",
    top: 8,
    left: 37,
  },
  inputContainer: {
    marginTop: 10,
  },
  errorMessage: {
    fontSize: 15,
    color: "red",
  },
  btnEye: {
    position: "absolute",
    top: 8,
    right: 37,
  },
  loginBtn: {
    marginTop: 80,
    padding: 20,
    width: "80%",
    borderRadius: 30,
    backgroundColor: "brown",
    alignItems: "center",
    alignContent: "center",
  },
  noAccount: {
    color: "#fff",
    left: 37,
  },
});
