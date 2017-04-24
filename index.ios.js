import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import Interface from './interface.js';

export default class NuevaConditionals extends Component {
  render() {
    return (
      <Interface />
    );
  }
}

AppRegistry.registerComponent('NuevaConditionals', () => NuevaConditionals);
