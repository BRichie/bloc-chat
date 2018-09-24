import React, { Component } from 'react';

class MessageList extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            displayedMessages:  [],
<<<<<<< HEAD
            newMessages: ''
=======
            newMessages: '',
            roomId: '',
>>>>>>> checkpoint-4-messages
            

        }
        this.messagesRef = this.props.firebase.database().ref( 'messages' );
    }
   

        componentDidMount() {
            this.messagesRef.on('child_added', snapshot => {
                const message = snapshot.val();
                message.key = snapshot.key;
<<<<<<< HEAD
                this.setState({ messages: this.state.displayedMessages.concat( message ) });
=======
                this.setState({ displayedMessages: this.state.displayedMessages.concat( message ) });
>>>>>>> checkpoint-4-messages
               //console.log(snapshot.val()); 
               });
           
                
          
         }
           

           createMessage(newMessages) {
               if (!this.props.activeRoom || !newMessages ) { return }
               this.messagesRef.push({
                username: "<username>",
                content: newMessages,
                sentAt: "<timestamp>",
                roomId: this.props.activeRoom.key,
               });
               this.setState({ newMessages: ''});
            }
            handleChange(event) {
                this.setState({ newMessages: event.target.value });
            }
            
<<<<<<< HEAD
=======
           handleSubmit(event) {
            event.preventDefault();
            this.setState({ newMessages: this.state.value });
            this.state.value = ""
          };
>>>>>>> checkpoint-4-messages
        
    

render () {
   
    //console.log(this.state.displayedMessages)
    return (
        <div id="room-component">
            <h3 className="chat-room"> {this.props.activeRoom ? this.props.activeRoom.name : ''}</h3>
        <ul id="message-list">
            {this.state.displayedMessages.filter( message => message.roomId === this.props.activeRoom.key).map(( message) =>
              <div key={message.key}>
                <div className="content">
                <p>{message.content}</p>
               </div>
            </div>
            )}
        </ul>
        
<<<<<<< HEAD
        <ul id="sent-messages">
        {this.state.displayedMessages.map( message  =>
        <li key={message.key}>
        <div className="content">
        {message.content}
        </div>
         </li>
        )}
   
    </ul>
=======
   
   
>>>>>>> checkpoint-4-messages

     <div className="message-box">
        
        <form onSubmit = { (e) => { e.preventDefault(); this.createMessage(this.state.newMessages) } }>
            <label>        
              Type Message:
<<<<<<< HEAD
              <input type="text" value={ this.state.newMessages } onChange={this.handleChange.bind(this) } name="newMessages" />
=======
              <input type="text" value= { this.state.newMessages } onChange={this.handleChange.bind(this) } />
>>>>>>> checkpoint-4-messages
            </label>
            <input type="submit" />
        </form>
         
     </div>
<<<<<<< HEAD
=======
     
>>>>>>> checkpoint-4-messages
    </div>
    );
  }
}


    


 export default MessageList;