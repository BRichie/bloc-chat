import React, { Component } from 'react';


class RoomList extends Component {
    constructor(props) {
        super(props);
       
       
        this.state = {
    rooms: [],
    title: "Bloc Chat",
    
    
}
this.roomsRef = this.props.firebase.database().ref('rooms');
    }
    
componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
        const room = snapshot.val();
        room.key = snapshot.key;
        this.setState({ rooms: this.state.rooms.concat( room ) });
    });
   
    
}


render() {
    return (
            <div className="chatTitle">
            
            <h1 id="title"> {this.state.rooms.title} </h1>
            <div id="room-list">{this.state.rooms.map( room )} </div>
        
</div>
);
}
}
    

export default RoomList;