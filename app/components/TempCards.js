import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default class TempCard extends Component {
  render() {
    return (
      <View
        style={{
          alignItems: "center",
          margin: 10,
          borderRadius: 20,
          justifyContent: "flex-start",
          backgroundColor: this.props.bgColor,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        <View
          style={{
            ...styles.bgcard,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            backgroundColor: "orange",
            justifyContent: "flex-start",
            backgroundColor: this.props.color1,
            ...this.props.style,
          }}
        >
          <Text style={styles.text}>
            {this.props.data.dt_txt.slice(11, 18)}
          </Text>
          <Image
            style={styles.rainyImg}
            source={{
              uri: `https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${this.props.data.weather[0].icon}.png`,
            }}
          />
        </View>
        <View
          style={{
            ...styles.bgcard,
            backgroundColor: "pink",
            zIndex: -1,
            elevation: -1,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,

            justifyContent: "center",
            backgroundColor: this.props.color2,
            ...this.props.style,
          }}
        >
          <Text style={styles.text}>
            {Math.ceil(this.props.data.main.temp)}°C
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  bgcard: {
    width: 100,
    height: 125,
    alignItems: "center",
  },
  rainyImg: {
    width: 75,
    height: 75,
    alignSelf: "center",
    marginTop: 18,
    zIndex: 99,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    fontFamily: "serif",
    marginVertical: 20,
  },
});
