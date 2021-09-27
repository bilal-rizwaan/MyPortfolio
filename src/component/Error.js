import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div>
      <div className="Error_pg">
        <h2> 404 </h2> <h4> Page Not Found </h4> <Link to="/"> Home </Link>
      </div>
    </div>
  );
}
