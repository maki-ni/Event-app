import React from "react";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EventType } from "../lib/types";
import ViewMoreButton from "./ViewMoreButton";

function EventCard({ id, title, details }: EventType) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{details}</CardDescription>
        <CardAction>
          <ViewMoreButton id={id}></ViewMoreButton>
        </CardAction>
      </CardHeader>
    </Card>
  );
}

export default EventCard;
