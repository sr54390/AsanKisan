import React, { Component } from "react";
import { View, Text } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import Firebase from "../Firebase";

class LahoreChat extends Component {
  state = {
    messages: [],
    displayName: "",
  };
  componentDidMount() {
    const { email, displayName } = firebase.auth().currentUser;
    this.setState({ email, displayName });
  }

  render() {
    return (
      <GiftedChat
        renderUsernameOnMessage={true}
        messages={this.state.messages}
        onSend={(message) => {
          Firebase.sendMessage(message);
        }}
        user={{
          _id: Firebase.getUid(),
          name: this.state.displayName,
        }}
      />
    );
  }
  async componentDidMount() {
    console.ignoredYellowBox = ["Setting a timer"];
    await Firebase.loadMessagesLahore((message) => {
      this.setState((previousState) => {
        return {
          messages: GiftedChat.append(previousState.messages, message),
        };
      });
    });
  }

  componentWillUnmount() {
    Firebase.closeChat();
  }
}

export default LahoreChat;
