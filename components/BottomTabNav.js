import React, {useEffect, useState} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
// import SearchScreen from '../screens/SearchScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

const Tab = createBottomTabNavigator();



// const Tabs = ({favs, setFavs}) => {
  const Tabs = () => {
  const [favsGlobal, setFavsGlobal] = useState([]);
  let favs = [] // || AsyncStorage.getItem("whatever the item name is")


  
  // console.log(favs);
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} 
            // favs = {favs}
            // setFavs = {setFavs}
            initialParams={{
              favs: favs,
              // setFavs: setFavs,
            }}
             options={{
               tabBarLabel: 'Home',
               tabBarColor: '#009387',
               tabBarIcon: ({ color }) => (
                 <Icon name="ios-home" color={color} size={26} />),
            }} />
            <Tab.Screen name="Favorites" component={FavoritesScreen} 
              initialParams= {{
                favs:favs
              }}
             options={{
               tabBarLabel: 'Favorites',
               tabBarColor: '#009387',
               tabBarIcon: ({ color }) => (
                 <Icon name="ios-heart" color={color} size={26} />),
            }} />
        </Tab.Navigator>
    );
}

export default Tabs;

