import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Platform } from "react-native";

//React Native vs React
//  Html tag -> Tag Native
//  className -> style (no css)
//  onClick -> onPress
export default function App() {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(Platform);
    (async () => {
      try {
        const resp = await fetch("https://jsonplaceholder.ir/posts?_limit=10");
        const json = await resp.json();
        setData(json);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Salam!!!!</Text>
      <Text>Count: {counter}</Text>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          title="➕"
          onPress={() => setCounter(counter + 1)}
        />
        <Button
          style={styles.button}
          title="➖"
          onPress={() => setCounter(counter - 1)}
        />
      </View>
      {data.map((x) => (
        <Text key={x.id}>{x.title}</Text>
      ))}
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
  button: {
    fontSize: "4em",
    backgroundColor: "red",
  },
  buttonContainer: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});
