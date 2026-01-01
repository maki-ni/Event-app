import { EventType } from "@/src/lib/types";
import { NextResponse } from "next/server";
import { mockEvents } from "../route";

export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    //use context.params to get parametes
    const { id } = await context.params;

    const listOfEvents = mockEvents;
    console.log("Fetched the list", listOfEvents);
    console.log("params.id:", id, "Number(id):", Number(id));

    const event = listOfEvents.find(
      (specific: EventType) => specific.id === Number(id)
    );

    if (!event) {
      return NextResponse.json({ error: "Not Found!" }, { status: 404 });
    }
    return NextResponse.json(event);
  } catch (err) {
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}

export async function PATCH(
  request: Request,
  content: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await content.params;
    const eventId = Number(id);
    const body = await request.json();
    //
    const eventIndex = mockEvents.findIndex(
      (specific: EventType) => specific.id == eventId
    );

    const updatedEvent = {
      ...mockEvents[eventIndex],
      ...body,
    };
    mockEvents[eventIndex] = updatedEvent;
    return NextResponse.json(updatedEvent, { status: 200 });
  } catch (err) {
    console.error("PATH ERROR", err);
    return NextResponse.json({ error: "Some patch error" }, { status: 500 });
  }
}
