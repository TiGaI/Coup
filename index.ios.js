/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var Orientation = require('react-native-orientation')
var BoardView = require('./boardview.js');
var CommentsView = require('./commentsview.js');

export default class Coup extends Component {

  render() {
    return (
      <View style={styles.container}>

          <BoardView/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#644B62',
  },
});

AppRegistry.registerComponent('Coup', () => Coup);
