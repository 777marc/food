import React, { useState } from "react";
import { Text, ScrollView, StyleSheet } from "react-native";
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
    <>
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
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 15,
  },
});

export default SearchScreen;
