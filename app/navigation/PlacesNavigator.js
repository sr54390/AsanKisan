import React from "react";

import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import Dashboard from "../screens/Dashboard";
import CropGrowingGuide from "../screens/CropGrowingGuide";
import ShoppingCart from "../screens/ShoppingCart";


import Weather from "../screens/Weather";
import WheatGuide from "../components/WheatGuide";
import RiceGuide from "../components/RiceGuide";
import chatScreen from "../screens/chatScreen";
import GuideWheatstep3 from "../screens/WheatGuide/GuideWheatstep3";
import GuideWheatstep4 from "../screens/WheatGuide/GuideWheatstep4";
import GuideWheatstep5 from "../screens/WheatGuide/GuideWheatstep5";
import GuideWheatstep6 from "../screens/WheatGuide/GuideWheatstep6";
import GuideWheatstep7 from "../screens/WheatGuide/GuideWheatstep7";
import GuideWheatstep8 from "../screens/WheatGuide/GuideWheatstep8";
import Notifications from "../screens/Notifications";
import Home from "../screens/Home";
import Chat from "../screens/Chat";
import PlacesListScreen from "../screens/PlacesListScreen";
import PlaceDetailScreen from "../screens/PlaceDetailScreen";
import NewPlaceScreen from "../screens/NewPlaceScreen";
import MapScreen from "../screens/MapScreen";
import GuideWheatstep1 from "../screens/WheatGuide/GuideWheatstep1";
import GuideWheatstep2 from "../screens/WheatGuide/GuideWheatstep2";
import Colors from '../constants/Colors';
import testing2 from "../screens/testing2"
import LahoreChat from "../screens/LahoreChat";
const PlacesNavigator = createStackNavigator(


{
    
    Welcome: WelcomeScreen,
    Login: LoginScreen,
Register: RegisterScreen,
Dashboard: Dashboard,
CropGuide: CropGrowingGuide,
Shop:ShoppingCart,
Weather: Weather,
RiceGuide: RiceGuide,
WheatGuide: WheatGuide,
chatScreen: chatScreen,
wheatstep1: GuideWheatstep1,
wheatstep2: GuideWheatstep2,
wheatstep3: GuideWheatstep3,
wheatstep4: GuideWheatstep4,
wheatstep5: GuideWheatstep5,
wheatstep6: GuideWheatstep6,
wheatstep7: GuideWheatstep7,
wheatstep8: GuideWheatstep8,
wheatTesting: testing2,
Places: PlacesListScreen,
    PlaceDetail: PlaceDetailScreen,
    NewPlace: NewPlaceScreen,
    Map: MapScreen,

    
   Notifications: Notifications,
   home:Home,
   Chat:Chat,
   LahoreChat:LahoreChat,
   chatScreen:chatScreen
},
{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
  }
});

export default createAppContainer(PlacesNavigator);

