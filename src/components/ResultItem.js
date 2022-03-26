import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ResultItem = ({ result }) => {
  return (
    <View>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text>{result.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    padding: 5,
  },
  text: {
    fontSize: 8,
  },
  image: {
    height: 200,
  },
});

export default ResultItem;
