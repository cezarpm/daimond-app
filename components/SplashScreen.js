import React from "react";
import { View, Text, Image, StyleSheet, ActivityIndicator } from "react-native";
import Logo from "../assets/logo.png";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} resizeMode="contain" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#141414",
  },
  logo: {
    width: "100%",
    height: 34,
    marginBottom: 20,
  },
  loadingContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 50,
    gap: 10,
  },
  loadingText: {
    color: "white",
    fontSize: 18,
    marginLeft: 10,
    fontFamily: "Cinzel",
  },
});

export default SplashScreen;
