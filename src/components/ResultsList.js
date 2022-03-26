import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import ResultItem from "./ResultItem";

const ResultsList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.text}>
        {title} : {results.length} results
      </Text>
      <View style={styles.view}>
        <FlatList
          keyExtractor={(result) => result.id}
          data={results}
          renderItem={({ item }) => {
            return <ResultItem result={item} />;
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
  },
  text: {
    marginTop: 5,
    marginHorizontal: 15,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ResultsList;
