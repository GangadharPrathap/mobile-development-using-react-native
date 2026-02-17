import react from "react";
import { View, Text, Button, TouchableOpacity, Image, StyleSheet } from "react-native";
import MyImage from "./assets/favicon.png"
import { StatusBar } from "react-native";
import Component from "./component.jsx";
import { SafeAreaProvider } from "react-native-safe-area-context";
import PasswordField from "./password.jsx";
const App = () => {
  return (
    <>
      <SafeAreaProvider>
        {/* <Component /> */}
        <PasswordField/>
      </SafeAreaProvider>
    </>
  )
}

export default App;