import React from "react";
import { Link } from "react-router-dom";

const MessageCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <h2>
          <span className="card-message">{props.message.message}</span>
        </h2>
        <p>{props.message.user.username}</p>
      </div>
    </div>
  );
};

export default MessageCard