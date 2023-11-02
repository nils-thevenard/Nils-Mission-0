import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/tree-736885_1280.jpg')] bg-cover bg-no-repeat">
      <div>
        <h1 className="px-100 py-1  text-white  transition-all rounded-full">
          Let us help you..
        </h1>
        <div class="flex flex-col md:flex-row">
          <input className="  border-2 border-brightColor rounded-full"></input>
          <Button title="Search" />
        </div>
      </div>
    </div>
  );
};

export default Home;
