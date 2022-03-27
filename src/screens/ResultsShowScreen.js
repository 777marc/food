import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ResultsShowScreen = ({ route }) => {
  return (
    <>
      <Text>Result Details : {route.params.item.name}</Text>
    </>
  );
};

const styles = StyleSheet.create({});

export default ResultsShowScreen;
