import React from "react";
import Link from "next/link";
const NavBar = () => {
  return (
    <nav>
      <ul className="flex-row">
        <li>
          <Link href="/">Home</Link>{" "}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
