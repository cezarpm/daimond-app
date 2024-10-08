import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import Button from "../components/Button";
import BaseLayout from "../layout/base";
import Correct from "../assets/correct.png";
import Wrong from "../assets/wrong.png";
import Logo from "../assets/logo.png";

import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";

export default function Welcome({ navigation }) {
  return (
    <BaseLayout>
      <View style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <Image source={Logo} style={styles.logo} resizeMode="contain" />

          <Text style={styles.title}>vamos iniciar</Text>

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

          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                alignItems: "center",
                marginTop: 2,
                marginLeft: 10,
                marginRight: 10,
              }}
            >
              <View style={styles.circle} />
              <View style={[styles.line, { height: 45 }]} />
              <View style={styles.circle} />
              <View style={[styles.line, { height: 42 }]} />
              <View style={styles.circle} />
            </View>

            <View style={styles.textWrapper}>
              <View>
                <Text style={styles.text}>
                  Posicione o diamante sobre o anel na próxima tela e mova o
                  controle para ajustar o tamanho.
                </Text>
              </View>

              <Text style={styles.text}>
                Verifique se o diamante está ajustado corretamente ao tamanho do
                anel.
              </Text>

              <Text style={styles.text}>
                Tente manter o celular na altura dos olhos, como mostrado na
                ilustração, e feche um dos olhos para uma melhor visão.
              </Text>
            </View>
          </View>
        </View>

        <View style={{ maxWidth: 300 }}>
          <Button onPress={() => navigation.navigate("RingSizer")}>
            Ok entendi, proseguir
          </Button>
        </View>
      </View>
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

  wrongWrapper: {
    flex: 1,
    position: "relative",
    alignItems: "center",
  },

  textWrapper: {
    alignSelf: "stretch",
    marginBottom: 40,
  },

  text: {
    textAlign: "left",
    color: "white",
    fontFamily: "Inter",
    fontWeight: "400",
    marginBottom: 40,
  },

  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    width: "100%",
    fontSize: 20,
    marginTop: 10,
    fontFamily: "Cinzel",
    color: "white",
    textTransform: "uppercase",
  },

  titleText: {
    marginBottom: 20,
    textAlign: "center",
  },

  logo: {
    width: 200,
    height: 120,
    justifyContent: "center",
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
