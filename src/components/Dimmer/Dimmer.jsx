import React from "react";

const Dimmer = ({ onClick }) => (
  <div className="absolute top-0 left-0 z-10 w-full h-screen bg-black bg-opacity-50" onClick={onClick}></div>
);

export default Dimmer;
