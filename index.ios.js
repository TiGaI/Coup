<<<<<<< HEAD
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


window.navigator.userAgent = 'ReactNative';

import React, { Component } from 'react';

import SocketIOClient from 'socket.io-client';
import Prompt from 'react-native-prompt';


// var express = require('express');
// var http = require('http')
// var app = express();
// var server = http.Server(app);
// var websocket = socketio(server);
//
//
// server.listen(8081, () => console.log('listening on *:3000'));


=======
import React, { Component } from 'react';
import Prompt from 'react-native-prompt';
>>>>>>> master
import {
  AppRegistry,
  StyleSheet,
  Text,
<<<<<<< HEAD
  View
} from 'react-native';

=======
  View,
  TextInput,
  TouchableOpacity,
  NavigatorIOS,
  ListView,
  AsyncStorage,
  Image
} from 'react-native';

window.navigator.userAgent = "react-native";
import SocketIOClient from 'socket.io-client';

var Orientation = require('react-native-orientation')

export default class Coup extends Component {
  constructor(props) {
    super(props);
    this.socket = SocketIOClient('http://localhost:8081');
  }
  render() {
    return (  
      <NavigatorIOS
        initialRoute={{
          component: App,
          title: ""
        }}
        style={{flex: 1}}
      />
    );
  }
}
>>>>>>> master


// TEMPLATE componentDidMount: function() {
//   // this.state.socket.on('connect', function() {
//   //   console.log('connected');
//   //   this.setState({
//   //     username: this.state.socket.username
//   //   });
//   //   this.state.socket.emit('username', this.state.socket.username)
//   // }.bind(this));
//   //
//   // this.state.socket.on('errorMessage', function(message) {
//   //   alert(message);
//   // }.bind(this));
// },




var App = React.createClass ({
  getInitialState: function(){
    return {
<<<<<<< HEAD
      socket:
      createCode: '',
      joinCode: '',
      player: 0,
      navigator: props.navigator
    }
  },
  signIn(username, event) {
    this.setState({
      promptVisible: false
    })
    this.state.socket.on('connect', function() {
      console.log("You are connected")
      this.setState({
        username: username
      });
      this.state.socket.emit('username', this.state.socket.username)

      this.props.navigator.push({
          component: Game,
          title: "Game Board"
        })

=======
      roomName: "Praise the jiang",
      username: '',
      socket: SocketIOClient('http://localhost:8081')
    }
  },
   signIn(username, event) {
     var self = this;
    this.setState({
      promptVisible: false
    })
    this.state.socket.emit('connect', function () {
        this.setState({
          username: username
        });
        this.state.socket.emit('username', this.state.username);
>>>>>>> master
    }.bind(this));

    this.props.navigator.push({
        component: BoardView,
        title: "Game Board"
    })
  },
  render: function() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 20 }} onPress={() => this.setState({ promptVisible: true })}>
            Join the Room
          </Text>
        <Prompt
            title="What is your game name"
            placeholder="Start typing"
            defaultValue=""
            visible={ this.state.promptVisible }
            onCancel={ () => this.setState({
              promptVisible: false
            })}
            onSubmit={ (value) => this.signIn(value)}
          />
      </View>
      );
  }
})



<<<<<<< HEAD
export default class Coup extends Component {
  constructor(props){
    super(props);
    this.socket = SocketIOClient('http://localhost:8081');
  }


=======
//not completed, placeholder right now
var UserCard = React.createClass({
  getInitialState: function() {
    return {
      User: []
    }
  },
  signIn() {
     var self = this;
  },
  render: function() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      </View>
      );
  }
});


var {width, height} = require('Dimensions').get('window');
var SIZE = 4; // four-by-four grid
var CELL_SIZE = Math.floor(width * .15); // 20% of the screen width
var CELL_PADDING = Math.floor(CELL_SIZE * .05); // 5% of the cell size
var BORDER_RADIUS = CELL_PADDING * 2;
var TILE_SIZE = CELL_SIZE - CELL_PADDING * 2;
var LETTER_SIZE = Math.floor(TILE_SIZE * .75);

var BoardView = React.createClass({
>>>>>>> master
  render() {
    return <View style={styles.container}>
            <View style={styles.bcontainer}>
             {this.renderTiles()}
             </View>
           </View>
  },
  renderTiles(){
    return (
<<<<<<< HEAD
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
=======
      <View>

          <View key={1} style={[styles.btile, {
            left: 1 * CELL_SIZE + CELL_PADDING,
            top: 0 * CELL_SIZE + CELL_PADDING}]}>
            <Image
              source={require('./images/duke.png')}>
            </Image>
          </View>

        <View key={2} style={[styles.btile, {
          left: 2 * CELL_SIZE + CELL_PADDING,
          top: 0 * CELL_SIZE + CELL_PADDING}]}>
          <Image
            source={require('./images/contessa.png')}>
          </Image>
        </View>
        <View key={4} style={[styles.btile, {
          left: 0 * CELL_SIZE + CELL_PADDING,
          top: 1 * CELL_SIZE + CELL_PADDING}]}>
          <Image
            source={require('./images/assassin.png')}>
          </Image>
        </View>
        <View key={7} style={[styles.btile, {
          left: 3 * CELL_SIZE + CELL_PADDING,
          top: 1 * CELL_SIZE + CELL_PADDING}]}>
          <Image
            source={require('./images/captain.png')}>
          </Image>
        </View>
        <View key={8} style={[styles.btile, {
          left: 0 * CELL_SIZE + CELL_PADDING,
          top: 2 * CELL_SIZE + CELL_PADDING}]}>
          <Image
            source={require('./images/ambassador.png')}>
          </Image>
        </View>
        <View key={11} style={[styles.btile, {
          left: 3 * CELL_SIZE + CELL_PADDING,
          top: 2 * CELL_SIZE + CELL_PADDING}]}>
          <Image
            source={require('./images/coup.png')}>
          </Image>
        </View>
        <View key={13} style={[styles.btile, {
          left: 1 * CELL_SIZE + CELL_PADDING,
          top: 3 * CELL_SIZE + CELL_PADDING}]}>
          <Image
            source={require('./images/coup.png')}>
          </Image>
        </View>
        <View key={14} style={[styles.btile, {
          left: 2 * CELL_SIZE + CELL_PADDING,
          top: 3 * CELL_SIZE + CELL_PADDING}]}>
          <Image
            source={require('./images/coup.png')}>
          </Image>
        </View>
>>>>>>> master
      </View>
    )
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#644B62',
  },
  bcontainer: {
    width: CELL_SIZE * SIZE,
    height: CELL_SIZE * SIZE,
    backgroundColor: 'transparent',
  },
  btile: {
    position: 'absolute',
    width: TILE_SIZE,
    height: TILE_SIZE,
    borderRadius: BORDER_RADIUS,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BEE1D2',
  },
  letter: {
    color: '#333',
    fontSize: LETTER_SIZE,
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#644B62',
  },
});


AppRegistry.registerComponent('Coup', () => Coup);
