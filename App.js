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
import PlacesNavigator from './app/navigation/PlacesNavigator';
import { createAppContainer } from "react-navigation";


import Weather from "./app/screens/Weather";

import * as firebase from "firebase";
import GuideWheat from "./app/screens/GuideWheat";
import GuideWheatstep1 from "./app/screens/WheatGuide/GuideWheatstep1";
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';



import placesReducer from './app/store/places-reducer';
import {init} from './app/helpers/db';
import testing2 from "./app/screens/testing2";

init()
	.then(() => {
		console.log('Initialized database!');
	})
	.catch(err => {
		console.log('Initializing db failed!');
		console.log(err);
	});

const rootReducer = combineReducers({
  	places: placesReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));


export default function App() {
  return (
    
    <Provider store={store}>
    <PlacesNavigator/>
  </Provider>
   
	
    
  );
}
