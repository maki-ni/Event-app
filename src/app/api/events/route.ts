import { NextResponse } from "next/server";
import { EventType } from "@/src/lib/types";

// mock event list to iterate through
const mockEvents: EventType[] = [
  { id: 1, title: "title 1", details: "happens here. " },
  { id: 2, title: "title 2", details: "happens there. " },
];

// fetches all the events listed
export async function GET() {
  try {
    return NextResponse.json(mockEvents, { status: 201 });
  } catch (err) {
    console.error("Fetching Error ", err);
    NextResponse.json({ error: "Failed Retrieval" }, { status: 500 });
  }
}
// posts a specific event into the list of events
export async function POST(request: Request) {
  try {
    const newEventData: EventType = await request.json();
    console.log("New Events Added ", newEventData);
    mockEvents.push(newEventData);
    return NextResponse.json(newEventData, { status: 200 });
  } catch (err) {
    console.error("Posting Error ", err);
    NextResponse.json({ error: "Failed Post" }, { status: 500 });
  }
}
