import React, { useState, useEffect, PureComponent } from 'react';
import { Card, Container, ColLeft, ColCenter, ColRight, DataText, DataCols, Name, Interaction, InteractionWrapper, InteractionText, Divider, MeteorSearch } from '../styles/FeedStyles';
import { FlatList, View, TextInput, AsyncStorage } from 'react-native';
import firebase from "firebase";


import Icon from 'react-native-vector-icons/Ionicons';

export default function HomeScreen({ route, navigation }) {

  // console.log(navigation.getState())
  // const { favs, setFavs } = route.params;
  // const favs = [];
  const [dataM, setDataM] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [favs,setFavs] = useState([])

  console.log(favs)



  useEffect(() => {
    fetch('https://data.nasa.gov/resource/y77d-th95.json')
      .then(response => response.json())
      .then(data => {
        setDataM(data)
        setFilteredList(data)
      });
  }, [])


  const handleSearch = (val) => {
    const filteredDataExport = dataM.filter((meteor) => {
      if (meteor.name.toLowerCase().includes(val.toLowerCase()) || meteor.id.includes(JSON.parse(val))) {
        return meteor;
        // console.log(meteor.name)
      }

    })
    setFilteredList(filteredDataExport);
    // console.log(filteredDataExport)
  }



  const handleFavChange = (name) => {
    let favsToUpdate = [...favs];
    // console.log(favs, setFavs)
    favsToUpdate.includes(name) ? favsToUpdate = favsToUpdate.filter(meteor => {
      return meteor !== name
    }) : favsToUpdate.push(name);
    console.log(favsToUpdate);;
    setFavs(favsToUpdate);
    firebase.database().ref("user1").set(JSON.stringify(favsToUpdate));
  }


  const renderData = (meteor) => {
    // console.log();

    // let isFaved = meteor.item.liked ? 'heart' : 'heart-online;'
    // let isFavedColor = meteor.item.liked ? '#2e64e5' : '#333'

    return (
      <Container>
        <Card>
          <Name>{meteor.item.name}</Name>
          <DataCols>
            <ColLeft>
              <DataText>Year: {meteor.item.year ? meteor.item.year.substring(0, 4) : ' '}</DataText>
              <DataText>ID: {meteor.item.id}</DataText>
              <DataText>Type: {meteor.item.nametype ? meteor.item.nametype : '  '}</DataText>
            </ColLeft>
            <ColCenter>
              <DataText>Class: {meteor.item.recclass ? meteor.item.recclass : ' '}</DataText>
              <DataText>Mass: {meteor.item.mass ? meteor.item.mass : ' '}</DataText>
              <DataText>Fell: {meteor.item.fall ? meteor.item.fall : ' '}</DataText>
            </ColCenter>
            <ColRight>
              <DataText>Lat: {meteor.item.reclat ? meteor.item.reclat : ' '}</DataText>
              <DataText>Long: {meteor.item.reclong ? meteor.item.reclong : ' '}</DataText>
              <DataText>Coord: {meteor.item.geolocation.coordinates ? meteor.item.geolocation.coordinates.join(", ") : ' '}</DataText>
            </ColRight>
          </DataCols>
          <Divider />
          <InteractionWrapper>
            <Interaction onPress={() => handleFavChange(meteor.item.name)}>
              <Icon name="heart" size={25} />
              <InteractionText>Favorite</InteractionText>
            </Interaction>
          </InteractionWrapper>
        </Card>
      </Container>
    );
  }

  return (
    <View>
      <View>
        <MeteorSearch placeholder="Name or ID" onChangeText={(val) => handleSearch(val)} />
      </View>

      <FlatList
        data={filteredList}
        renderItem={renderData}
        keyExtractor={(item, index) => `${index}`}
        maxToRenderPerBatch={25}
      />
    </View>
  );
}

