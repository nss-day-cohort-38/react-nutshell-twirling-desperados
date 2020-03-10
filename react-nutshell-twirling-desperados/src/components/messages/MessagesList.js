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
        ) : null}
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
