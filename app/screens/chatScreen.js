import React, { Component } from "react";

import { TouchableOpacity, View, Text, StyleSheet,ImageBackground } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import CityIcon from "react-native-vector-icons/FontAwesome5";

export default class chatScreen extends Component {
  render() {
    return (
      <ImageBackground
      source={require("../assets/chatroomBack.jpg")}
        style={styles.background}>
      <View styles={{}}>
        {/* <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => {
            this.props.navigation.navigate("Chat");
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 20,
              paddingTop: 5,
            }}
          >
            Islamabad Group
          </Text>
        </TouchableOpacity> */}
        <View
          style={{
            flexDirection: "row",
            marginLeft: 40,
            marginTop: 100,
          }}
        >
          <TouchableOpacity
            style={styles.chatbutton}
            onPress={() => {
              this.props.navigation.navigate("Chat");
            }}
          >
            <CityIcon name={"city"} size={56} color={"#000"} />
            <Text
              style={{
                color: "#000",
                fontWeight: "bold",
                textAlign: "center",
                paddingTop: 25,
              }}
            >
              Islamabad
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.chatbutton}
            onPress={() => {
              this.props.navigation.navigate("LahoreChat");
            }}
          >
            <CityIcon name={"city"} size={56} color={"#000"} />
            <Text
              style={{
                color: "#000",
                fontWeight: "bold",
                textAlign: "center",
                paddingTop: 25,
              }}
            >
              Lahore
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", marginLeft: 35 }}>
          <TouchableOpacity
            style={styles.chatbutton}
            onPress={() => {
              this.props.navigation.navigate("KarachiChat");
            }}
          >
            <CityIcon name={"city"} size={56} color={"#000"} />
            <Text
              style={{
                color: "#000",
                fontWeight: "bold",
                textAlign: "center",
                paddingTop: 25,
              }}
            >
              Karachi
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.chatbutton}
            onPress={() => {
              this.props.navigation.navigate("RawalPindiChat");
            }}
          >
            <CityIcon name={"city"} size={56} color={"#000"} />
            <Text
              style={{
                color: "#000",
                fontWeight: "bold",
                textAlign: "center",
                paddingTop: 25,
              }}
            >
              Rawalpindi
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{ flexDirection: "row", marginLeft: 35, alignItems: "center" }}
        >
          <TouchableOpacity
            style={styles.chatbutton}
            onPress={() => {
              this.props.navigation.navigate("MultanChat");
            }}
          >
            <CityIcon name={"city"} size={56} color={"#000"} />
            <Text
              style={{
                color: "#000",
                fontWeight: "bold",
                textAlign: "center",
                paddingTop: 25,
              }}
            >
              Multan
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.chatbutton}
            onPress={() => {
              this.props.navigation.navigate("OverAllChat");
            }}
          >
            <CityIcon name={"city"} size={56} color={"#000"} />
            <Text
              style={{
                color: "#000",
                fontWeight: "bold",
                textAlign: "center",
                paddingTop: 25,
              }}
            >
              Public
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  loginBtn: {
    margin: 2,
    width: 375,
    height: 85,

    borderRadius: 3,
    backgroundColor: "grey",
    alignContent: "center",
    alignItems: "center",
  },
  chatbutton: {
    width: 160,
    height: 150,
    borderRadius: 12,
    backgroundColor: "rgba(255,255,255,0.7)",
    alignItems: "center",
    alignContent: "center",
    margin: 10,
    paddingTop: 18,
    right: 34,
  },
  background: {
    flex: 1,
  },
});
