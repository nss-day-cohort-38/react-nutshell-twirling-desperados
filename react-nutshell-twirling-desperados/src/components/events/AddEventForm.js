import React, { useState } from "react";
import EventManager from "../../modules/EventManager";

const AddEventForm = props => {
  const [event, setEvent] = useState({ name: "", date: "", location: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...event };
    stateToChange[evt.target.id] = evt.target.value;
    setEvent(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create event      object, invoke the EventManager post method, and redirect to the full event list
   */
  const constructNewEvent = evt => {
    evt.preventDefault();
    if (event.name === "" || event.date === "" || event.location === "") {
      window.alert("Please fill out all the fields to continue");
    } else {
      setIsLoading(true);
      // Create the event and redirect user to event list
      EventManager.post(event).then(() => props.history.push("/events"));
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="name"
              placeholder="EventName"
            />
            <label htmlFor="date">Date: </label>

            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="date"
              placeholder="EventDate"
            />
            <label htmlFor="location">Location: </label>

            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="location"
              placeholder="location"
            />
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewEvent}
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default AddEventForm;
