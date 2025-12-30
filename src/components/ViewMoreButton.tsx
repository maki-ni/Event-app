import { Button } from "@/components/ui/button";
import Link from "next/link";

import React from "react";

const ViewMoreButton = ({ id }: { id: number }) => {
  return (
    <Link href={`/${id}`}>
      <Button>View More</Button>
    </Link>
  );
};

export default ViewMoreButton;
