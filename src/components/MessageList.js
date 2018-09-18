import React, { Component } from 'react';

class MessageList extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            newMessages:'',
            displayedMessages: []

        }
        this.messagesRef = this.props.firebase.database().ref( 'messages' );
    }

        componentDidMount() {
            this.messagesRef.on('child_added', snapshot => {
                const message = snapshot.val();
                message.key = snapshot.key;
                this.setState({ messages: this.state.displayedMessages.concat( message ) });
               console.log(snapshot.val()); 
               });
           }

           createMessage(newMessages) {
               if (!this.props.activeRoom || !newMessages) { return }
               this.messagesRef.push({
                username: "<username>",
                content: this.state.newMessages,
                sentAt: "<timestamp>",
                roomId: this.props.activeRoom,
               });
               this.setState({ newMessages: ''});
            }
           handleChange(event) {
               this.setState({ newMessages: event.target.value });
           }
            
           handleSubmit(event) {
              event.preventDefault();
              this.setState({ content: this.state.value });
              this.state.value = ""
          };
        
        
    

render () {
    return (
        <div id="room-component">
        <h3 className="chat-room"> {this.props.activeRoom ? this.props.activeRoom.name : ''}</h3>
        
        <ul>
        {this.state.displayedMessages.map( message =>
        <li key={message.key}> 
        <button onClick={ () => this.props.createMessage( message )}> {message.content}</button>
         </li>
        )}
   
    

     <div className="message-box">
        
        <form onSubmit={ (e) => { e.preventDefault(); this.createMessage(this.state.newMessages) } } >
            <label>        
              Type Message:
              <input type="text" value={ this.state.newMessages } onChange={this.handleChange.bind(this) } />
            </label>
            <input type="submit" />
        </form>
        {this.state.data} 
     </div>
        </ul>
     </div>
    );
  }
}


    










        export default MessageList;