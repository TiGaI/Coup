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


import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';



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

    }.bind(this));

    this.state.socket.on('errorMessage', function(message) {
      alert(message);
    }.bind(this));
  },
  render: function() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ height: 600, justifyContent: 'flex-end'}}>
          <Text style={{ fontSize: 20 }} onPress={() => this.setState({ promptVisible: true })}>
            Join the Room
          </Text>
        </View>
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



export default class Coup extends Component {
  constructor(props){
    super(props);
    this.socket = SocketIOClient('http://localhost:8081');
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
