import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import Dashboard from "../screens/Dashboard";
import CropGrowingGuide from "../screens/CropGrowingGuide";
import ShoppingCart from "../screens/ShoppingCart";
import Chatroom from "../screens/Chatroom";
import PlaceFinder from "../screens/PlaceFinder";
import Weather from "../screens/Weather";
import WheatGuide from "../components/WheatGuide";
import RiceGuide from "../components/RiceGuide";
import chatScreen from "../screens/chatScreen";
const Stack = createStackNavigator();

const AuthNavigator = (props) => (
  <Stack.Navigator>
    <Stack.Screen name="Welcome" component={WelcomeScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="Dashboard" component={Dashboard} />
    <Stack.Screen name="CropGuide" component={CropGrowingGuide} />
    <Stack.Screen name="Shop" component={ShoppingCart} />
    <Stack.Screen name="Chatroom" component={Chatroom} />
    <Stack.Screen name="PlaceFinder" component={PlaceFinder} />
    <Stack.Screen name="Weather" component={Weather} />

    <Stack.Screen name="RiceGuide" component={RiceGuide} />
    <Stack.Screen name="WheatGuide" component={WheatGuide} />
    <Stack.Screen name="chatScreen" component={chatScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;
