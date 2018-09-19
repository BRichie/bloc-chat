import React, { Component } from 'react';

class MessageList extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            displayedMessages:  [],
            newMessages: ''
            

        }
        this.messagesRef = this.props.firebase.database().ref( 'messages' );
    }

        componentDidMount() {
            this.messagesRef.on('child_added', snapshot => {
                const message = snapshot.val();
                message.key = snapshot.key;
                this.setState({ messages: this.state.displayedMessages.concat( message ) });
               //console.log(snapshot.val()); 
               });
           }

           createMessage(newMessages) {
               if (!this.props.activeRoom || !newMessages) { return }
               this.messagesRef.push({
                username: "<username>",
                content: this.state.newMessages,
                sentAt: "<timestamp>",
                roomId: this.props.activeRoom.key,
               });
               this.setState({ newMessages: ''});
            }
           handleChange(event) {
               this.setState({ newMessages: event.target.value });
           }
            
        
        
    

render () {
    return (
        <div id="room-component">
        <h3 className="chat-room"> {this.props.activeRoom ? this.props.activeRoom.name : ''}</h3>
        
        <ul id="sent-messages">
        {this.state.displayedMessages.map( message  =>
        <li key={message.key}>
        <div className="content">
        {message.content}
        </div>
         </li>
        )}
   
    </ul>

     <div className="message-box">
        
        <form onSubmit={ (e) => { e.preventDefault(); this.createMessage(this.state.newMessages) } } >
            <label>        
              Type Message:
              <input type="text" value={ this.state.newMessages } onChange={this.handleChange.bind(this) } name="newMessages" />
            </label>
            <input type="submit" />
        </form>
         
     </div>
    </div>
    );
  }
}


    










        export default MessageList;