import React from "react";
import { Link } from "react-router-dom";
function Menubtn() {
  return (
    <div>
      <Link to="menu">
        <button type="button" className="btn btn-success btn-lg">
          Our Full Menu
        </button>
      </Link>
    </div>
  );
}
export default Menubtn;
