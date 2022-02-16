import React from "react";

import { StyleSheet, Text, View } from "react-native";

import { FlatList } from "react-native";

export default function History({ route }) {
  const navigationOptions = {
    title: "History",
  };

  const { history } = route.params;

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 15,
        }}
      >
        History
      </Text>
      <FlatList
        data={history}
        renderItem={({ item }) => <Text>{item.key}</Text>}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
