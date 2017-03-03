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
        <View style={{flex:.5}}>
          <BoardView/>
        </View>
        <View style={{flex:.5}}>
          <CommentsView/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#644B62',
  },
});

AppRegistry.registerComponent('Coup', () => Coup);
