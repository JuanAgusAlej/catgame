import React from "react";
import "../style/loading.css";

import "../style/style.css";

const Loading = () => {
  return (
    <div className="load">
      <div className="pacman">
        <div className="pacman__mouth"></div>
        <div className="pacman__food"></div>
      </div>
    </div>
  );
};

export default Loading;
