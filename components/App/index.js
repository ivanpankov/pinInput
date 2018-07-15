import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Caption from "../../containers/Caption";
import PinNumber from "../../containers/PinNumber";
import Messages from "../../containers/Messages";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});

const App = () => (
  <View style={styles.container}>
    <Caption />
    <PinNumber />
    <Messages />
  </View>
);

export default App;
