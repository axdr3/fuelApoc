import React, { useState } from "react";

import { View, Text, StyleSheet } from "react-native";
import { Searchbar } from "material-bread";
import mockApi from "../api/mockApi";

const SearchScreen = (props) => {
  const [search, setSearch] = useState("");
  const [ŕesults, setResults] = useState([]);

  const searchApi = async () => {
    // const response = {};
    try {
      const response = await mockApi.get("/cidade", {
        params: { search: search },
      });
      console.log(response.data);
      setResults(response.data);
    } catch (error) {
      console.log(error);
      return;
    }
    // if (response.status === 200) {
    //   const response = await mockApi.get(`/cidade/${response.data.id}/postos`, {
    //     params: {},
    //   });
    // }
  };
  return (
    <View>
      <Searchbar
        // color={"#FFE012"}
        label={"Searchbar"}
        placeholder={"Procure seu destino aqui."}
        navigationIcon={"search"}
        value={search}
        onCloseIcon={() => setSearch("")}
        // textStyle={styles.textStyle}
        style={styles.searchInput}
        onChangeText={(search) => setSearch(search)}
        onNavigation={searchApi}
        // searchIconProps={{ style: styles.textStyle }}
      />
      <Text>SearchScreen</Text>
      <Text>We have found results</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginVertical: 10,
    color: "black",
  },
  searchInput: {
    color: "black",
  },
});

export default SearchScreen;
