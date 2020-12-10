import React, { Component } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import AppButton from "../components/AppButton";
import firebase from '../Firebase';

export default class  CropGrowingGuide extends Component{
  // state={
  //   screen:""
  // }


  // componentDidMount(){
  //   const {screen}= firebase.database.ref('./currentScreen');
  //   this.setState({screen});
  // }
  
  render(){
  return (
    <View>
      <View style={{ elevation: 4, margin: 10 }}>
        <View
          onPress={() => {
            navigation.navigate("WheatGuide");
          }}
        >
          <Image
            source={require("../assets/wheat.jpg")}
            style={{
              width: "100%",
              height: 200,
              

            }}
          />
        </View>
        </View>
      <TouchableOpacity style={styles.loginBtn} onPress={()=> {this.props.navigation.navigate("wheatstep1")}}>
    
       <Text style={{color:"#fff",fontWeight:"bold",textAlign:"center",fontSize:20,paddingTop:5}}>Wheat Guide</Text>
     </TouchableOpacity>

      <View style={{ elevation: 4, margin: 10 }}>
        <View>
          <Image
            source={require("../assets/rice.jpg")}
            style={{
              width: "100%",
              height: 200,
              marginBottom:10
            }}
          />
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={()=> {this.props.navigation.navigate("wheatstep1")}}>
    
       <Text style={{color:"#fff",fontWeight:"bold",textAlign:"center",fontSize:20,paddingTop:5}}>Rice Guide</Text>
     </TouchableOpacity>
      </View>







            {/* Orange Guide */}
            

            <View style={{ elevation: 4, margin: 10 }}>
        <View>
          <Image
            source={require("../assets/rice.jpg")}
            style={{
              width: "100%",
              height: 200,
              marginBottom:10
            }}
          />
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={()=> {this.props.navigation.navigate("wheatstep1")}}>
    
       <Text style={{color:"#fff",fontWeight:"bold",textAlign:"center",fontSize:20,paddingTop:5}}>Rice Guide</Text>
     </TouchableOpacity>
      </View>


      {/* SugarCance Guide */}
      <View style={{ elevation: 4, margin: 10 }}>
        <View>
          <Image
            source={require("../assets/rice.jpg")}
            style={{
              width: "100%",
              height: 200,
              marginBottom:10
            }}
          />
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={()=> {this.props.navigation.navigate("wheatstep1")}}>
    
       <Text style={{color:"#fff",fontWeight:"bold",textAlign:"center",fontSize:20,paddingTop:5}}>Rice Guide</Text>
     </TouchableOpacity>
      </View>





      <View>
        <Text
          style={{ fontSize: 20, alignSelf: "center", fontFamily: "serif" }}
        >
          More Guides are Comming Soon
        </Text>
      </View>
    </View>
  );
}}
const styles = StyleSheet.create({
  title: {
    color: "red",
    fontFamily: "serif",
    width: "100%",
    borderRadius: 100,
  },
  loginBtn: {
    
    
    left:20,
    width: 325,
    height:35,
    
    borderRadius:10,
    backgroundColor:"brown",
    
  },
});

