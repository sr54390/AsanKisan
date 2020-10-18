import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import AppButton from "../components/AppButton";
import { TextInput } from "react-native-paper";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Content from "../components/Content";
import { ThemeColors } from "react-navigation";
import Button from "react-native-button";

export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      report: {
        list: null,
        detail: null,
      },
      country: "pk",
      region: "karachi",
    };
    this._getWeatherReport = this._getWeatherReport.bind(this);
  }
  _handlePress() {
    console.log(this.state.country);
    console.log(this.state.region);
  }

  async _getWeatherReport() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.country},${this.state.region}&appid=110331aa1734a77c2acdce2d349b7574&units=metric`
    );
    const data = await response.json();
    this.setState({
      report: {
        list: [data.list[0], data.list[1], data.list[2], data.list[3]],
        detail: data.city,
      },
      country: this.state.country,
      region: this.state.region,
    });
  }

  async componentDidMount() {
    await this._getWeatherReport();
  }

  render() {
    if (this.state.report.list === null || this.state.report.detail === null) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator color="red" size="large" />
        </View>
      );
    }

    return (
      <ImageBackground
        style={styles.background}
        source={require("../assets/weatherBackground.jpg")}
      >
        {/* <View style={styles.content}>
          <TextInput
            placeholder="Enter Country"
            returnKeyLabel={"next"}
            onChangeText={(text) => this.setState({ country: text })}
          />

          <TextInput
            placeholder="Enter Region"
            returnKeyLabel={"next"}
            onChangeText={(text) => this.setState({ region: text })}
          />
          <View />
        </View>
        <View style={styles.submitButton}>
          <Button
            style={styles.submitButton}
            onPress={() => this._handlePress()}
            style={styles.buttonStyle}
          >
            Submit
          </Button>
        </View> */}
        <View style={styles.title}>
          <Header
            data={[this.state.report.list[0], this.state.report.detail]}
          />

          <Content data={this.state.report.list} />
          <Footer data={this.state.report.list[0]} />
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  title: { flex: 1, justifyContent: "center" },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    flexDirection: "row",
    top: 50,
    backgroundColor: "red",
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
    justifyContent: "space-between",
  },
  submitButton: {
    top: 55,
    marginLeft: 200,
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
});
