import React from "react";
import { StyleSheet, Text } from "react-native";
import { SHOW_MESSAGE_TIMEOUT } from '../../constants/messages';

const SuccessMessage = () => (
  <Text style={styles.success}>New PIN number has been saved.</Text>
);

const NotValidMessage = () => (
  <Text style={styles.notValid}>PIN is not valid.</Text>
);

const NotMatchMessage = () => (
  <Text style={styles.notMatch}>PIN does not match.</Text>
);

const MatchMessage = () => (
  <Text style={styles.success}>BOOM! Correct PIN.</Text>
);

let timeout;

const Messages = ({ messages, clearMessages }) => {
  clearTimeout(timeout);
  timeout = setTimeout(() => { 
    clearMessages();
  }, SHOW_MESSAGE_TIMEOUT);

  return [
    messages.PIN_SAVE_SUCCESS ? <SuccessMessage key="success" /> : null,
    messages.PIN_IS_NOT_VALID ? <NotValidMessage key="not-valid" /> : null,
    messages.PIN_DOES_NOT_MATCH ? <NotMatchMessage key="not-match" /> : null,
    messages.PIN_MATCHES ? <MatchMessage key="not-match" /> : null
  ];
};

export default Messages;

const styles = StyleSheet.create({
  success: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "green"
  },
  notValid: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "red"
  },
  notMatch: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "red"
  }
});
