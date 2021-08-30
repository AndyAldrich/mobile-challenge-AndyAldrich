import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import firebase from 'firebase';
import { Card, Container, Name } from '../styles/FeedStyles';
export default function favoritesScreen({route, navigation}) {

  const [favs, setFavs] = useState("[]")
  // const { favs, setFavs } = route.params;
  // console.log(favs);
  // console.log(navigation.getState());
  useEffect(()=> {
    firebase.database().ref("user1").on("value", (snapshot)=>{
      //console.log(Object.values(snapshot));
      console.log("Snapchat: ",snapshot)
      setFavs(snapshot.val());
      // (JSON.parse(snapshot));
    })
  }, []) 

 
  
 console.log("Favs:  ",typeof(favs));



  // const renderFav = (favorite) =>{
  //   return(
  //     <Text>favorite}</Text>
  //   );
  // }

  return (
    <View style={styles.container}>
      <FlatList 
      data={(JSON.parse(favs))}
      // contentContainerStyle={{
      //   backgroundColor: '#f9c2ff',
      //   padding: 20,
      //   marginVertical: 8,
      //   marginHorizontal: 16,
      //   width: "100%"
  
      // }}
      renderItem={(favorite)=>{
        return (
        // <Text>{favorite}</Text>
        // console.log("FAVORITE:",favorite.item);
        <Container>
        <Card>
          <Name>{favorite.item}</Name>
        </Card>
        </Container>
        // <View style={{width: "100%", height: "10%", marginTop: 10}}>
        //   <Text>{favorite.item}</Text> 
        //   </View>
        );
      }}
      keyExtractor={(item, index) => `${index}`}
      maxToRenderPerBatch={25}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  title: {
    fontSize: 32,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
