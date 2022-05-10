import React from "react";

import Feed from "./pages/Feed";

import "./style/style.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

const App = () => {
  return (
    <div className="app">
      <Feed />
    </div>
  );
};

export default App;
