import React, { Component } from 'react';


class RoomList extends Component {
    constructor(props) {
        super(props);
       
        this.state = {
            rooms: [],
            title: "Bloc Chat",
            newRoomName: '',
         }
        this.roomsRef = this.props.firebase.database().ref('rooms');
    }
    
componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
        const room = snapshot.val();
        room.key = snapshot.key;
        this.setState({ rooms: this.state.rooms.concat( room ) });
       //console.log(snapshot.val()); 
       });
   }
createRoom(newRoomName) {
    this.roomsRef.push({
        name: newRoomName
      });
      this.setState({ newRoomName: ''});
}
handleChange(event) {
    this.setState({newRoomName: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({name: this.state.value});
    this.state.value = ""
  };
  

render() {
    //console.log(this.state.rooms)
    return (
            
            <div className="chatTitle">
            <h1 id="title"> {this.state.title} </h1>
            
    
            <div className="roomList">
         <ul>

          {
            this.state.rooms.map((val,index)=>{
              return <li key={index}>{val.name}</li>
            })

          }
          </ul>
          </div>
          <div className="room-submit">
          <form  onSubmit={ (e) => { e.preventDefault(); this.createRoom(this.state.newRoomName) } }>
            <label>
              Create New Room:
              <input type="text" value={this.state.newRoomName} onChange={ this.handleChange.bind(this) } />
            </label>
            <input type="submit" value="Add"/>
          </form>
          {this.state.data}
        </div>
    
    </div>
             
           
        );
      }
    }



    

export default RoomList;
