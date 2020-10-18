import React, { Component } from "react";
import { View, Text, StyleSheet, Image,TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Ionicons } from "@expo/vector-icons";
import io from "socket.io-client";

export default class Chatroom extends React.Component {
constructor(props){
  super(props);
  this.state = {
    chatMessage:"",
    chatMessages:[]
  };
}

 componentDidMount(){
    this.socket = io("http://192.168.43.126:3000");
    this.socket.on("chat message",msg=>{
    this.setState({chatMessages: [...this.state.chatMessages,msg]});
    });
 }

 submitChatMessage(){
   this.socket.emit("chat message", this.state.chatMessage);
   this.setState({chatMessage:""});
 }
  render() {
  const chatMessages = this.state.chatMessages.map(chatMessage=>(<Text key={chatMessage}>{chatMessage}</Text>));
    return (
     <View style={styles.container}>
       <TextInput 
       style={{height:40,borderWidth:2, margin:50}}
       autoCorrect={false}
       value={this.state.chatMessage}
       onSubmitEditing={()=> this.submitChatMessage()}
       onChangeText={chatMessage => {
         this.setState({chatMessage});
       }}/>
       <Text style={styles.fontChat}>{chatMessages}{"\n"}</Text>
     </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F5F7",
    justifyContent:"center"
  },
  fontChat:{
    fontSize:25,
    margin:10
  }


})



