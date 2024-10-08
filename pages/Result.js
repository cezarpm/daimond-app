import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StyleSheet, Image } from "react-native";
import BaseLayout from "../layout/base";
import { useRoute } from "@react-navigation/native"; // Importando o hook useRoute

import Ring from "../assets/DiamondRing.png";
import LogoBlack from "../assets/logo-black.png";
import Button from "../components/Button";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Linking } from "react-native";

export default function Result({ navigation }) {
  const route = useRoute();
  const { size } = route.params;

  const redirectToWhatsApp = () => {
    const phoneNumber = "+554891370777";
    const message = `Olá, gostaria de saber mais sobre o anel de tamanho ${size}.`;

    const url = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;

    Linking.openURL(url);
  };

  return (
    <BaseLayout>
      <View style={styles.container}>
        <View></View>

        <View style={styles.imageWrapper}>
          <Image source={LogoBlack} style={styles.logo} resizeMode="contain" />

          <View style={styles.wrapperImage}>
            <Image style={styles.handImage} source={Ring} />
          </View>

          <View style={styles.resultsWrapper}>
            <View>
              <Text style={styles.title}>O tamanho ideal é</Text>

              <View style={styles.results}>
                <View style={styles.result}>
                  <Text style={styles.resultText}>{size}</Text>
                </View>

                <View style={styles.result}>
                  <Text style={styles.resultText}>
                    {(size * 1.05).toFixed(2)}
                    {"\n"}mm
                  </Text>
                </View>

                <View style={styles.result}>
                  <Text style={styles.resultText}>
                    {(size * 0.35).toFixed(2)}
                    {"\n"}cm
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.buttonsWrapper}>
          <TouchableOpacity
            onPress={redirectToWhatsApp}
            style={styles.whatsappButton}
          >
            <FontAwesome name="whatsapp" size={24} color="white" />
            <Text style={styles.whatsappText}>Fazer orçamento</Text>
          </TouchableOpacity>

          <Button onPress={() => navigation.goBack()}>Voltar</Button>
        </View>
      </View>
    </BaseLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
  },

  imageWrapper: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "black",
    textTransform: "uppercase",
  },

  handImage: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },

  wrapperImage: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    borderBottomWidth: 2,
    borderBottomColor: "black",
    borderRadius: 20,
    position: "relative",
  },

  resultsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
  },

  results: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },

  result: {
    height: 60,
    width: 60,
    backgroundColor: "black",
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
  },

  resultText: {
    fontSize: 14,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },

  absoluteBalls: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },

  ball: {
    height: 120,
    width: 120,
    backgroundColor: "black",
    borderRadius: 99999,
  },

  whatsappButton: {
    backgroundColor: "#25d366",
    width: "100%",
    padding: 14,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
  },

  whatsappText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },

  buttonsWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 20,
    gap: 8,
  },

  logo: {
    width: "100%",
    height: 100,
  },
});
