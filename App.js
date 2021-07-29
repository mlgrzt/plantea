import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components/native";
import firebase from "firebase";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  useFonts as useNoto,
  NotoSansJP_400Regular,
} from "@expo-google-fonts/noto-sans-jp";
import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";

import { PlantsContextProvider } from "./src/services/plants/plants.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { AuthenticationContextProvider } from "./src/services/authentitaction/authentication.context";

const firebaseConfig = {
  apiKey: "AIzaSyCi7zEpAdKBRyP7Qam2-GinV2xjr2XzLFo",
  authDomain: "plantea-5b328.firebaseapp.com",
  projectId: "plantea-5b328",
  storageBucket: "plantea-5b328.appspot.com",
  messagingSenderId: "892821343943",
  appId: "1:892821343943:web:5840b261e8c0cb5c5e38e2",
  measurementId: "G-10GW9HG9FY",
};

// Initialize Firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      firebase
        .auth()
        .signInWithEmailAndPassword("mlgrzt93@gmail.com", "test123")
        .then((user) => {
          setIsAuthenticated(true);
        })
        .catch((e) => {
          console.log(e);
        });
    }, 2000);
  }, []);
  const [notoLoaded] = useNoto({
    NotoSansJP_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });
  if (!notoLoaded || !latoLoaded) {
    return null;
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <PlantsContextProvider>
              <Navigation />
            </PlantsContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
