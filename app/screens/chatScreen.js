
import React, { Component } from "react";

import { TouchableOpacity,View,Text ,StyleSheet} from "react-native";


export default class chatScreen extends Component {
render(){
  return(
    <View>
      <TouchableOpacity style={styles.loginBtn} onPress={()=> {this.props.navigation.navigate("Chat")}}>
    
    <Text style={{color:"#fff",fontWeight:"bold",textAlign:"center",fontSize:20,paddingTop:5}}>Islamabad Group</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.loginBtn} onPress={()=> {this.props.navigation.navigate("LahoreChat")}}>
    
    <Text style={{color:"#fff",fontWeight:"bold",textAlign:"center",fontSize:20,paddingTop:5}}>Lahore Chat</Text>
  </TouchableOpacity>


    </View>
  );
    
  
}



}
const styles = StyleSheet.create({
  loginBtn: {
    
    
    margin:2,
    width: 375,
    height:85,
    
    borderRadius:3,
    backgroundColor:"grey",
    alignContent:"center",
    alignItems:"center"
    
  },
})
