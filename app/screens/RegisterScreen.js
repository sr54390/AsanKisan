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
import AppButton from "../components/AppButton";
import * as firebase from "firebase";
const { width: WIDTH } = Dimensions.get("window");
export default class RegisterScreen extends Component{
  state={
    name:"",
    email:"",
    password:"" ,
    errorMessage:null   
  }

  handleSignUp=()=>{
    firebase
    .auth()
    .createUserWithEmailAndPassword(this.state.email,this.state.password)
    .then(userCredentials => {
      return userCredentials.user.updateProfile({
        displayName:this.state.name
      });
    })
    this.props.navigation.navigate("Login")

  }
render(){
  const { navigation } = this.props;
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/asanLogo.png")}
        />
      </View>
      <View><Text style={styles.errorMessage}>{this.state.errorMessage}</Text></View>
      <View style={styles.inputContainer}>
        <Icon
          style={styles.inputIcons}
          name={"ios-person"}
          size={28}
          color={"rgba(255,255,255,0.7) "}
        />
        <TextInput
          style={styles.input}
          placeholder={"Username"}
          placeholderTextColor={"rgba(255,255,255,0.7)"}
          underlineColorAndroid="rgba(255,255,255,0.7)"
          onChangeText={name => this.setState({name})}
          value = {this.state.name}
        ></TextInput>
      </View>

      <View style={styles.inputContainer}>
        <Icon
          style={styles.inputIcons}
          name={"ios-mail"}
          size={28}
          color={"rgba(255,255,255,0.7) "}
        />
        <TextInput
          style={styles.input}
          placeholder={"Email"}
          placeholderTextColor={"rgba(255,255,255,0.7)"}
          underlineColorAndroid="rgba(255,255,255,0.7)"
          onChangeText={email => this.setState({email})}
          value = {this.state.email}
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
          onChangeText={password => this.setState({password})}
          value = {this.state.password}
        ></TextInput>
        <TouchableOpacity style={styles.btnEye}>
          <Icon name={"ios-eye"} size={26} color={"rgba(255,255,255,0.7) "} />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        {/* <Icon
          style={styles.inputIcons}
          name={"ios-lock"}
          size={28}
          color={"rgba(255,255,255,0.7) "}
        /> */}
        {/* <TextInput
          style={styles.input}
          placeholder={"Reconfrim Password"}
          secureTextEntry={true}
          placeholderTextColor={"rgba(255,255,255,0.7)"}
          underlineColorAndroid="transparent"
        ></TextInput> */}
        {/* <TouchableOpacity style={styles.btnEye}>
          <Icon name={"ios-eye"} size={26} color={"rgba(255,255,255,0.7) "} />
        </TouchableOpacity> */} 
      </View>
      <View style={styles.inputContainer}>
        <Icon
          style={styles.inputIcons}
          name={"ios-contact"}
          size={28}
          color={"rgba(255,255,255,0.7) "}
        />
        <TextInput
          style={styles.input}
          placeholder={"Phone Number"}
          placeholderTextColor={"rgba(255,255,255,0.7)"}
          underlineColorAndroid="rgba(255,255,255,0.7)"
        ></TextInput>
      </View>
      <TouchableOpacity style={{ marginTop:20,
    padding: 20,
    width: "80%",
    borderRadius:30,
    backgroundColor:"brown",
    alignItems:"center",
    alignContent:"center"}} onPress={this.handleSignUp}>
       <Text style={{color:"#FFF",fontWeight:"500"}}>Register</Text>
     </TouchableOpacity>
     <TouchableOpacity style
     ={{marginTop:10}}  
     
     onPress={()=> this.props.navigation.navigate("Login")}>
       <Text style={{color:"#FFF",fontWeight:"500"}}>Already Have an account? <Text style={{color:"red", fontSize:14}}>Sign in</Text></Text>
     </TouchableOpacity>
    </ImageBackground>
  );
}}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 100,
  },
  logoContainer: {
    alignItems: "center",
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
  btnEye: {
    position: "absolute",
    top: 8,
    right: 37,
  },
  loginBtn: {
    marginTop:80,
    padding: 20,
    width: "80%",
    borderRadius:40,
    backgroundColor:"brown",
    alignItems:"center",
    alignContent:"center"
  },
  noAccount: {
    color: "#fff",
    left: 37,
  },
  errorMessage:{
    fontSize:15,
    color:"red"
      },loginBtn: {
        marginTop:10,
        padding: 20,
        width: "80%",
        borderRadius:10,
        backgroundColor:"#000",
        alignItems:"center",
        alignContent:"center"
      },
});

