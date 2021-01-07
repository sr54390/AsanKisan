
import React, { Component, useState   } from 'react';
import {View , Text, StyleSheet, ImageBackground,Image ,Dimensions} from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper';
// import * as firebase from "firebase";
import ProgressBarAnimated from 'react-native-progress-bar-animated';
// import { db } from '../../Firebase';
const { width: WIDTH } = Dimensions.get("window");


export default class GuideWheatstep1 extends Component{
    
state={
       acre:null,
       progress: 5,
       
    }


    onNextpressing(){

        this.props.navigation.navigate("wheatstep2");
        // db.ref('/currentScreen').push({
        //     screen: 2
            
        //   });
          
    }
    onHomePage(){
        this.props.navigation.navigate("Dashboard");
        // db.ref('/currentScreen').push({
        //     screen: 1
            
        //   });
        //   Alert.alert('Data has been Saved');
         
    }

render(){
    const barWidth = Dimensions.get('screen').width - 30;
  

    var acre = this.state.acre;
    var profitacre = acre * 70000;
    return(
    <ImageBackground
        style={styles.background}
        source={require("../../assets/doodles.jpg")}>
           <Image
                source={require("../../assets/wheat.jpg")}
                style={{
                width: "100%",
                height: 100,
                marginBottom:20}}/>
                
          
        
            <View style={styles.container}>
                <Text style={styles.mainHeadings}>Wheat Guide  </Text>
                <Text style={styles.mainHeadings}>Step 1  </Text>
                <Text style={styles.mainHeadings}>	Expected profit </Text>
                
            </View>
            <View  style={styles.profitacre}>
                <TextInput
                    style={styles.input}
                    placeholder={"Enter Your Acre"}
                    placeholderTextColor={"black"}
                    underlineColorAndroid="transparent"
                    onChangeText={(acre) => this.setState({acre})}
                    value = {this.state.acre}
                    keyboardType = 'numeric'> 
                       
                </TextInput>
                <Text style={{fontSize:20,fontWeight:"bold",top:-20}} >Per Acre Output {profitacre} approx</Text>
       
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.Stepbtn} onPress={()=> this.onNextpressing()} >
                    <Text style={{color:"#FFF",fontWeight:"500"}}> Go to Step 2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Stepbtn} onPress={()=> this.onHomePage()} >
                     <Text style={{color:"#FFF",fontWeight:"500"}}> Home</Text>
                </TouchableOpacity>
            </View>
        
    </ImageBackground>
            );
}}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",},
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,},
    checkbox: {
        alignSelf: "center",},
    label: {
        margin: 8,},
    Stepbtn: {
        top:-20,
        marginTop:5,
        padding: 20,
        width: "80%",
        borderRadius:10,
        backgroundColor:"brown",
        alignItems:"center",
        alignContent:"center"},
    btnContainer:{
        flexDirection:"row"},
    mainHeadings:{
        fontSize:18,
        margin:5,
        fontWeight:"bold" },
    background: {
        flex: 1,
       justifyContent: "center",
        alignItems: "center",},
    input: {
        top:-30,
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: "transparent",
        color: "rgba(255,255,255,0.7)",
        marginHorizontal: 25,},
    profitacre:{
        alignItems: "center",
        justifyContent: "center",}
});