import React from "react";
import GetEvents from "../components/GetEvents";

const Home = () => {
  return (
    <section>
      <h1>Welcome to the Event App</h1>
      <p>This is the site to view events.</p>
      <GetEvents />
    </section>
  );
};

export default Home;
