import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    { name: "Shaun", key: "1" },
    { name: "Yoshi", key: "2" },
    { name: "Mario", key: "3" },
    { name: "Luigi", key: "4" },
    { name: "Peach", key: "5" },
    { name: "Toad", key: "6" },
    { name: "Parker", key: "7" },
    { name: "Ryan", key: "8" },
    { name: "Jim", key: "9" },
    { name: "Jack", key: "10" },
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {people.map((item) => {
          return (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    padding: 8,
    borderColor: "grey",
    borderRadius: 5,
    margin: 10,
    width: 200,
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
  },
});
