import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
} from "react-native";
import Slider from "@react-native-community/slider";
import AntDesign from "@expo/vector-icons/AntDesign";
import Button from "../components/Button";
import BaseLayout from "../layout/base";
import { ringSizes } from "../utilz/sizes";

import image from "../assets/regua.png";
import diamond from "../assets/diamond.png";

export default function RingSizer({ navigation }) {
  const [size, setSize] = useState(1);
  const [left] = useState(45);

  const flatListRef = useRef(null); // Add a ref for FlatList

  useEffect(() => {
    // Scroll to the active item whenever `size` changes
    const index = ringSizes.findIndex((s) => s.size === size);
    if (index !== -1 && flatListRef.current) {
      flatListRef.current.scrollToIndex({ index, animated: true });
    }
  }, [size]);

  const handleSizeSubmit = () => {
    navigation.navigate("Result", { size });
  };

  const cmToPixels = (diameterCm) => {
    const standardPPI = 43;
    const diameterInches = diameterCm / 2.54;
    return diameterInches * standardPPI;
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
      <View style={{ position: "relative", height: 280 }}>
        <Image
          style={[styles.image, { left: left - size * 0.8 }]}
          source={image}
        />

        <Image
          source={diamond}
          style={[styles.circleContainer, { width: diamondSize }]}
        />
      </View>

      <View style={[styles.wrapper]}>
        <Text style={styles.title}>
          O círculo branco deve estar ajustado à parte interna do anel sem
          desaparecer.
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.roundedButton} onPress={decreaseSize}>
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
            thumbTintColor="white"
          />

          <TouchableOpacity style={styles.roundedButton} onPress={increaseSize}>
            <AntDesign name="plus" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={[styles.wrapperList]}>
        <FlatList
          ref={flatListRef} // Attach ref here
          data={ringSizes}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={() => (
            <View style={styles.header}>
              <Text style={styles.headerText}>Tamanho</Text>
              <Text style={styles.headerText}>Comprimento</Text>
              <Text style={styles.headerText}>Diâmetro (mm)</Text>
            </View>
          )}
          renderItem={({ item }) => (
            <View
              style={[styles.item, item.size === size && styles.activeItem]}
            >
              <Text
                style={[
                  styles.itemText,
                  item.size === size && { color: "black" },
                ]}
              >
                {item.size}
              </Text>
              <Text
                style={[
                  styles.itemText,
                  item.size === size && { color: "black" },
                ]}
              >
                {item.comprimento}
              </Text>
              <Text
                style={[
                  styles.itemText,
                  item.size === size && { color: "black" },
                ]}
              >
                {item.diameter}
              </Text>
            </View>
          )}
        />
      </View>

      <Button onPress={handleSizeSubmit}>Confirmar medida</Button>
    </BaseLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    padding: 20,
  },

  image: {
    top: 135,
    position: "absolute",
    height: 50,
    width: "100%",
    left: 0,
  },

  title: {
    fontSize: 14,
    marginTop: 10,
    marginBottom: 14,
    color: "white",
    fontFamily: "Urbanist-Medium",
  },

  slider: {
    flex: 1,
  },

  wrapper: {
    borderColor: "rgba(38, 38, 38, 1)",
    borderWidth: 2,
    borderRadius: 8,
    flex: 1,
    width: "100%",
    padding: 20,
    marginBottom: 20,
  },

  wrapperList: {
    borderColor: "rgba(38, 38, 38, 1)",
    borderWidth: 2,
    borderRadius: 8,
    width: "100%",
    height: 400,
    flex: 2,
    marginBottom: 20,
  },

  circleContainer: {
    resizeMode: "contain",
  },

  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },

  roundedButton: {
    backgroundColor: "white",
    borderRadius: 9999,
    alignItems: "center",
    padding: 4,
  },

  logo: {
    width: "100%",
    height: 100,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    width: "100%",
  },

  headerText: {
    color: "white",
    fontFamily: "Urbanist-Regular",
  },

  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    width: "100%",
  },

  itemText: {
    color: "white",
    marginHorizontal: 10,
    fontFamily: "Urbanist-Regular",
  },

  activeItem: {
    backgroundColor: "white",
    borderRadius: 8,
    color: "black",
  },
});
