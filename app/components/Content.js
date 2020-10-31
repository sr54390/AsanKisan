import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import TempCard from "./TempCards";

export default class Content extends Component {
  render() {
    return (
      <View style={styles.card}>
        <TempCard
          bgColor="orange"
          color1="orange"
          color2="#f08080"
          style={{ borderTopLeftRadius: 70 }}
          img={require("../assets/rai.jpg")}
          data={this.props.data[1]}
        />
        <TempCard
          color1="#db7093"
          color2="purple"
          img={require("../assets/sun.png")}
          data={this.props.data[2]}
        />
        <TempCard
          bgColor="#483d8b"
          color1="#00008b"
          color2="#483d8b"
          style={{ borderBottomRightRadius: 70 }}
          img={require("../assets/moon.png")}
          data={this.props.data[3]}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    top: -40,
  },
});
