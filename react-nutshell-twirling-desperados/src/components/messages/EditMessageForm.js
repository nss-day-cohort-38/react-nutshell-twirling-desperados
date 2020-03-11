import React, { useState, useEffect } from "react";
import MessageManager from "../../modules/MessageManager";

const EditMessageForm = props => {
  const [message, setMessage] = useState({ message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...message };
    stateToChange[evt.target.id] = evt.target.value;
    setMessage(stateToChange);
  };

  const updateExistingMessage = evt => {
    evt.preventDefault();
    setIsLoading(true);

    const editedMessage = {
      id: props.match.params.messageId,
      userId: parseInt(message.userId),
      message: message.message
    };

    MessageManager.update(editedMessage).then(() =>
      props.history.push("/messages")
    );
  };

  useEffect(() => {
    MessageManager.get(props.match.params.messageId).then(message => {
      setMessage(message);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <label htmlFor="Message">Message: </label>
            <textarea
              required
              className="form-control"
              onChange={handleFieldChange}
              id="message"
              rows="1"
              cols="50"
              value={message.message}
            />
          </div>
          <p></p>
          <div>
            <button
              type="button"
              disabled={isLoading}
              onClick={updateExistingMessage}
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default EditMessageForm;
