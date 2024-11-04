import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({ children, onPress, variant = "white", outline = false }) => {
  const buttonStyle = [
    styles.button,
    variant === "white" &&
      (outline ? styles.buttonOutlined : styles.buttonSolid),
  ];

  const textStyle = [
    styles.buttonText,
    variant === "white" &&
      (outline ? styles.buttonTextBlack : styles.buttonTextWhite),
  ];

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    borderRadius: 12,
    paddingVertical: 18,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonSolid: {
    backgroundColor: "#fff", // Fundo branco
  },
  buttonOutlined: {
    backgroundColor: "transparent", // Fundo transparente para o estilo outlined
    borderWidth: 1,
    borderColor: "#fff", // Borda branca
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Urbanist-Medium",
  },
  buttonTextWhite: {
    color: "#000", // Texto preto para o botão sólido
  },
  buttonTextBlack: {
    color: "#fff", // Texto branco para o botão outlined
  },
});

export default Button;
