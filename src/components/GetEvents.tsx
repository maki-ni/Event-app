"use client";
import { useEffect, useState } from "react";
import React from "react";
import { EventType } from "../lib/types";

const GetEvents = () => {
  const [events, setEvents] = useState<EventType[]>([]);
  async function fetchEvents() {
    try {
      const res = await fetch("/api/events");
      if (!res.ok) {
        throw new Error("Failed to fetch events");
      }
      const data = await res.json();
      setEvents(data);
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
        {events.map((newEvent: EventType) => (
          <div key={newEvent.id}>
            <p> {newEvent.title}</p>
            <button className="border py-1 px-2 hover:bg-amber-100 transition duration-300 ease-in-out 1.5">
              View More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetEvents;
