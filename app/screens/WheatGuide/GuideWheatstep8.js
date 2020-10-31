
import React, { Component, useState   } from 'react';
import {View , Text, StyleSheet,ActivityIndicator,CheckBox, ImageBackground,Image,Dimensions } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper';
// import * as firebase from "firebase";
const { width: WIDTH } = Dimensions.get("window");
export default class GuideWheatstep8 extends Component{
    // // componentDidMount(){
    // //     firebase.auth().onAuthStateChanged(user => {
    // //         this.props.navigation.navigate(user ? "App": "Auth");

    // //     });

    // }
    render(){
        // const [isSelected, setSelection] = useState(false);
        return(
            <ImageBackground
            style={styles.background}
      source={require("../../assets/lightback.jpg")}>
           <Image
            source={require("../../assets/wheat.jpg")}
            style={{
              width: "100%",
              height: 100,
            }}
          />
          



        
            <View style={styles.container}>
                <Text style={styles.mainHeadings}>Wheat Guide</Text>
                <Text style={styles.mainHeadings}>Step 8</Text>
                <Text style={styles.mainHeadings}>Harvesting</Text>
                <View style={styles.checkboxContainer}>
                    
                    <CheckBox
                   
                      style={styles.checkbox}
                    />
                    <Text style={styles.label}>Use harvester to harvest your wheat</Text>
                  </View>
                  <View>
                      <Text>we hope you will even earn more than expected output </Text>
                      <TextInput style={styles.input}   placeholder={"Kindly Share Your Reviews"}
          placeholderTextColor={"rgba(255,255,255,0.7)"}
          underlineColorAndroid="transparent" />
                  </View>
       
      <View style={styles.btnContainer}>
      <TouchableOpacity style={styles.Stepbtn} >
       <Text style={{color:"#FFF",fontWeight:"500"}} onPress={()=> alert("Hip Hip Hurray Wheat tutorial is End Thank you for Your Patience")}>End Tutorial</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.Stepbtn} >
       <Text style={{color:"#FFF",fontWeight:"500"}} onPress={()=> {this.props.navigation.navigate("Dashboard")}}> GO Back to HomeScreen</Text>
     </TouchableOpacity>
     </View>
                </View>
                </ImageBackground>
            );
}}
            const styles = StyleSheet.create({
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
                container: {
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                  },
                  checkboxContainer: {
                    flexDirection: "row",
                    marginBottom: 20,
                  },
                  checkbox: {
                    alignSelf: "center",
                  },
                  label: {
                    margin: 8,
                  },
                  Stepbtn: {
                    marginTop:5,
                    padding: 20,
                    width: "80%",
                    borderRadius:10,
                    backgroundColor:"#000",
                    alignItems:"center",
                    alignContent:"center"
                  },
                  btnContainer:{
                      flexDirection:"row"
                  },
                  mainHeadings:{
                      fontSize:18,
                      margin:10,
                      fontWeight:"bold"
                  }, background: {
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  },
            });
        
      
    

