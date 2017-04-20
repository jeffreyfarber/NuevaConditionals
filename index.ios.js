import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  View,
  TextInput,
  Text,
} from 'react-native';
import LogDisplay from './logDisplay.js';

export default class NuevaConditionals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text1: '',
      text2: '',
    };
  }

  logMessage(message) {
    this.logdisplay.addMessage(message);
  }

  getText2Value() {
    const value = this.state.text2;
    this.logMessage('.. getText2Value called');
    return value;
  }

  handleButtonPress() {
    const text1Value = this.state.text1;
    if (text1Value === 'password') {
      this.logMessage('Password is correct!');
    }
    else if (text1Value === 'mobileBlock4' && this.getText2Value() === 'nueva') {
      this.logMessage('Wow that\'s a great combination!');
    }
    else if (this.getText2Value() === 'mobileBlock4' && text1Value === 'nueva') {
      this.logMessage('Extra special combination!');
    }
    else {
      this.logMessage('No dice, try again.');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <LogDisplay
          ref={(d) => {
            this.logdisplay = d;
          }}
        />
        <View style={styles.horizontalRow}>
          <TextInput
            value={this.state.text1}
            onChangeText={val => this.setState({text1: val})}
            style={[styles.horizontalItem, styles.textInput]}
            placeholder="Text 1"
            autoCapitalize="none"
          />
          <TextInput
            value={this.state.text2}
            onChangeText={val => this.setState({text2: val})}
            style={[styles.horizontalItem, styles.textInput]}
            placeholder="Text 2"
            autoCapitalize="none"
          />
        </View>
        <View style={styles.horizontalRow}>
          <Button
            style={styles.horizontalItem}
            title="Run!"
            onPress={this.handleButtonPress.bind(this)}
          />
        </View>
        <View style={styles.horizontalRow}>
          {this.state.text2 === 'extraSecretPassword' && <Text>Extra special secret unlocked!</Text>}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  horizontalRow: {
    flex: 1,
    flexDirection: 'row',
  },
  horizontalItem: {
    flex: 1,
  },
  textInput: {
    textAlign: 'center',
  },
});

AppRegistry.registerComponent('NuevaConditionals', () => NuevaConditionals);
