import React from "react";
import { StyleSheet, Text } from "react-native";

const Caption = ({pinNumber}) => {
  return (
    <Text style={styles.caption}>
      { pinNumber.value ? 'Add PIN number' : 'Set new PIN number' }
    </Text>
  );
};

export default Caption;

const styles = StyleSheet.create({
  caption: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
