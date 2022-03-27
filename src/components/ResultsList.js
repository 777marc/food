import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import ResultItem from "./ResultItem";
import { useNavigation } from "@react-navigation/native";

const ResultsList = ({ title, results }) => {
  const navigation = useNavigation();

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
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("ResultsShow", { id: item.id })
                }
              >
                <ResultItem result={item} />
              </TouchableOpacity>
            );
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
