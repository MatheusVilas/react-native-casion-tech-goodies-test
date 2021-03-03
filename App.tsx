import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';
import {
  PTSerif_700Bold_Italic,
  PTSerif_400Regular,
} from '@expo-google-fonts/pt-serif';

import store from './src/store';
import Routes from './src/routes';
import colors from './src/constants/colors';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    PTSerif_700Bold_Italic,
    PTSerif_400Regular,
  });

  if (!fontsLoaded) return <AppLoading />;

  const theme = DefaultTheme;
  theme.colors.background = colors.white;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <Provider store={store}>
        <NavigationContainer theme={theme}>
          <Routes />
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
}
