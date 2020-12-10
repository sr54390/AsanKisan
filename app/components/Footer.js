import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class Footer extends Component {
  render() {
    return (
      <View style={{ top: -40,marginLeft:10 }}>
        <Text style={styles.maintext}>Additional Info</Text>
        <View style={styles.container}>
          <Text style={styles.mainInfo}>
            Wind:
            <Text style={styles.ainfo}>{this.props.data.wind.speed} m/h</Text>
          </Text>
          <Text style={styles.mainInfo}>
            Humidity:
            <Text style={styles.ainfo}>{this.props.data.main.humidity}</Text>
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.mainInfo}>
            Visibility:
            <Text style={styles.ainfo}>
              {this.props.data.weather[0].description}
            </Text>
          </Text>
          <Text style={styles.mainInfo}>
            UV: <Text style={styles.ainfo}>1</Text>
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 10,
    marginRight: 40,
    justifyContent: "space-between",
  },
  maintext: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "serif",
    marginTop: 10,
    color:"#fff"
  },
  mainInfo: {
    fontFamily: "serif",
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff",
  },
  ainfo: {
    fontFamily: "serif",
    fontSize: 15,
    fontWeight: "400",
    color: "#fff",
  },
});
