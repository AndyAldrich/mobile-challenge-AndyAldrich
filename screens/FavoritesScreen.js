import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, ScrollView } from 'react-native';
import firebase from 'firebase';
import SkeletonContent from 'react-native-skeleton-content';

import { Card, Container, Name } from '../styles/FeedStyles';
export default function favoritesScreen({ route, navigation }) {

  const [favs, setFavs] = useState("[]")
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    firebase.database().ref("user1").on("value", (snapshot) => {
      
      setFavs(snapshot.val());

      if (loading) {
        setLoading(false);
      }

    })
  }, [])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {loading ? (<ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ alignItems: 'center' }}>
        <SkeletonContent
          animationType="pulse"
          isLoading={loading}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ width: 60, height: 60, borderRadius: 50 }} />
            <View style={{ marginLeft: 20 }}>
              <View style={{ width: 120, height: 20, borderRadius: 4 }} />
              <View
                style={{ marginTop: 6, width: 80, height: 20, borderRadius: 4 }}
              />
            </View>
          </View>
          <View style={{ marginTop: 10, marginBottom: 30 }}>
            <View style={{ width: 300, height: 20, borderRadius: 4 }} />
            <View
              style={{ marginTop: 6, width: 250, height: 20, borderRadius: 4 }}
            />
            <View
              style={{ marginTop: 6, width: 350, height: 200, borderRadius: 4 }}
            />
          </View>
        </SkeletonContent>
        <SkeletonContent>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ width: 60, height: 60, borderRadius: 50 }} />
            <View style={{ marginLeft: 20 }}>
              <View style={{ width: 120, height: 20, borderRadius: 4 }} />
              <View
                style={{ marginTop: 6, width: 80, height: 20, borderRadius: 4 }}
              />
            </View>
          </View>
          <View style={{ marginTop: 10, marginBottom: 30 }}>
            <View style={{ width: 300, height: 20, borderRadius: 4 }} />
            <View
              style={{ marginTop: 6, width: 250, height: 20, borderRadius: 4 }}
            />
            <View
              style={{ marginTop: 6, width: 350, height: 200, borderRadius: 4 }}
            />
          </View>
        </SkeletonContent>
      </ScrollView>
      ) : (
        <View style={styles.container}>
          <FlatList
            data={(JSON.parse(favs))}
            renderItem={(favorite) => {
              return (
                <Container>
                  <Card>
                    <Name>{favorite.item}</Name>
                  </Card>
                </Container>
              );
            }}
            keyExtractor={(item, index) => `${index}`}
            maxToRenderPerBatch={25} />
          <StatusBar style="auto" />
        </View>
      )}
    </SafeAreaView>
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
