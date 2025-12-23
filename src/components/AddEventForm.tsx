"use client";
import React from "react";
import { useState } from "react";

const AddEventForm = ({ onEventAdded }: { onEventAdded: () => void }) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, details }),
    });
    if (!res.ok) {
      console.log("There seems to be an error");
      return;
    }
    setTitle("");
    setDetails("");
    console.log("event Added successfully");
    onEventAdded();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">
        Event Title:{" "}
        <input
          type="text"
          id="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label htmlFor="details">
        Event Details:{" "}
        <input
          type="text"
          id="details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
      </label>
      <button type="submit">Add Event</button>
    </form>
  );
};

export default AddEventForm;
