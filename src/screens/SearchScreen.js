import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searcAPI, results, errors] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((res) => res.price === price);
  };

  return (
    <View style={styles.background}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmitted={() => {
          searcAPI(term);
        }}
      />

      {errors ? <Text>{errors}</Text> : null}
      <ScrollView>
        <ResultsList title="Economical" results={filterResultsByPrice("$")} />
        <ResultsList title="Mid-Range" results={filterResultsByPrice("$$")} />
        <ResultsList title="Expensive" results={filterResultsByPrice("$$$")} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#fff",
    flex: 1,
  },
  text: {
    padding: 15,
  },
});

export default SearchScreen;
