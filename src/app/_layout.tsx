import * as NavigationBar from "expo-navigation-bar";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { Platform, StatusBar } from "react-native";
import './globals.css';


export default function RootLayout() {


  useEffect(() => {
    async function setupNavigationBar() {
      if (Platform.OS !== "android") return;

      try {
        await NavigationBar.setVisibilityAsync("hidden");
      } catch (error) {
        console.error("Navigation bar error:", error);
      }
    }

    setupNavigationBar();
  }, []);

  return (

    <>

      <StatusBar hidden={true} />

      <Stack>

        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="movies/[id]"
          options={{ headerShown: false }}
        />

      </Stack>

    </>


  );
}
