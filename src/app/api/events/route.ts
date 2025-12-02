import { NextResponse } from "next/server";
import { EventType } from "@/src/lib/types";

export async function GET() {
  try {
    const mockEvents: EventType[] = [
      { title: "title 1", details: "happens here. " },
      { title: "title 2", details: "happens there. " },
    ];
    return NextResponse.json(mockEvents, { status: 201 });
  } catch (err) {
    console.error("Fetching Error ", err);
    NextResponse.json({ error: "Failed Retrieval" }, { status: 500 });
  }
}
