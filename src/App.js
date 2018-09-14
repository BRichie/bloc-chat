import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';


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
  render() {
    return (
      <div className="App">
      < RoomList firebase={firebase}/>
     
       </div>
    );
  }
}

export default App;
