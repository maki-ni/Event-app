import { EventType } from "@/src/lib/types";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";

export default async function EventPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const res = await fetch(`http://localhost:3000/api/events/${id}`);
  if (!res.ok) {
    return notFound();
  }
  const event: EventType = await res.json();

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
