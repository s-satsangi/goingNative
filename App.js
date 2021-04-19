import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function App() {
  const handlePress = () => console.log("Ouch!");
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Yooooooooooooooooooooooo! The bucket sort algorithm is a distributed
        sorting algorithm that separates the elements into different buckets, or
        smaller arrays, and then uses a simpler sorting algorithm good for
        sorting small arrays, such as insertion sort, to sort each bucket
      </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: 25,
  },
});
