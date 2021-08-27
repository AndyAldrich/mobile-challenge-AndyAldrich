import React, {useState, useEffect} from 'react';
import { Card, Container, ColLeft, ColCenter, ColRight, DataText, DataCols, Name, Interaction, InteractionWrapper, InteractionText, Divider } from '../styles/FeedStyles';

const PostCard = () =>{

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
                <Interaction active onPress={()=>handleFavChange(meteor.item.name)}>
                    <Icon name="heart" size={25}/>
                    <InteractionText>Favorite</InteractionText>
                </Interaction>
              </InteractionWrapper>
            </Card>
          </Container>
    );
}

export default PostCard;
