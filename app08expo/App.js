import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

//React Native vs React
//  Html tag -> Tag Native
//  className -> style (no css)
//  onClick -> onPress
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Salam!!!!</Text>
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
