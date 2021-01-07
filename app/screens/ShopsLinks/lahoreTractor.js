import React, { Component } from "react";
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { exp } from "react-native-reanimated";
import Icon from "react-native-vector-icons/Ionicons";


export default class lahoreTractor extends Component {
    render(){
  return (
      <ScrollView>
    <ImageBackground
      source={require("../../assets/shop.jpg")}
      style={styles.background}
    >
      <View
        style={{
          alignContent: "center",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <Icon name="ios-cart" size={30} color="#900" />
        <Text style={{ fontSize: 20, fontFamily: "serif", fontWeight: "bold" }}>
          Near By Tractors in your cities
        </Text>
      </View>
<Text style={{ fontSize: 20, fontFamily: "serif", fontWeight: "bold" ,marginLeft:20,marginTop:10}}>Info of Machinery Dealers</Text>
<View style={{flexDirection:"row" , marginLeft:25,marginTop:10}}>
        <TouchableOpacity style={styles.shopsCities}>
        <Icon name="ios-contact" size={35} color="#fff" />
         
            <Text style={styles.nameSettings}>Imtiaz Machinery</Text>
            <Text style={styles.contactSettings}>03164640008</Text>
         
        </TouchableOpacity>

        <TouchableOpacity style={styles.shopsCities}>
        <Icon name="ios-contact" size={35} color="#fff" />
         
            <Text style={styles.nameSettings}>Sarsabz and Co</Text>
            <Text style={styles.contactSettings}>0354615708</Text>
         
        </TouchableOpacity>

        </View>


        <View style={{flexDirection:"row" , marginLeft:25,marginTop:10}}>
        <TouchableOpacity style={styles.shopsCities}>
        <Icon name="ios-contact" size={35} color="#fff" />
         
            <Text style={styles.nameSettings}>Lahore Dealers</Text>
            <Text style={styles.contactSettings}>03161651645</Text>
         
        </TouchableOpacity>
        <TouchableOpacity style={styles.shopsCities}>
        <Icon name="ios-contact" size={35} color="#fff" />
         
            <Text style={styles.nameSettings}>Ravi Tractors and Co</Text>
            <Text style={styles.contactSettings}>03165616510</Text>
         
        </TouchableOpacity>
        </View>
       


    </ImageBackground></ScrollView>
  );
}}
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
  shopsCities:{
    width:150,
    height:150,
    backgroundColor:"#ff8a65",
    textAlign:"center",
    alignItems:"center",
    borderColor:"#e64a19",
    borderWidth:6,
    marginRight:10
    
  },

  nameSettings:{
    color:"#000",fontWeight:"200",textAlign:"center",fontSize:24,
    top:5
  },
  contactSettings:{
    color:"#000",fontWeight:"200",textAlign:"center",fontSize:21,
    top:10
  }
});

