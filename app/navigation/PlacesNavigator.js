import React from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

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
import Colors from "../constants/Colors";
import testing2 from "../screens/testing2";
import LahoreChat from "../screens/LahoreChat";
import MultanChat from "../screens/chatGroups/MultanChat";
import KarachiChat from "../screens/chatGroups/KarachiChat";
import RawalPindiChat from "../screens/chatGroups/RawalPindiChat";
import OverAllChat from "../screens/chatGroups/OverAllChat";
import islamabadShop from "../screens/ShopsLinks/islamabadShop";
import islamabadTractor from "../screens/ShopsLinks/islamabadTractor";


import lahoreShop from "../screens/ShopsLinks/lahoreShop";
import lahoreTractor from "../screens/ShopsLinks/lahoreTractor";


import pindiShop from "../screens/ShopsLinks/pindiShop";
import pindiTractor from "../screens/ShopsLinks/pindiTractor";



import karachiShop from "../screens/ShopsLinks/karachiShop";
import karachiTractor from "../screens/ShopsLinks/karachiTractor";


import multanShop from "../screens/ShopsLinks/multanShop";
import multanTractor from "../screens/ShopsLinks/multanTractor";
import adminLoginScreen from "../screens/adminLoginScreen";
import adminDashboard from "../screens/adminDashboard";
import viewUsers from "../screens/Admin/viewUsers";
import sendNotifications from "../screens/Admin/sendNotifications";
import updateCropsNews from "../screens/Admin/updateCropsNews";
import cropsNews from "../screens/cropsNews";

const PlacesNavigator = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    Login: LoginScreen,
    Register: RegisterScreen,
    Admin_Login: adminLoginScreen,
    Dashboard: Dashboard,
    Admin: adminDashboard,
    CropGuide: CropGrowingGuide,
    Shop: ShoppingCart,
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
    home: Home,
    Chat: Chat,
    LahoreChat: LahoreChat,
    MultanChat: MultanChat,
    RawalPindiChat: RawalPindiChat,
    KarachiChat: KarachiChat,
    RawalPindiChat: RawalPindiChat,
    OverAllChat: OverAllChat,
    chatScreen: chatScreen,
    islamabadShop:islamabadShop,
    islamabadTractor:islamabadTractor,

    lahoreShop:lahoreShop,
    lahoreTractor:lahoreTractor,

    pindiShop:pindiShop,
    pindiTractor:pindiTractor,

    multanShop:multanShop,
    multanTractor:multanTractor,

    karachiShop:karachiShop,
    karachiTractor:karachiTractor,

    Users: viewUsers,
    Send_Notifications : sendNotifications,
    Admin_News: updateCropsNews,
    CropsNews: cropsNews
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "",
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
    },
  }
);

export default createAppContainer(PlacesNavigator);
