import React from "react";
import loader from "../assets/loader.png";

function Loader() {
  return (
    <div className="bg-[#1E2230] h-screen w-screen flex items-center justify-center">
      <img src={loader} alt="loading" />
    </div>
  );
}

export default Loader;
