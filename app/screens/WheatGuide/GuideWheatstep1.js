
import React, { Component, useState   } from 'react';
import {View , Text, StyleSheet, ImageBackground,Image ,Dimensions} from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper';
// import * as firebase from "firebase";
const { width: WIDTH } = Dimensions.get("window");

export default class GuideWheatstep1 extends Component{
    
state={
       acre:null,
    }

render(){

    var acre = this.state.acre;
    var profitacre = acre * 70000;
    return(
    <ImageBackground
        style={styles.background}
        source={require("../../assets/lightback.jpg")}>
           <Image
                source={require("../../assets/wheat.jpg")}
                style={{
                width: "100%",
                height: 100,}}/>
        
            <View style={styles.container}>
                <Text style={styles.mainHeadings}>Wheat Guide  </Text>
                <Text style={styles.mainHeadings}>Step 1  </Text>
                <Text style={styles.mainHeadings}>	Expected profit </Text>
                
            </View>
            <View  style={styles.profitacre}>
                <TextInput
                    style={styles.input}
                    placeholder={"Enter Your Acre"}
                    placeholderTextColor={"rgba(255,255,255,0.7)"}
                    underlineColorAndroid="transparent"
                    onChangeText={(acre) => this.setState({acre})}
                    value = {this.state.acre}
                    keyboardType = 'numeric'> 
                       
                </TextInput>
                <Text style={{fontSize:20,fontWeight:"bold"}} >Per Acre Output {profitacre} approx</Text>
       
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.Stepbtn} onPress={()=> {this.props.navigation.navigate("wheatstep2")}} >
                    <Text style={{color:"#FFF",fontWeight:"500"}}> Go to Step 2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Stepbtn} >
                     <Text style={{color:"#FFF",fontWeight:"500"}}> End Tutorial</Text>
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
        marginTop:5,
        padding: 20,
        width: "80%",
        borderRadius:10,
        backgroundColor:"#000",
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
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: "rgba(0,0,0,0.65)",
        color: "rgba(255,255,255,0.7)",
        marginHorizontal: 25,},
    profitacre:{
        alignItems: "center",
        justifyContent: "center",}
});