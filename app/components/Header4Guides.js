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

export default class Header4Guides extends Component {
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
      <View >
          <View style={{ top: 0 ,flexDirection:"row"}}>
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
    width: 70,
    height: 70,
    alignSelf: "center",
    // marginVertical: 10,
    top:-17
  },
  tempText: {
    fontFamily: "serif",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    top:7,
    left:-10,
    color:"black"
  },
  contaryText: {
    fontFamily: "serif",
    fontSize: 15,
    color: "black",
    textAlign: "center",
    top:15
  },
});
