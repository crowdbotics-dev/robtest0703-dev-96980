import React from "react";
import { StyleSheet, ScrollView, SafeAreaView, View, Text, Image } from "react-native";

const Untitled2 = () => {
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <View style={styles.container}>
          <Image source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} style={styles.image} />
          <Text style={styles.name}>Lamissa</Text>
          <Text style={styles.description}>
            Lamissa is an up and coming coder. She is passionate about learning
            new technologies and building innovative applications. With her
            strong problem-solving skills and dedication, she is determined to
            make a mark in the tech industry.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10
  },
  description: {
    fontSize: 16,
    textAlign: "center"
  }
});
export default Untitled2;