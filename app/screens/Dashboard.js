import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  TouchableOpacityBase,
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
     
      
     
        <Icon
          style={styles.menuIcons}
          name={"md-notifications"}
          size={28}
          color={"rgba(255,255,255,0.7) "}
          onPress={()=> {this.props.navigation.navigate("Notifications")}}
        />
        {/* <Icon
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
        /> */}
      </View>
      <View ><Text style={{fontSize:55,color:"#000",textAlign:"center"}}>آسان کسان</Text></View>

        <View style={{flexDirection:"row",marginLeft:35}}>

      <TouchableOpacity style={styles.dashBtn} onPress={()=> {this.props.navigation.navigate("CropGuide")}}>
      <Icon name={"ios-book"} size={56} color={"#000"}/> 
       <Text style={{color:"#000",fontWeight:"bold",textAlign:"center",paddingTop:25}}>Crop Guides</Text>
     </TouchableOpacity>


     <TouchableOpacity style={styles.dashBtn} onPress={()=> {this.props.navigation.navigate("Places")}}>
     <Icon name={"ios-search"} size={56} color={"#000"}/> 
       <Text style={{color:"#000",fontWeight:"bold",textAlign:"center",paddingTop:25}}>Place Finder</Text>
     </TouchableOpacity>


     </View>

     <View style={{flexDirection:"row",marginLeft:35}}>


      <TouchableOpacity style={styles.dashBtn} onPress={()=> {this.props.navigation.navigate("chatScreen")}}>
      <Icon name={"logo-whatsapp"} size={56} color={"#000"}/>
       <Text style={{color:"#000",fontWeight:"bold",textAlign:"center",paddingTop:25}}>Chatroom</Text>
     </TouchableOpacity>


     <TouchableOpacity style={styles.dashBtn} onPress={()=> {this.props.navigation.navigate("Weather")}}>
     <Icon name={"ios-partly-sunny"} size={56} color={"#000"}/>
       <Text style={{color:"#000",fontWeight:"bold",textAlign:"center",paddingTop:25}}>Weather</Text>
     </TouchableOpacity>


     </View>

        <View style={{flexDirection:"row",marginLeft:35}}>
      <TouchableOpacity style={styles.dashBtn} onPress={()=> {this.props.navigation.navigate("Shop")}}>
      <Icon name={"md-cart"} size={56} color={"#000"}/>
       <Text style={{color:"#000",fontWeight:"bold",textAlign:"center",paddingTop:25}}>Shop</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.dashBtn} onPress={this.signOutUser}>
     <Icon name={"md-power"} size={56} color={"#000"}/>
       <Text  style={{color:"#000",fontWeight:"bold",textAlign:"center",paddingTop:25}}>Logout</Text></TouchableOpacity>
     
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
    top: -2,
    alignItems: "center",
    backgroundColor: "black",
    flex: 0.5,
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
    top: 1,
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
  dashBtn: {


    width: 160,
    height:150,
    borderRadius:12,
    backgroundColor:"rgba(255,255,255,0.7)",
    alignItems:"center",
    alignContent:"center",
    margin:10  ,
   paddingTop:18,
    right:34
  },
});
