import React from "react";
import { BreadProvider, Button } from "material-bread";
import { useTheme } from "@react-navigation/native";

import { View, Text, StyleSheet } from "react-native";
const HomeScreen = ({ navigation, theme }) => {
  // console.log(useTheme());
  // console.log(theme);

  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Button
        text={"Search"}
        type="contained"
        onPress={() => navigation.navigate("Search")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
