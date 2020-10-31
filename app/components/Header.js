import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Platform,
  ScrollView,
  TextInput,
} from "react-native";
// import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

export default class Header extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     country: "",
  //     region: "",
  //   };
  // }
  // selectCountry(val) {
  //   this.setState({ country: val });
  // }
  // selectRegion(Val) {
  //   this.setState({ region: val });
  // }

  render() {
    return (
      <View style={{ top: 0 }}>
        <Image
          style={styles.imageHeader}
          source={{
            uri: `https://openweathermap.org/img/wn/${this.props.data[0].weather[0].icon}@2x.png`,
          }}
        />
        <Text style={styles.tempText}>
          {Math.ceil(this.props.data[0].main.temp)}°C
        </Text>
        <Text style={styles.contaryText}>
          {this.props.data[1].country},{this.props.data[1].name}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainTitle: {
    fontFamily: "serif",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  imageHeader: {
    width: 100,
    height: 100,
    alignSelf: "center",
    // marginVertical: 10,
    top:-30
  },
  tempText: {
    fontFamily: "serif",
    fontSize: 48,
    fontWeight: "bold",
    textAlign: "center",
    top:-50
  },
  contaryText: {
    fontFamily: "serif",
    fontSize: 20,
    color: "white",
    textAlign: "center",
    top:-50
  },
});
