"use client";
import { useEffect, useState } from "react";
import React from "react";
import { EventType } from "../lib/types";

import EventCard from "./EventCard";

//a component to fetch all the available events in db
const GetEvents = () => {
  const [events, setEvents] = useState<EventType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  async function fetchEvents() {
    try {
      const res = await fetch("/api/events");
      if (!res.ok) {
        throw new Error("Failed to fetch events");
      }
      const data = await res.json();
      setEvents(data);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div>
      <h1>Events</h1>
      <div>
        {isLoading && <p>Loading Content . . . </p>}
        {events.map((newEvent: EventType) => (
          <div key={newEvent.id}>
            <EventCard
              id={newEvent.id}
              title={newEvent.title}
              details={newEvent.details}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetEvents;
