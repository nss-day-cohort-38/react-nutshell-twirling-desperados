import React, { useState, useEffect } from "react";
//import the components we will need
import EventCard from "./EventCard";
import EventManager from "../../modules/EventManager";
import "./Events.css";

const EventsList = props => {
  const [events, setEvents] = useState([]);

  const deleteEvent = id => {
    EventManager.delete(id).then(() => getUserEvents());
  };

  const userNow = JSON.parse(sessionStorage.getItem("userCredentials"));

  const getUserEvents = () => {
    return EventManager.getAllEventsByUser().then(eventsFromDatabase => {
      const userEvents = eventsFromDatabase.filter(
        event => event.user.id === userNow
      );
      const sortedEvents = userEvents.sort(function(a, b) {
        return new Date(b.date) - new Date(a.date);
      });
      setEvents(sortedEvents.reverse());
    });
  };

  useEffect(() => {
    // console.log("inside useEffect()");
    getUserEvents();
  }, []);

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
      <div className="containers-cards">
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
