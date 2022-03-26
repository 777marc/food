import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import ResultItem from "./ResultItem";

const ResultsList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.view}>
        <FlatList
          keyExtractor={(result) => result.id}
          data={results}
          renderItem={({ item }) => {
            return <ResultItem result={item} />;
          }}
          horizontal={true}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    padding: 5,
    flexDirection: "row",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ResultsList;
