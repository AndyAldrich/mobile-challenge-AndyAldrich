import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './components/BottomTabNav';
import HeaderSearchBar from "react-native-header-search-bar"
import firebase from "firebase";

export default function App() {
  // const [favs, setFavs] = useState([]);
  const firebaseConfig = {
    apiKey: "AIzaSyDU6nDIVlglCWomXjCKZkzTJptd9H6BJDM",
    authDomain: "spacerocks-78bd4.firebaseapp.com",
    projectId: "spacerocks-78bd4",
    storageBucket: "spacerocks-78bd4.appspot.com",
    messagingSenderId: "78434949949",
    appId: "1:78434949949:web:822b36121a4aa8336fc354"
  };
  firebase.initializeApp(firebaseConfig);
  return (
  <NavigationContainer>
  {/* <NavigationContainer favs = {favs} setFavs={setFavs}> */}
    <Tabs />
  </NavigationContainer>
  );
}