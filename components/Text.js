import React from "react";
import { Text as RNText, StyleSheet } from "react-native";

const Text = ({ children, type = "normal" }) => {
  return (
    <RNText
      style={[styles.base, type === "title" ? styles.title : styles.normal]}
    >
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  base: {
    color: "white",
    fontWeight: "bold",
    marginBottom: 10,
  },
  normal: {
    fontSize: 16,
    fontFamily: "Inter",
  },
  title: {
    fontSize: 22,
    fontFamily: "Cinzel",
    textAlign: "center",
  },
});

export default Text;
