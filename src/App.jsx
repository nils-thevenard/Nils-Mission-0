import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Articles from "./Components/Articles";

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div id="home">
          <Home />
        </div>
        <div id="articles">
          <Articles />
        </div>
      </main>
    </div>
  );
};

export default App;
