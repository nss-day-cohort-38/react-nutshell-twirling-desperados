import React from "react";
import { Link } from "react-router-dom";

const MessageCard = props => {
  const userCred = parseInt(sessionStorage.getItem("userCredentials"))

  const conditionalEditPermission = (message) => {
    if (message.userId === userCred) {
      return true
    } else {
      return false
    }
  }

  return (
    <div className="card">
      <div className="card-content">
        <h2>
          <span className="card-message">{props.message.message}</span>
        </h2>
        <p>{props.message.user.username}</p>
      </div>
      {conditionalEditPermission(props.message) ?
      <button type="button"
      onClick={() => props.history.push(`message/${props.message.id}/edit`)}
      >Edit</button>
      : null } 
    </div>
  );
};

export default MessageCard