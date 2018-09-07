import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
var config = {
  apiKey: "AIzaSyAMEn5NgJhXgjjDOTs9L7CEVWiZ-AWsSgs",
  authDomain: "bloc-chat-ff3d0.firebaseapp.com",
  databaseURL: "https://bloc-chat-ff3d0.firebaseio.com",
  projectId: "bloc-chat-ff3d0",
  storageBucket: "bloc-chat-ff3d0.appspot.com",
  messagingSenderId: "259293635568"
};
firebase.initializeApp(config);


class App extends Component {
  render() {
    return (
      <div className="App">
      <RoomList firebase={firebase}/>
      </div>
    );
  }
}

export default App;
