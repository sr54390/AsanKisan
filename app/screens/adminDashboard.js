import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  TouchableOpacityBase,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { ceil } from "react-native-reanimated";
import { TouchableNativeFeedback, TouchableOpacity } from "react-native-gesture-handler";
import AppButton from "../components/AppButton";
import * as firebase from "firebase";

const { width: WIDTH } = Dimensions.get("window");
import * as Location from "expo-location";
// import {Notifications  } from "expo";
// import * as Permissions from 'expo-permissions';









export default class adminDashboard extends Component {
    state = {
    displayName: "",
    email: "",
    lat: 0,
    long: 0,
    // currentUser: ""
  };





  

  async componentDidMount() {
    console.log("component wala shru");
    const { email, displayName } = firebase.auth().currentUser;
    this.setState({ email, displayName });
    const location = await Location.getCurrentPositionAsync({
      timeout: 5000,
    });

    this.setState({
      lat: location.coords.latitude,
      long: location.coords.longitude,
    });
    console.log("component wala khtm");

    // var currentUser
    // var that = this
    // listener = firebase.auth().onAuthStateChanged(function (user) {
    //     if (user != null) {

    //         currentUser = user

    //         that.registerForPushNotificationsAsync(currentUser)
            
    //     }

    //     listener();
    //     console.log("permisiions mang le bhai");
        

    // });

  }
  signOutUser = () => {
    firebase.auth().signOut();
    this.props.navigation.navigate("Welcome");
  };


//   registerForPushNotificationsAsync = async (currentUser) => {
//     const { existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
//     let finalStatus = existingStatus;

//     // only ask if permissions have not already been determined, because
//     // iOS won't necessarily prompt the user a second time.
//     if (finalStatus !== 'granted') {
//         // Android remote notification permissions are granted during the app
//         // install, so this will only ask on iOS
//         const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
//         finalStatus = status;
//     }

//     // Stop here if the user did not grant permissions
//     if (finalStatus !== 'granted') {
//         return;
//     }

//     // Get the token that uniquely identifies this device
//     let token = await Notifications.getExpoPushTokenAsync();
//     if(token == '')
//     console.log("token is empty");

//     // POST the token to our backend so we can use it to send pushes from there
//     var updates = {}
//     updates['/expoToken'] = token
//     await firebase.database().ref('/users/' + currentUser.uid).update(updates)
//     //call the push notification 
// }
  render() {
    const { navigation } = this.props;
    return (
      <ImageBackground
        source={require("../assets/dashboard.jpg")}
        style={styles.background}
      >
        <View style={styles.topNavigation}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "Roboto",
              marginLeft: 10,
              color: "#fff",
            }}
          >
            {this.state.displayName}
          </Text>

          <Text
            style={{
              fontSize: 18,
              fontFamily: "Roboto",
              marginLeft: 10,
              color: "#fff",
            }}
          >
            {this.state.lat >= 31 &&
            this.state.lat < 32 &&
            this.state.long >= 74 &&
            this.state.long < 75
              ? "Lahore"
              : this.state.lat >= 24 &&
                this.state.lat < 25 &&
                this.state.long >= 67 &&
                this.state.long < 68
              ? "Krachi"
              : "Location is not Enable"}
          </Text>

          {/* <Icon
            style={styles.menuIcons}
            name={"md-notifications"}
            size={28}
            color={"rgba(255,255,255,0.7) "}
            onPress={() => {
              this.props.navigation.navigate("Notifications");
            }}
          /> */}
          {/* <Icon
          style={styles.menuIcons}
          name={"md-menu"}
          size={28}
          color={"rgba(255,255,255,0.7) "}
        />
        <Icon
          style={styles.menuIcons}
          name={"md-search"}
          size={28}
          color={"rgba(255,255,255,0.7) "}
        /> */}
        </View>
        <View style={{marginTop:70,marginBottom:30}}>
          <Text style={{ fontSize: 25, color: "#330000", textAlign: "center",fontFamily:"monospace" }}>
           Asan Kisan Admin Pannel
          </Text>
        </View>

        <View style={{ flexDirection: "row", marginLeft: 35 }}>
          <TouchableOpacity
            style={styles.dashBtn}
            onPress={() => {
              this.props.navigation.navigate("Send_Notifications");
            }}
          >
            <Icon name={"md-notifications"} size={56} color={"#000"} />
            <Text
              style={{
                color: "#000",
                fontWeight: "bold",
                textAlign: "center",
                paddingTop: 25,
              }}
            >
              Send Notification
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.dashBtn}
            onPress={() => {
              this.props.navigation.navigate("Admin_News");
            }}
          >
            <Icon name={"ios-send"} size={56} color={"#000"} />
            <Text
              style={{
                color: "#000",
                fontWeight: "bold",
                textAlign: "center",
                paddingTop: 25,
              }}
            >
               Send Crops News
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", marginLeft: 35 }}>
          <TouchableOpacity
            style={styles.dashBtn}
            onPress={() => {
              this.props.navigation.navigate("chatScreen");
            }}
          >
            <Icon name={"logo-whatsapp"} size={56} color={"#000"} />
            <Text
              style={{
                color: "#000",
                fontWeight: "bold",
                textAlign: "center",
                paddingTop: 25,
              }}
            >
              Chatroom
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dashBtn} onPress={this.signOutUser}>
            <Icon name={"md-power"} size={56} color={"#000"} />
            <Text
              style={{
                color: "#000",
                fontWeight: "bold",
                textAlign: "center",
                paddingTop: 25,
              }}
            >
              Logout
            </Text>
          </TouchableOpacity>
        
        </View>


        {/* <View style={styles.weatherSettingPic}>
        <Image
          style={styles.weatherPic}
          source={require("../assets/Weather.jpg")}
        />
      </View> */}
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  topNavigation: {
    top: -2,
    alignItems: "center",
    backgroundColor: "black",
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  navigationIcons: {
    right: 10,
  },
  logo: {
    width: 100,
    height: 70,
    // position: "absolute",
    // top: 70,
  },
  loginBtn: {
    margin: 14,
    marginBottom: 5,
    paddingTop: 5,
    width: "100%",
    height: "100%",
    borderRadius: 10,
    backgroundColor: "red",
    alignItems: "center",
    alignContent: "center",
  },
  weatherPic: {
    width: 650,
    height: 350,
  },
  weatherSettingPic: {
    alignItems: "center",
    top: 50,
  },
  urduTitle: {
    fontSize: 35,
    color: "#000",
    fontFamily: "Roboto",
  },
  mainTitle: {
    fontSize: 35,
    color: "#fff",
    fontFamily: "Roboto",
  },
  background: {
    flex: 1,
  },
  container: {
    top: 50,
    flex: 1,
    flexDirection: "row",
    // justifyContent: "space-between",
  },

  dashBoardContainer: {
    top: 11,
    alignContent: "center",
    alignItems: "center",
  },
  inputIcons: {
    position: "absolute",
    top: 8,
    left: 37,
  },
  menuIcons: {
    position: "relative",
    top: 1,
    
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: "rgba(0,0,0,0.65)",
    color: "rgba(255,255,255,0.7)",
    marginHorizontal: 25,
  },
  inputContainer: {
    marginTop: 10,
    alignItems: "center",
  },
  dashBtn: {
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
  lastdashBtn: {
    width: 160,
    height: 150,
    borderRadius: 12,
    backgroundColor: "rgba(255,255,255,0.7)",
    alignItems: "center",
    alignContent: "center",
    margin: 10,
    paddingTop: 18,
    right: -100,
  },
});
