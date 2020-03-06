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

  const deleteMessage = id => {
      MessageManager.delete(id).then(() => 
      MessageManager.getAllMessages().then(setMessages))
  }

  return (
    <>
      <section className="section-content">
        <button
          type="button"
          className="btn"
          onClick={() => {
            props.history.push("/addmessage");
          }}
        >
          Write New Message
        </button>
      </section>
      <div className="container-cards">
          {messages.map(message => (
              <MessageCard
                key={message.id}
                message={message}
                deleteMessage={deleteMessage}
                {...props}
                />
          ))}
      </div>
    </>
  );
};

export default MessageList