"use client";
import React, { useEffect, useState } from "react";
import { EventType } from "@/src/lib/types";
import AddEventForm from "@/src/components/AddEventForm";

const Admin = () => {
  const [events, setEvents] = useState<EventType[]>([]);
  async function getEvents() {
    const res = await fetch("http://localhost:3000/api/events");
    if (!res.ok) {
      throw new Error("Failed to fetch events");
    }
    const data = await res.json();
    setEvents(data);
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        await getEvents();
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <h1>This is the admin page</h1>
      <h2>Add Event</h2>
      <AddEventForm onEventAdded={getEvents} />
      <h2>Events List</h2>
      {events?.map((event: EventType) => (
        <div key={event.id}>
          <p className="inline mr-5">{event.title}</p>
          <button className="bg-amber-50 rounded-xl py-2 px-4 hover:bg-amber-200">
            edit
          </button>
        </div>
      ))}
    </div>
  );
};

export default Admin;
