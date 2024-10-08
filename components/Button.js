import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({ children, onPress, variant = "white" }) => {
  // Define os estilos com base na prop `variant`
  const buttonStyle = [
    styles.button,
    variant === "white" && styles.buttonWhite,
    variant === "black" && styles.buttonBlack,
  ];

  const textStyle = [
    styles.buttonText,
    variant === "white" && styles.buttonTextBlack,
    variant === "black" && styles.buttonTextWhite,
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
    borderRadius: 40,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonBlack: {
    backgroundColor: "#000", // Fundo preto
  },
  buttonWhite: {
    backgroundColor: "#fff", // Fundo branco
    borderWidth: 1,
    borderColor: "#a1a1aa", // Borda preta para contraste no botão branco
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  buttonTextWhite: {
    color: "#fff", // Texto branco
  },
  buttonTextBlack: {
    color: "#000", // Texto preto
  },
});

export default Button;
