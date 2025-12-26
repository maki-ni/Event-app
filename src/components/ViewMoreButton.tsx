import Link from "next/link";

import React from "react";

const ViewMoreButton = ({ id }: { id: number }) => {
  return (
    <Link href={`/${id}`}>
      <button className="border py-1 px-2 hover:bg-amber-100 transition duration-300 ease-in-out 1.5">
        View More
      </button>
    </Link>
  );
};

export default ViewMoreButton;
