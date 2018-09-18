import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';


var config = {
  apiKey: "AIzaSyAdXr_e7MRDet3EIY6PFloMz7cIbgFIt9U",
  authDomain: "new-bloc-chat-8284c.firebaseapp.com",
  databaseURL: "https://new-bloc-chat-8284c.firebaseio.com",
  projectId: "new-bloc-chat-8284c",
  storageBucket: "new-bloc-chat-8284c.appspot.com",
  messagingSenderId: "1079208063451"
};
firebase.initializeApp(config);


class App extends Component {
  constructor(props) {
  super(props);

  this.state = {
    activeRoom: undefined,
  }
  }
  setRoom(room) {
    this.setState({ activeRoom:room })
  }
 

  
  render() {
    return (
      <div className="App">
      < RoomList firebase={firebase} activeRoom={this.state.activeRoom} setRoom={this.setRoom.bind(this)} />
      < MessageList firebase={firebase} activeRoom={this.state.activeRoom} />
       </div>
    );
  }
}

export default App;
