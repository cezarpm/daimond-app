import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import Slider from "@react-native-community/slider";
import AntDesign from "@expo/vector-icons/AntDesign";
import Button from "../components/Button";
import BaseLayout from "../layout/base";
import { ringSizes } from "../utilz/sizes";

import image from "../assets/regua.png";
import diamond from "../assets/diamond.png";
import Logo from "../assets/logo.png";

export default function RingSizer({ navigation }) {
  const [size, setSize] = useState(1);
  const [left] = useState(45);

  const handleSizeSubmit = () => {
    navigation.navigate("Result", { size });
  };

  const cmToPixels = (diameterCm) => {
    const standardPPI = 43; // Pixels per inch
    const diameterInches = diameterCm / 2.54; // Convert cm to inches
    return diameterInches * standardPPI; // Convert to pixels
  };

  const selectedSize = ringSizes.find((s) => s.size === size);
  const diamondSize = cmToPixels(selectedSize.diameter);

  const increaseSize = () => {
    if (size < 45) {
      setSize(size + 1);
    }
  };

  const decreaseSize = () => {
    if (size > 1) {
      setSize(size - 1);
    }
  };

  return (
    <BaseLayout>
      <View style={styles.container}>
        <Image source={Logo} style={styles.logo} resizeMode="contain" />

        <Text style={styles.title}>
          O diamante deve ficar centralizado no anel
        </Text>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View style={{ position: "relative" }}>
            <Image
              style={[styles.image, { left: left - size * 0.8 }]}
              source={image}
            />

            <Image
              source={diamond}
              style={[styles.circleContainer, { width: diamondSize }]}
            />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.roundedButton}
              onPress={decreaseSize}
            >
              <AntDesign name="minus" size={20} color="black" />
            </TouchableOpacity>

            <Slider
              style={styles.slider}
              minimumValue={1}
              maximumValue={45}
              step={1}
              value={size}
              onValueChange={(value) => setSize(value)}
              minimumTrackTintColor="white"
              maximumTrackTintColor="#d3d3d3"
              thumbTintColor="white" // Define a cor do botão do slider
            />

            <TouchableOpacity
              style={styles.roundedButton}
              onPress={increaseSize}
            >
              <AntDesign name="plus" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ maxWidth: 400 }}>
          <Button onPress={handleSizeSubmit}>Ver tamanho</Button>
        </View>
      </View>
    </BaseLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    margin: 40,
  },

  image: {
    top: 135,
    position: "absolute",
    height: 50,
    width: "100%",
    left: 0,
  },

  title: {
    fontSize: 18,
    marginTop: 10,
    textAlign: "center",
    marginBottom: 14,
    fontFamily: "Cinzel",
    color: "white",
    textTransform: "uppercase",
  },

  slider: {
    flex: 1,
    height: 80,
  },

  circleContainer: {
    resizeMode: "contain",
  },

  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    marginVertical: 30,
  },

  roundedButton: {
    backgroundColor: "white",
    borderRadius: 9999,
    alignItems: "center",
    padding: 8,
  },

  logo: {
    width: "100%",
    height: 100,
  },
});
