import React, { useState, useEffect } from "react";
//import the components we will need
import EventCard from "./EventCard";
import EventManager from "../../modules/EventManager";

const EventsList = props => {
  // The initial state is an empty array
  //setEvents is used to change the state of events
  // console.log("at top of comments");
  const [events, setEvents] = useState([]);

  const getEvents = () => {
    // After the data comes back from the API, we
    //  use the setEvents function to update state
    return EventManager.getAll().then(eventsFromAPI => {
      // console.log("about to call setEvents()");
      console.log(eventsFromAPI);
      setEvents(eventsFromAPI);
    });
  };

  const deleteEvent = id => {
    EventManager.delete(id).then(() => EventManager.getAll().then(setEvents));
  };

  // got the events from the API on the component's first render

  useEffect(() => {
    // console.log("inside useEffect()");
    getEvents();
  }, []);

  // getEvents();

  // console.log("about to return JSX", events);
  // Finally we use map() to "loop over" the events array to show a list of event cards
  return (
    <>
      <section className="section-content">
        <button
          type="button"
          className="btn"
          onClick={() => {
            props.history.push("/events/new");
          }}
        >
          Admit Event
        </button>
      </section>
      <div className="container-cards">
        {events.map(event => (
          <EventCard
            key={event.id}
            event={event}
            deleteEvent={deleteEvent}
            {...props}
          />
        ))}
      </div>
    </>
  );
};
export default EventsList;
