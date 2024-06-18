import React from "react";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import Countries from "../components/Countries";

const Home = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <div className="countries">
        <Countries />
      </div>
    </div>
  );
};

export default Home;
