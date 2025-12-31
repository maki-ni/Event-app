"use client";
import React, { useEffect, useState } from "react";
import { EventType, popUpCardType } from "@/src/lib/types";
import AddEventForm from "@/src/components/AddEventForm";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";

const Admin = () => {
  const [events, setEvents] = useState<EventType[]>([]);
  const [popCard, setPopCard] = useState<popUpCardType>({
    status: false,
    id: null,
    title: "",
  });
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
      {popCard.status && (
        <Card>
          <CardTitle>Edit this Card</CardTitle>
          <CardDescription>
            fill in the spaces to update your event
          </CardDescription>
          <CardContent>
            <form>
              <label htmlFor="title">
                Title:{" "}
                <input
                  id="title"
                  value={popCard.title}
                  onChange={(e) =>
                    setPopCard({ ...popCard, title: e.target.value })
                  }
                />
              </label>
              <label htmlFor="details">
                Details: <input id="details" />
              </label>
            </form>
          </CardContent>
          <CardFooter>
            <Button variant={"outline"}>Edit</Button>
            <Button
              variant={"outline"}
              onClick={() => setPopCard({ ...popCard, status: false })}
            >
              Cancel
            </Button>
          </CardFooter>
        </Card>
      )}
      <h2>Events List</h2>
      {events?.map((event: EventType) => (
        <div key={event.id}>
          <p className="inline mr-5">{event.title}</p>
          <Button
            onClick={() =>
              setPopCard({ status: true, id: event.id, title: event.title })
            }
          >
            edit
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Admin;
