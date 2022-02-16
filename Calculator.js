import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import History from "./History";

export default function Calculator({ navigation }) {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);
  const [history, sethistory] = useState([]);

  const addNumber = () => {
    const total = number1 + number2;
    setResult(total);
    sethistory([...history, { key: `${number1} + ${number2} = ${total}` }]);
  };

  const minusNumber = () => {
    const total = number1 - number2;
    setResult(total);
    sethistory([...history, { key: `${number1} + ${number2} = ${total}` }]);
  };

  return (
    <View style={styles.container}>
      <Text>Results: {result}</Text>
      <TextInput
        style={{
          margin: 10,
          height: 40,
          borderColor: "pink",
          width: 200,
          borderWidth: 2,
        }}
        keyboardType="numeric"
        onChangeText={(a) => {
          setNumber1(Number.parseInt(a)); // Use parsed aalue from onChangeText
        }}
      />

      <TextInput
        style={{
          margin: 10,
          height: 40,
          borderColor: "orange",
          width: 200,
          borderWidth: 2,
        }}
        keyboardType="numeric"
        onChangeText={(a) => {
          setNumber2(Number.parseInt(a)); // Use parsed aalue from onChangeText
        }}
      />

      <View style={styles.fixToText}>
        <Button title={"+"} onPress={addNumber} />
        <Button title={"-"} onPress={minusNumber} />
        <Button
          title={"History"}
          onPress={() => navigation.navigate("History", { history: history })}
        />
      </View>

      <StatusBar style="auto" />
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
  fixToText: {
    margin: 25,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
