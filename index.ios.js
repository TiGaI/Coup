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

import SocketIOClient from 'socket.io-client';
class Main extends React.Component



var io = require("socket.io-client/socket.io")
let socket;


users = [];
connections = [];


var Test = React.createClass({
  io.sockets.on('connection', function(socket){
    connections.push(socket);
    console.log('Connected: %s sockets connected')
  })
})


//
// var socketConfig = { path: '/socket' };
// var socket = new SocketIO('localhost:3000', socketConfig);

// Connect!
socket.connect();

// An event to be fired on connection to socket
socket.on('connect', () => {
    console.log('Wahey -> connected!');
});

// Event called when 'someEvent' it emitted by server
socket.on('someEvent', (data) => {
    console.log('Some event was called, check out this data: ', data);
});

// Called when anything is emitted by the server
socket.onAny((event) => {
    console.log(`${event.name} was called with data: `, event.items);
});

// Manually join namespace. Ex: namespace is now partyRoom
socket.joinNamespace('partyRoom')

// Leave namespace, back to '/'
socket.leaveNamespace()

// Emit an event to server
socket.emit('helloWorld', {some: 'data'});

//Disconnect from server
socket.disconnect();

// Reconnect to a closed socket
socket.reconnect();




var App = React.createClass ({
  getInitialState: function(){
    return {
      createCode: '',
      joinCode: '',
      player: 0,
      navigator: props.navigator
    }
  }
})



export default class Coup extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }


  render() {
    return (
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Coup', () => Coup);
