import React, { Component } from "react";
import { StyleSheet, TextInput } from "react-native";
import { PIN_SAVE_SUCCESS } from "../../constants/messages";
import { PIN_LENGTH } from "../../constants/pinNumber"; 

const testDigit = RegExp(/^\d*[0-9]\d*$/);
const testPin = RegExp(/^(\d{4})$/);

export default class PinNumber extends Component {
  state = {
    text: "",
    valid: false
  };

  onTextChange = text => {
    const _text = text.substring(0, PIN_LENGTH);
    if (testDigit.test(_text) || _text === '') {
      this.setState({
        text: _text,
        valid: testPin.test(_text)
      });
    }
  };

  onEndEditing = () => {
    if (this.state.valid) {
      // if PIN exists check if matches.
      // If PIN does not exist save in store.
      if (!this.props.pinNumber.value) {
        this.props.savePinNumber({ value: this.state.text });
        this.props.toggleMessages({ PIN_SAVE_SUCCESS: true });
        this.setState({
          text: "",
          valid: false
        });
      } else {
        if (this.props.pinNumber.value === this.state.text) {
          this.props.toggleMessages({ PIN_MATCHES: true });
        } else {
          this.props.toggleMessages({ PIN_DOES_NOT_MATCH: true });
        }
      }
    } else {
      this.props.toggleMessages({ PIN_IS_NOT_VALID: true });
    }
  };

  render() {
    return (
      <TextInput
        style={styles.pinNumber}
        onChangeText={this.onTextChange}
        value={this.state.text}
        placeholder="1234"
        onEndEditing={this.onEndEditing}
      />
    );
  }
}

const styles = StyleSheet.create({
  pinNumber: {
    borderColor: "gray",
    borderWidth: 1,
    width: 60,
    fontSize: 20
  }
});
