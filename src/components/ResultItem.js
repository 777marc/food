import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ResultItem = ({ result }) => {
  return (
    <View style={styles.view}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.text}>{result.name}</Text>
      <Text style={styles.subText}>
        rating: {result.rating} | reviews: {result.review_count}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    padding: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subText: {
    color: "gray",
    fontSize: 14,
  },
  image: {
    width: 250,
    height: 200,
    borderRadius: 4,
  },
});

export default ResultItem;
