import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import User from './components/User';


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
    activeRoom: '',
    user: null,
  };
  
  }
  setRoom(room) {
    this.setState({ activeRoom: room })
  }

  setUser(user) {
    this.setState({ user:user});
  }
 

  
  render() {
    return (
      <div className="App">
      < User firebase={firebase} 
      setUser={this.setUser.bind(this)} 
      user={this.state.user} />
      < RoomList firebase={firebase} 
      activeRoom={this.state.activeRoom} 
      setRoom={this.setRoom.bind(this)} />
      < MessageList firebase={firebase} 
      activeRoom={this.state.activeRoom} 
      setRoom={this.state.activeRoom.key} 
      user={this.state.user}/>
       </div>
    );
  }
}

export default App;
