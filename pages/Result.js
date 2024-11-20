import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { StyleSheet } from "react-native";
import BaseLayout from "../layout/base";
import { useRoute } from "@react-navigation/native";
import image from "../assets/Union.png";

import FontAwesome from "@expo/vector-icons/FontAwesome";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Entypo from "@expo/vector-icons/Entypo";
import { LinearGradient } from "expo-linear-gradient";

import { Linking } from "react-native";

import { ringSizes } from "../utilz/sizes";

export default function Result({ navigation }) {
  const route = useRoute();
  const { size } = route.params;

  const redirectToWhatsApp = () => {
    const phoneNumber = "+5548991980888";
    const message = `Olá, gostaria de saber mais sobre o anel de tamanho ${size}.`;

    const url = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;

    Linking.openURL(url);
  };

  return (
    <BaseLayout>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image source={image} />

        <Text style={styles.title}>Medida tirada com sucesso!</Text>

        <Text style={styles.subtitle}>
          Agora entre em contato conosco por Whatsapp para fazermos um
          orçamento.
        </Text>
      </View>

      <View style={styles.wrapper}>
        <Text style={styles.resultText}>O tamanho ideal é: {size}</Text>

        <LinearGradient
          colors={["#1F1F1F", "rgba(31, 31, 31, 0)"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.badge}
        >
          <MaterialCommunityIcons
            name="diameter-outline"
            size={15}
            color="white"
          />
          <Text style={styles.badgeText}>
            Comprimento (cm): {ringSizes[size]?.comprimento}
          </Text>
        </LinearGradient>

        <LinearGradient
          colors={["#1F1F1F", "rgba(31, 31, 31, 0)"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.badge}
        >
          <Entypo name="circle" size={15} color="white" />
          <Text style={styles.badgeText}>
            Diâmetro (mm): {ringSizes[size]?.diameter}
          </Text>
        </LinearGradient>
      </View>

      <TouchableOpacity
        onPress={redirectToWhatsApp}
        style={styles.whatsappButton}
      >
        <FontAwesome name="whatsapp" size={24} color="white" />
        <Text style={styles.whatsappText}>Fale conosco agora</Text>
      </TouchableOpacity>
    </BaseLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
  },

  title: {
    fontSize: 22,
    color: "white",
    textAlign: "center",
  },

  subtitle: {
    fontSize: 14,
    color: "white",
    textAlign: "center",
    marginTop: 10,
    fontFamily: "Urbanist-Regular",
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
    fontSize: 16,
    color: "white",
    marginVertical: 10,
    fontFamily: "Urbanist-Medium",
  },

  badge: {
    flexDirection: "row",
    alignItems: "center",
    borderLeftWidth: 1,
    borderLeftColor: "white",
    marginVertical: 10,
    padding: 10,
  },

  absoluteBalls: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },

  badgeText: {
    fontSize: 16,
    color: "white",
    marginLeft: 5,
    fontFamily: "Urbanist-Regular",
  },

  whatsappButton: {
    backgroundColor: "#25d366",
    width: "100%",
    padding: 14,
    borderRadius: 10,
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

  wrapper: {
    borderColor: "rgba(38, 38, 38, 1)",
    borderWidth: 2,
    borderRadius: 8,
    width: "100%",
    padding: 20,
    marginBottom: 20,

    // Shadow for iOS
    shadowColor: "rgba(25, 25, 25, 1)",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 6,
    // Shadow for Android
    elevation: 6,
  },
});
