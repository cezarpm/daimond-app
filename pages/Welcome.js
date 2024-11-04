import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import Button from "../components/Button";
import BaseLayout from "../layout/base";
import Correct from "../assets/Right.gif";
import Wrong from "../assets/Wrong.gif";
import Logo from "../assets/logo.png";

import AntDesign from "@expo/vector-icons/AntDesign";

export default function Welcome({ navigation }) {
  return (
    <BaseLayout>
      <Image source={Logo} style={styles.logo} resizeMode="contain" />

      <View style={{ flex: 1, justifyContent: "center" }}>
        <View style={{ alignItems: "center" }}>
          <View style={styles.imageWrapper}>
            <View style={styles.wrongWrapper}>
              <Image style={styles.image} source={Wrong} />
              <View style={styles.checkIcon}>
                <AntDesign name="close" size={24} color="red" />
              </View>
            </View>

            <View style={styles.divider} />

            <View style={styles.correctWrapper}>
              <Image style={styles.image} source={Correct} />
              <View style={styles.checkIcon}>
                <AntDesign name="check" size={24} color="green" />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.wrapper}>
          <View
            style={{
              alignItems: "center",
              paddingTop: 5,
            }}
          >
            <View style={styles.circle} />

            <View style={[styles.line, { height: 32 }]} />

            <View style={styles.circle} />

            <View style={[styles.line, { height: 32 }]} />

            <View style={styles.circle} />
          </View>

          <View style={{ gap: 32, flex: 1 }}>
            <Text style={styles.text}>
              Coloque o celular sobre uma superfície plana e o anel sobre a
              tela.
            </Text>

            <Text style={styles.text}>
              Posicione o anel sobre o diamante e mova o controle para ajustar o
              tamanho.
            </Text>

            <Text style={styles.text}>
              O diamante deve encaixar corretamente na parte interna do anel.
            </Text>
          </View>
        </View>
      </View>

      <Button onPress={() => navigation.navigate("RingSizer")}>
        Vamos começar?
      </Button>
    </BaseLayout>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    marginBottom: 10,
  },

  imageWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
    marginVertical: 40,
    padding: 10,
  },

  correctWrapper: {
    flex: 1,
    position: "relative",
    alignItems: "center",
  },

  logo: {
    width: "100%",
    height: 15,
    marginTop: 40,
    marginVertical: 30,
  },

  wrapper: {
    borderColor: "rgba(38, 38, 38, 1)",
    borderWidth: 2,
    borderRadius: 8,
    flexDirection: "row",
    width: "100%",
    marginVertical: 20,
    padding: 16,
    paddingTop: 30,
    gap: 10,
  },

  wrongWrapper: {
    flex: 1,
    position: "relative",
    alignItems: "center",
  },

  text: {
    color: "white",
    fontFamily: "Urbanist-Regular",
  },

  checkIcon: {
    position: "absolute",
    right: -10,
    width: 30,
    height: 30,
    borderRadius: 99999,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },

  divider: {
    width: 1,
    height: "100%",
    backgroundColor: "gray",
  },

  circle: {
    width: 15,
    height: 15,
    backgroundColor: "white",
    borderRadius: 999,
  },

  line: {
    width: 2,
    backgroundColor: "white",
    marginVertical: 10,
  },
});
