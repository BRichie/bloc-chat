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
       //console.log(snapshot.val()); 
       });
   
    
}


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
        </div>
             
           
        );
      }
    }



    

export default RoomList;