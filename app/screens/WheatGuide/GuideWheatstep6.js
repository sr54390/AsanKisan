
import React, { Component, useState   } from 'react';
import {View , Text, StyleSheet,ActivityIndicator,CheckBox, ImageBackground,Image } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
// import * as firebase from "firebase";

export default class GuideWheatstep6 extends Component{
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
                <Text style={styles.mainHeadings}>Wheat Guide  </Text>
                <Text style={styles.mainHeadings}>Step 6  </Text>
                <Text style={styles.mainHeadings}>3rd water </Text>
                <View style={styles.checkboxContainer}>
                    
                    <CheckBox
                   
                      style={styles.checkbox}
                    />
                    <Text style={styles.label}>Wait for 20 to 25 days before third water according to your area</Text>
                  </View>
         {/* powedering */}
         <View style={styles.checkboxContainer}>
                    
                    <CheckBox
                   
                      style={styles.checkbox}
                    />
                    <Text style={styles.label}>Water the Farm</Text>
                  </View>
                {/* Seeding */}
                <View style={styles.checkboxContainer}>
                    
        <CheckBox
       
          style={styles.checkbox}
        />
        <Text style={styles.label}>It can also intake fertilizer depending on the strength of wheat(optional)</Text>
      </View>
                {/* //   value={isSelected}
        //   onValueChange={setSelection} */}
                <View style={styles.checkboxContainer}>
                    
        <CheckBox
       
          style={styles.checkbox}
        />
        <Text style={styles.label}>after third watee keep noticing wheat will be adapting its shape</Text>
      </View>
      <View style={styles.btnContainer}>
      <TouchableOpacity style={styles.Stepbtn} >
       <Text style={{color:"#FFF",fontWeight:"500"}} onPress={()=> {this.props.navigation.navigate("wheatstep7")}}> Go to Step 7</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.Stepbtn} onPress={()=> {this.props.navigation.navigate("Dashboard")}} >
       <Text style={{color:"#FFF",fontWeight:"500"}}> End Tutorial</Text>
     </TouchableOpacity>
     </View>
                </View>
                </ImageBackground>
            );
}}
            const styles = StyleSheet.create({
                container: {
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                  },
                  checkboxContainer: {
                    flexDirection: "row",
                    marginLeft: 20,
                    marginRight:20,
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
                      margin:20,
                      fontWeight:"bold"
                  }, background: {
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  },
            });
        
      
    

