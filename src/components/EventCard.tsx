import React from "react";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EventType } from "../lib/types";

import Link from "next/link";
import { Button } from "@/components/ui/button";

function EventCard({ id, title, details }: EventType) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{details}</CardDescription>
        <CardAction>
          <Link href={`/${id}`}>
            <Button variant="outline">View More</Button>
          </Link>
        </CardAction>
      </CardHeader>
    </Card>
  );
}

export default EventCard;
