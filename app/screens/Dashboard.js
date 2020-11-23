import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  SafeAreaView,
  ImageBackground,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { ceil } from "react-native-reanimated";
import { TouchableOpacity } from "react-native-gesture-handler";
import AppButton from "../components/AppButton";
import * as firebase from "firebase";


const { width: WIDTH } = Dimensions.get("window");

export default class Dashboard extends Component {
  state={
    displayName:"",
    email:""
  }
  componentDidMount(){
    const {email,displayName}= firebase.auth().currentUser
    this.setState({email,displayName});

  }
  signOutUser = ()=>{

    firebase.auth().signOut();
    this.props.navigation.navigate("Welcome")

  }
  render(){
    const { navigation } = this.props;
  return (
    
    <ImageBackground
      source={require("../assets/dashboard.jpg")}
      style={styles.background}
    >
      <View style={styles.topNavigation}><Text style={{fontSize:18,fontFamily:"Roboto",marginLeft:10,color:"#fff"}}>{this.state.displayName}</Text>
      <TouchableOpacity style={styles.loginBtn} onPress={this.signOutUser}><Text style={{fontSize:18,marginLeft:10}}>Logout</Text></TouchableOpacity>
      </View>
      <View style={styles.topNavigation}>
        <Text style={styles.mainTitle}> Asan Kisan</Text>

        <Icon
          style={styles.menuIcons}
          name={"md-notifications"}
          size={28}
          color={"rgba(255,255,255,0.7) "}
          onPress={()=> {this.props.navigation.navigate("Notifications")}}
        />
        <Icon
          style={styles.menuIcons}
          name={"md-menu"}
          size={28}
          color={"rgba(255,255,255,0.7) "}
        />
        <Icon
          style={styles.menuIcons}
          name={"md-search"}
          size={28}
          color={"rgba(255,255,255,0.7) "}
        />
      </View>

      <View style={styles.dashBoardContainer}>
        <Text style={styles.urduTitle}> خوشحال کسان </Text>
        {/* Crop Growing Guide */}
        <View style={{ padding: 20,
    width: "55%",}}>
      <View >
        <AppButton
          change={() => navigation.navigate("CropGuide")}
          title="Crop Growing Guide"
          color="backgroundColor"
        ></AppButton>

        {/* Place Finder */}
        <AppButton
          change={() => navigation.navigate("Places")}
          title="Place Finder"
          color="backgroundColor"
        ></AppButton>
        </View>
        {/* Chatroom */}
        <AppButton
          change={() => navigation.navigate("Chat")}
          title="Chatroom"
          color="backgroundColor"
        ></AppButton>
        {/*Weather*/}
        <AppButton
          change={() => navigation.navigate("Weather")}
          title="Weather"
          color="backgroundColor"
        ></AppButton>
        {/* Shop */}
        <AppButton
          change={() => navigation.navigate("Shop")}
          title="Shop"
          color="backgroundColor"
        ></AppButton>
      </View>
      </View>
      {/* <View style={styles.weatherSettingPic}>
        <Image
          style={styles.weatherPic}
          source={require("../assets/Weather.jpg")}
        />
      </View> */}
    </ImageBackground>
  );
}}
const styles = StyleSheet.create({
  topNavigation: {
    top: 2,
    alignItems: "center",
    backgroundColor: "black",
    flex: 0.7,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  navigationIcons: {
    right: 10,
  },
  logo: {
    width: 100,
    height: 70,
    // position: "absolute",
    // top: 70,
  },
  loginBtn: {
    margin:14,
    marginBottom:5,
    paddingTop:5,
    width: "100%",
    height:"100%",
    borderRadius:10,
    backgroundColor:"red",
    alignItems:"center",
    alignContent:"center"
  },
  weatherPic: {
    width: 650,
    height: 350,
  },
  weatherSettingPic: {
    alignItems: "center",
    top: 50,
  },
  urduTitle: {
    fontSize: 35,
    color: "#000",
    fontFamily: "Roboto",
  },
  mainTitle: {
    fontSize: 35,
    color: "#fff",
    fontFamily: "Roboto",
  },
  background: {
    flex: 1,
  },
  container: {
    top: 50,
    flex: 1,
    flexDirection: "row",
    // justifyContent: "space-between",
  },

  dashBoardContainer: {
    top: 11,
    alignContent: "center",
    alignItems: "center",
  },
  inputIcons: {
    position: "absolute",
    top: 8,
    left: 37,
  },
  menuIcons: {
    position: "relative",
    top: 8,
    left: 37,
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: "rgba(0,0,0,0.65)",
    color: "rgba(255,255,255,0.7)",
    marginHorizontal: 25,
  },
  inputContainer: {
    marginTop: 10,
    alignItems: "center",
  },
});
