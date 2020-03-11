import React, { useState, useEffect } from "react";
import MessageManager from "../../modules/MessageManager";
import MessageCard from "../messages/MessageCard";

const MessageList = props => {
  const [messages, setMessages] = useState([]);

  const getMessages = () => {
    return MessageManager.getAllMessagesWithUsers().then(messagesFromAPI => {
      setMessages(messagesFromAPI);
    });
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <>
      <section className="section-content">
        {props.currentUser ? (
          <button
            type="button"
            className="btn"
            onClick={() => {
              props.history.push("/addmessage");
            }}
          >
            Write New Message
          </button>
        ) : <p><em>You must log in to write a new message</em></p>}
      </section>
      <div className="container-cards">
        {messages.map(message => (
          <MessageCard key={message.id} message={message} {...props} />
        ))}
      </div>
    </>
  );
};

export default MessageList;
