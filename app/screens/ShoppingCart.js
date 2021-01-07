import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ImageBackground
} from "react-native";
import AppButton from "../components/AppButton";
import firebase from "../Firebase";
import DropDownPicker from "react-native-dropdown-picker";
import Icon from "react-native-vector-icons/Feather";

export default class ShoppingCart extends Component {
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
      source={require("../assets/ShopBack.jpg")}
        style={{flex:1}}>
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
                marginTop: 65,
                color: "black",
                fontSize: 20,
                fontWeight:"bold"
              }}
            >
              Please Select any city to see crop guides
            </Text>
          </View>
        ) : this.state.city == "lahore" ? (
          <View>
              <TouchableOpacity
                style={styles.loginBtn}
                onPress={() => {
                  this.props.navigation.navigate("lahoreTractor");
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
                 Lahore Machinery Dealers
                </Text>
              </TouchableOpacity>
           {/* Shop Links */}
         <TouchableOpacity
                style={styles.loginBtn}
                onPress={() => {
                  this.props.navigation.navigate("lahoreShop");
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
                 Lahore Fertilizer Dealers
                </Text>
              </TouchableOpacity>
        </View>
        ) : this.state.city == "multan" ? (
          <View>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => {
              this.props.navigation.navigate("multanTractor");
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
             Multan Machinery Dealers
            </Text>
          </TouchableOpacity>
       {/* Shop Links */}
     <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => {
              this.props.navigation.navigate("multanShop");
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
             Multan Fertilizer Dealers
            </Text>
          </TouchableOpacity>
    </View>
        ) : this.state.city == "rawalpindi" ? (
          <View>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => {
              this.props.navigation.navigate("pindiTractor");
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
             rawalpindi Machinery Dealers
            </Text>
          </TouchableOpacity>
       {/* Shop Links */}
     <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => {
              this.props.navigation.navigate("pindiShop");
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
             rawalpindi Fertilizer Dealers
            </Text>
          </TouchableOpacity>
    </View>
        ) : this.state.city == "karachi" ? (
          <View>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => {
              this.props.navigation.navigate("karachiTractor");
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
             karachi Machinery Dealers
            </Text>
          </TouchableOpacity>
       {/* Shop Links */}
     <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => {
              this.props.navigation.navigate("karachiShop");
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
             Karachi Fertilizer Dealers
            </Text>
          </TouchableOpacity>
    </View>
        ) : this.state.city == "islamabad" ? (
          <View>
              <TouchableOpacity
                style={styles.loginBtn}
                onPress={() => {
                  this.props.navigation.navigate("islamabadTractor");
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
                 Islamabad Machinery Dealers
                </Text>
              </TouchableOpacity>
           {/* Shop Links */}
         <TouchableOpacity
                style={styles.loginBtn}
                onPress={() => {
                  this.props.navigation.navigate("islamabadShop");
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
                 Islamabad Fertilizer Dealers
                </Text>
              </TouchableOpacity>
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
    marginTop: 5,
    width: Dimensions.get("window").width,
    height: 35,

    borderRadius: 10,
    backgroundColor: "brown",
    alignSelf: "center",
    
  },
 
});
