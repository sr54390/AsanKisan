import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import AppButton from "../components/AppButton";
import firebase from "../Firebase";
import DropDownPicker from "react-native-dropdown-picker";
import Icon from "react-native-vector-icons/Feather";

export default class CropGrowingGuide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "",
      city: "",
    };
  }

  componentDidMount() {
    console.log("hello my name is hassan");
  }

  // componentDidMount(){
  //   const {screen}= firebase.database.ref('./currentScreen');
  //   this.setState({screen});
  // }

  render() {
    return (
      <View>
        <View>
          <DropDownPicker
            items={[
              {
                label: "Lahore",
                value: "lahore",
                icon: () => <Icon name="flag" size={18} color="#900" />,
              },
              {
                label: "Islamabad",
                value: "islamabad",
                icon: () => <Icon name="flag" size={18} color="#900" />,
              },
              {
                label: "Multan",
                value: "multan",
                icon: () => <Icon name="flag" size={18} color="#900" />,
              },
              {
                label: "Rawalpindi",
                value: "rawalpindi",
                icon: () => <Icon name="flag" size={18} color="#900" />,
              },
              {
                label: "Karachi",
                value: "karachi",
                icon: () => <Icon name="flag" size={18} color="#900" />,
              },
            ]}
            min={0}
            max={10}
            placeholder="Please select city"
            defaultValue={this.state.country}
            containerStyle={{ height: 60 }}
            itemStyle={{
              justifyContent: "flex-start",
            }}
            onChangeItem={(item) => {
              this.setState({ city: item.value });
            }}
          />
        </View>

        {this.state.city == "" ? (
          <View>
            <Text
              style={{
                alignSelf: "center",
                marginTop: 300,
                color: "red",
                fontSize: 16,
              }}
            >
              Please Select any city to see crop guides
            </Text>
          </View>
        ) : this.state.city == "lahore" ? (
          <View>
            <View
              onPress={() => {
                navigation.navigate("WheatGuide");
              }}
            >
              <Image
                source={require("../assets/wheat.jpg")}
                style={{
                  width: "100%",
                  height: 200,
                }}
              />
            </View>
            <TouchableOpacity
              style={styles.loginBtn}
              onPress={() => {
                this.props.navigation.navigate("wheatstep1");
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  textAlign: "center",
                  alignSelf: "center",
                  fontSize: 20,
                  paddingTop: 5,
                }}
              >
                Wheat Guide
              </Text>
            </TouchableOpacity>
          </View>
        ) : this.state.city == "multan" ? (
          <View>
            <View>
              <Image
                source={require("../assets/rice.jpg")}
                style={{
                  width: "100%",
                  height: 200,
                }}
              />

              <TouchableOpacity
                style={styles.loginBtn}
                onPress={() => {
                  this.props.navigation.navigate("wheatstep1");
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
                  Rice Guide
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{ elevation: 4, margin: 10 }}>
              <View>
                <Image
                  source={require("../assets/rice.jpg")}
                  style={{
                    width: "100%",
                    height: 200,
                    marginBottom: 10,
                  }}
                />
              </View>
              <TouchableOpacity
                style={styles.loginBtn}
                onPress={() => {
                  this.props.navigation.navigate("wheatstep1");
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
                  Orange guide
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : this.state.city == "rawalpindi" ? (
          <View>
            <View>
              <Image
                source={require("../assets/rice.jpg")}
                style={{
                  width: "100%",
                  height: 200,
                }}
              />

              <TouchableOpacity
                style={styles.loginBtn}
                onPress={() => {
                  this.props.navigation.navigate("wheatstep1");
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
                  sugar cane
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{ elevation: 4, margin: 10 }}>
              <View>
                <Image
                  source={require("../assets/rice.jpg")}
                  style={{
                    width: "100%",
                    height: 200,
                    marginBottom: 10,
                  }}
                />
              </View>
              <TouchableOpacity
                style={styles.loginBtn}
                onPress={() => {
                  this.props.navigation.navigate("wheatstep1");
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
                  Orange guide
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : this.state.city == "karachi" ? (
          <View>
            <View>
              <Image
                source={require("../assets/rice.jpg")}
                style={{
                  width: "100%",
                  height: 200,
                }}
              />

              <TouchableOpacity
                style={styles.loginBtn}
                onPress={() => {
                  this.props.navigation.navigate("wheatstep1");
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
                  krachi Rice Guide
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{ elevation: 4, margin: 10 }}>
              <View>
                <Image
                  source={require("../assets/rice.jpg")}
                  style={{
                    width: "100%",
                    height: 200,
                    marginBottom: 10,
                  }}
                />
              </View>
              <TouchableOpacity
                style={styles.loginBtn}
                onPress={() => {
                  this.props.navigation.navigate("wheatstep1");
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
                  Orange guide
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : this.state.city == "islamabad" ? (
          <View>
            <View>
              <Image
                source={require("../assets/rice.jpg")}
                style={{
                  width: "100%",
                  height: 200,
                }}
              />

              <TouchableOpacity
                style={styles.loginBtn}
                onPress={() => {
                  this.props.navigation.navigate("wheatstep1");
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
                  islamabad Rice Guide
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{ elevation: 4, margin: 10 }}>
              <View>
                <Image
                  source={require("../assets/rice.jpg")}
                  style={{
                    width: "100%",
                    height: 200,
                    marginBottom: 10,
                  }}
                />
              </View>
              <TouchableOpacity
                style={styles.loginBtn}
                onPress={() => {
                  this.props.navigation.navigate("wheatstep1");
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
                  Orange guide
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View>
            <Text
              style={{
                alignSelf: "center",
                marginTop: 300,
                color: "red",
                fontSize: 16,
              }}
            >
              Please select correct cateogory
            </Text>
          </View>
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  title: {
    color: "red",
    fontFamily: "serif",
    width: "100%",
    borderRadius: 100,
  },
  loginBtn: {
    marginTop: 5,
    width: Dimensions.get("window").width,
    height: 35,

    borderRadius: 10,
    backgroundColor: "brown",
    alignSelf: "center",
  },
});
