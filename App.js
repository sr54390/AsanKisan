import React from "react";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppButton from "./app/components/AppButton";
import ShoppingCart from "./app/screens/ShoppingCart";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import Dashboard from "./app/screens/Dashboard";
import Shop from "./app/screens/Shop";
import CropGrowingGuide from "./app/screens/CropGrowingGuide";
// import WelcomeScreen from "./app/screens/WelcomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./app/navigation/AuthNavigator";
import { createAppContainer } from "react-navigation";
import Chatroom from "./app/screens/Chatroom";

import Weather from "./app/screens/Weather";
import PlaceFinder from "./app/screens/PlaceFinder";
import * as firebase from "firebase";
import GuideWheat from "./app/screens/GuideWheat";
import GuideWheatstep1 from "./app/screens/WheatGuide/GuideWheatstep1";

var firebaseConfig = {
  apiKey: "AIzaSyCCX0SAXA78YjNdyl1LS88ZgvXw-0Gf_2Q",
  authDomain: "asankisan-d3d74.firebaseapp.com",
  databaseURL: "https://asankisan-d3d74.firebaseio.com",
  projectId: "asankisan-d3d74",
  storageBucket: "asankisan-d3d74.appspot.com",
  messagingSenderId: "755521933829",
  appId: "1:755521933829:web:bf85f419239a9adb95c26c",
  measurementId: "G-43P9G1HTGW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
    
    
  );
}
