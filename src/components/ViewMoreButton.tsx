import Link from "next/link";

import React from "react";

const ViewMoreButton = ({ id }: { id: number }) => {
  const handleFetch = async () => {
    const res = await fetch(`/api/events/${id}`);
    const event = await res.json();
    console.log(event);
  };

  return (
    <button
      className="border py-1 px-2 hover:bg-amber-100 transition duration-300 ease-in-out 1.5"
      onClick={() => {
        handleFetch();
      }}
    >
      View More
    </button>
  );
};

export default ViewMoreButton;
