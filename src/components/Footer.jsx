import React from "react";

import "../style/footer.css";

const Footer = () => {
  return (
    <div className="card footer-card">
      <div className="card-body text-muted">
        {/* agregar elementos al footer que creamos necesarios */}
        <div className="col-12">©2022 GamerCat</div>
        <div className="col-12">©2022 GamerCat</div>
        <div className="col-12">©2022 GamerCat</div>
        <div className="col-12">©2022 GamerCat</div>
      </div>
    </div>
  );
};

export default Footer;
