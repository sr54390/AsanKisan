import React, { Component } from "react";
import { View, Text } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import Firebase from "../Firebase";

class LahoreChat extends Component {
  state = {
    Lahoremessages: [],
    displayName:""
  };
  componentDidMount(){
    const {email,displayName}= firebase.auth().currentUser
    this.setState({email,displayName});

  }

  render() {
    return (
      
      <GiftedChat
      renderUsernameOnMessage={true}
      Lahoremessages={this.state.Lahoremessages}
        
        onSend={message => {
          Firebase.sendMessage(message);
        }}
        user={{
          _id: Firebase.getUid(),
          name: this.state.displayName
        }}
      />

    );
  }
  componentDidMount() {
    console.ignoredYellowBox = ['Setting a timer'];
    Firebase.loadMessages(Lahoremessage => {
      this.setState(previousState => {
        return {
            Lahoremessages: GiftedChat.append(previousState.Lahoremessages, Lahoremessage)
        };
      });
    });
  }

  componentWillUnmount() {
    Firebase.closeChat();
  }
}

export default LahoreChat;
