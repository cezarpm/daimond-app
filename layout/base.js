import React from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";

const BaseLayout = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(20, 20, 20, 1)",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 32,
  },
});

export default BaseLayout;
