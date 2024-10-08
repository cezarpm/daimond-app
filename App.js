import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Entypo from "@expo/vector-icons/Entypo";
import RingSizer from "./pages/RingSizer";
import Welcome from "./pages/Welcome";
import Result from "./pages/Result";
import SplashScreen from "./components/SplashScreen";
import * as SplashScreenRN from "expo-splash-screen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useFonts({
    Inter: require("./assets/Inter_400Regular.ttf"),
    Cinzel: require("./assets/Cinzel_700Bold.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync(Entypo.font);
        await new Promise((resolve) => setTimeout(resolve, 2000));
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
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="RingSizer" component={RingSizer} />
          <Stack.Screen name="Result" component={Result} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
