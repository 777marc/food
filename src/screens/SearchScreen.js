import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errors, setErrors] = useState("");

  const searcAPI = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          term: searchTerm,
          location: "orlando, fl",
          limit: 25,
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrors("there was a problem completing your request");
    }
  };

  // iniitial load
  useEffect(() => {
    searcAPI("pasta");
  }, []);

  return (
    <View style={styles.background}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmitted={searcAPI}
      />
      <Text style={styles.text}>we have {results.length} results</Text>
      {errors ? <Text>{errors}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#fff",
  },
  text: {
    padding: 15,
    color: "blue",
  },
});

export default SearchScreen;
