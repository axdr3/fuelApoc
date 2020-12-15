import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  BreadProvider,
  Colors,
  defaultTheme as breadDefTheme,
} from "material-bread";
import SearchScreen from "./src/screens/SearchScreen";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
// Material Bread, React Navigation, Formik, Yup, Context API
import Stack from "./Stack";

const theme = {
  ...breadDefTheme,
  primary: {
    main: Colors.pink["500"],
    dark: Colors.blue["600"],
    light: Colors.red["300"],
  },
  colors: {
    ...DefaultTheme.colors,
    // background: Colors.pink["500"],
    // text: Colors.red["300"],
    // primary: Colors.blue["600"],
  },
};

export default function App() {
  return (
    <BreadProvider value={theme}>
      <NavigationContainer theme={theme}>
        <Stack />
      </NavigationContainer>
    </BreadProvider>
  );
}
