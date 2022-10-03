import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  const [name, setName] = useState("Shaun");
  const [age, setAge] = useState(30);

  const clickHandler = () => {
    setPerson({
      name: "luigi",
      age: 45,
    });
  };

  return (
    <View style={styles.container}>
      <Text>Enter Name:</Text>
      <TextInput
        placeholder="e.g. John Doe"
        onChangeText={(val) => setName(val)}
        style={styles.input}
      />
      <TextInput
      keyboardType="numeric"
        placeholder="e.g. 99"
        onChangeText={(val) => setAge(val)}
        style={styles.input}
      />
      <Text>
        Name: {name}, age: {age}
      </Text>
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
  input: {
    borderWidth: 1,
    padding: 8,
    borderColor: "grey",
    borderRadius: 5,
    margin: 10,
    width: 200,
  },
});
