import React from "react";
import { Link } from "react-router-dom";

const EventCard = props => {
  return (
    <div className="cards">
      <section className="cards-content">
        <picture></picture>
        <h3>
          Name: <span className="">{props.event.name}</span>
        </h3>
        <h3>Date: {props.event.date}</h3>
        <h3>Location: {props.event.location}</h3>
        <button
          type="button"
          onClick={() => props.history.push(`/events/${props.event.id}/edit`)}
        >
          Edit
        </button>

        <button type="button" onClick={() => props.deleteEvent(props.event.id)}>
          Discharge
        </button>
      </section>
    </div>
  );
};

export default EventCard;
