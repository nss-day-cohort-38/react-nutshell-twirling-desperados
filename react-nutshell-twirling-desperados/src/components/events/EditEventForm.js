import React, { useState, useEffect } from "react";
import EventManager from "../../modules/EventManager";

const EditEventForm = props => {
  const [event, setEvent] = useState({
    name: "",
    date: "",
    location: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...event };
    stateToChange[evt.target.id] = evt.target.value;
    setEvent(stateToChange);
  };

  const updateExistingEvent = evt => {
    evt.preventDefault();
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedEvent = {
      id: props.match.params.eventId,
      name: event.name,
      date: event.date,
      location: event.location
    };

    EventManager.update(editedEvent).then(() => props.history.push("/events"));
  };

  useEffect(() => {
    EventManager.get(props.match.params.eventId).then(event => {
      setEvent(event);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <label htmlFor="name">Event name: </label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={event.name}
            />
            <label htmlFor="date">Date: </label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="date"
              value={event.date}
            />

            <label htmlFor="location">Location: </label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="location"
              value={event.location}
            />
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={updateExistingEvent}
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

export default EditEventForm;
