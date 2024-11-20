import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RingSizer from "./pages/RingSizer";
import Welcome from "./pages/Welcome";
import Result from "./pages/Result";
import SplashScreen from "./components/SplashScreen";
import * as SplashScreenRN from "expo-splash-screen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useFonts({
    "Urbanist-Regular": require("./assets/Urbanist-Regular.ttf"),
    "Urbanist-Bold": require("./assets/Urbanist-Bold.ttf"),
    "Urbanist-Medium": require("./assets/Urbanist-Medium.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    SplashScreenRN.hideAsync();
    prepare();
  }, []);

  if (!appIsReady) {
    return <SplashScreen />;
  }

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{ headerShown: false }} // Oculta o cabeçalho por padrão
        >
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen
            name="RingSizer"
            component={RingSizer}
            options={({ navigation }) => ({
              headerShown: true,
              title: "Medir seu anel",
              headerStyle: {
                backgroundColor: "rgba(20, 20, 20, 1)",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            })}
          />
          <Stack.Screen
            name="Result"
            component={Result}
            options={({ navigation }) => ({
              headerShown: true,
              title: "Resultado",
              headerStyle: {
                backgroundColor: "rgba(20, 20, 20, 1)",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
