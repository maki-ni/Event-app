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

export async function PATCH(request: Request) {}
