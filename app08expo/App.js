import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

//React Native vs React
//  Html tag -> Tag Native
//  className -> style (no css)
//  onClick -> onPress
export default function App() {
  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.container}>
      <Text>Salam!!!!</Text>
      <Text>Count: {counter}</Text>
      <Button title="➕" onPress={() => setCounter(counter + 1)} />
      <Button title="➖" onPress={() => setCounter(counter - 1)} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#bbb",
    alignItems: "center",
    justifyContent: "center",
  },
});
