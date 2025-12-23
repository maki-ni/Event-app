import React from "react";
import { EventType } from "@/src/lib/types";
import AddEventForm from "@/src/components/AddEventForm";

const page = async () => {
  async function getEvents(): Promise<EventType[]> {
    const res = await fetch("http://localhost:3000/api/events");
    if (!res.ok) {
      throw new Error("Failed to fetch events");
    }
    return res.json();
  }
  const events = await getEvents();
  return (
    <div>
      <h1>This is the admin page</h1>
      <h2>Add Event</h2>
      <AddEventForm />
      <h2>Events List</h2>
      {events?.map((event: EventType) => (
        <div key={event.title}>{event.title}</div>
      ))}
    </div>
  );
};

export default page;
