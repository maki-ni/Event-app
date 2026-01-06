"use client";
import { useEffect, useState } from "react";
import { EventType } from "@/src/lib/types";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function EventPage() {
  const params = useParams();
  const id = params?.id;

  const [event, setEvent] = useState<EventType>();

  useEffect(() => {
    if (id) {
      const fetchEvent = async () => {
        const res = await fetch(`/api/events/${id}`);
        const data: EventType = await res.json();
        setEvent(data);
      };
      fetchEvent();
    }
  }, [id]);

  if (!event) {
    return <p>Loading event details...</p>;
  }

  return (
    <div className="p-4">
      <Link href={"/"}>
        <Button variant={"outline"}>Go Home </Button>
      </Link>
      <h1 className="text-xl font-bold">{event.title}</h1>
      <p>{event.details}</p>
    </div>
  );
}
