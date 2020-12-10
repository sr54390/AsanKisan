import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  ActivityIndicator, TouchableOpacity
} from "react-native";
import AppButton from "../components/AppButton";
import { TextInput } from "react-native-paper";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Content from "../components/Content";
import { ThemeColors } from "react-navigation";
import Button from "react-native-button";
import Header4Guides from "../components/Header4Guides";

export default class Weather4Guides extends Component {
  constructor(props) {
    super(props);
    this.state = {
      report: {
        list: null,
        detail: null,
      },
      country: "pk",
      region: "lahore",
    };
    this._getWeatherReport = this._getWeatherReport.bind(this);
    this._handlePress = this._handlePress.bind(this)
  }

  async _getWeatherReport() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.region},${this.state.country}&appid=110331aa1734a77c2acdce2d349b7574&units=metric`
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

   _handlePress() {
    this._getWeatherReport()
  }



  async componentDidMount() {
    console.log("flag is here " + this.state.region)
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
     
        <View style={styles.title}>
          <Header4Guides
            data={[this.state.report.list[0], this.state.report.detail,]}
          />

         
        </View>
      
    );
  }
}
const styles = StyleSheet.create({
  title: { flex: 1, justifyContent: "center", marginTop:15 },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    flexDirection: "row",
    
    backgroundColor: "transparent",
    margin:10,
    marginLeft:20,
    marginRight:20

  },
  submitButton: {
    
    marginLeft: 200,
    elevation: 8,
    backgroundColor: "brown",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  input:{
    width:"50%",
    margin:5
  }
});
