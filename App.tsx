import 'react-native-gesture-handler';
import React, { ReactElement, useCallback, useEffect, useState } from "react";
import { ThemeProvider } from "@shopify/restyle";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { theme, Text } from "./src/components"
import { createStackNavigator } from '@react-navigation/stack';
import { AuthenticationNavigator } from './src/Authentication';
import { HomeNavigator } from './src/Home';
import { InitialState, NavigationContainer } from "@react-navigation/native";
import  AsyncStorage from '@react-native-community/async-storage';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { AppStackRoutes } from './src/components/Navigations';


const NAVIGATION_STATE_KEY = `NAVIGATION_STATE_KEY-1`;

const AppStack=createStackNavigator<AppStackRoutes>();

function App() {
  const [isNavigationReady, setIsNavigationReady] = useState(!__DEV__);
  const [initialState, setInitialState] = useState<InitialState | undefined>();

  React.useEffect(() => {
    const restoreState = async () => {
      try {
        const savedStateString = await AsyncStorage.getItem(
          NAVIGATION_STATE_KEY
        );
        const state = savedStateString
          ? JSON.parse(savedStateString)
          : undefined;
        setInitialState(state);
      } finally {
        setIsNavigationReady(true);
      }
    };

    if (!isNavigationReady) {
      restoreState();
    }
  }, [isNavigationReady]);
  const onStateChange = useCallback(
    (state) =>
      AsyncStorage.setItem(NAVIGATION_STATE_KEY, JSON.stringify(state)),
    []
  );
  if (!isNavigationReady) {
    return <Text>Cargando...</Text>;
  }
  return (
    <ThemeProvider {...{ theme }}>
      <PaperProvider  {...{ theme }}>
      <SafeAreaProvider>
        <NavigationContainer {...{ onStateChange, initialState }}>
        <AppStack.Navigator headerMode="none">
          <AppStack.Screen name="Authentication" component={AuthenticationNavigator}/>
          <AppStack.Screen name="Home" component={HomeNavigator}/>
        </AppStack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
      </PaperProvider>
    </ThemeProvider>
  )
}
export default App;