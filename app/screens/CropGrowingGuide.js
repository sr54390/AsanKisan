import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
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
   
  }

  // componentDidMount(){
  //   const {screen}= firebase.database.ref('./currentScreen');
  //   this.setState({screen});
  // }

  render() {
    return (
      <ImageBackground
      source={require("../assets/cropsMainBack.jpg")}
        style={styles.background}>
        <View>
          <DropDownPicker
            items={[
              {
                label: "Lahore",
                value: "lahore",
                icon: () => <Icon name="flag" size={18} color="#900" />,
              },
              {
                label: "Sargodha",
                value: "sargodha",
                icon: () => <Icon name="flag" size={18} color="#900" />,
              },
              {
                label: "Multan",
                value: "multan",
                icon: () => <Icon name="flag" size={18} color="#900" />,
              },
              {
                label: "Gujranwala",
                value: "Gujranwala",
                icon: () => <Icon name="flag" size={18} color="#900" />,
              },
              {
                label: "D.G Khan",
                value: "DGkhan",
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
                marginTop: 50,
                color: "Black",
                fontSize: 20,
                fontWeight:"bold"
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
            <View
              onPress={() => {
                navigation.navigate("WheatGuide");
              }}
            >
              <Image
                source={require("../assets/rice.jpg")}
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
                Rice Guide
              </Text>
            </TouchableOpacity>
          </View>
        ) : this.state.city == "multan" ? (
          <View>
            <View>
              <Image
                source={require("../assets/cotton.jpg")}
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
                 Cotton Guide
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{ elevation: 4, margin: 10 }}>
              <View>
                <Image
                  source={require("../assets/mango.jpg")}
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
                  Mango Guide
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : this.state.city == "Gujranwala" ? (
          <View>
            <View>
              <Image
                source={require("../assets/sugarcane.jpg")}
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
                  SugarCane Guide 
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{ elevation: 4 }}>
              <View>
                <Image
                  source={require("../assets/maize.jpg")}
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
                  Maize guide
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : this.state.city == "DGkhan" ? (
          <View>
            <View>
              <Image
                source={require("../assets/onions.jpg")}
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
                  Onion Guide
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{ elevation: 4 }}>
              <View>
                <Image
                  source={require("../assets/chillies.jpg")}
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
                  Chillies Guide
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : this.state.city == "sargodha" ? (
          <View>
          
            <View >
              <View>
                <Image
                  source={require("../assets/oranges.jpg")}
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
      </ImageBackground>
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
    
    width: Dimensions.get("window").width,
    height: 35,

    borderRadius: 10,
    backgroundColor: "brown",
    alignSelf: "center",
  },
  background: {
    flex: 1,
  },
});
