import React from "react";
import { Link } from "react-router-dom";

const ActionLinks = () => {
  return (
    <div className="card-action">
      <Link className="green-text" to="/results">
        User View
      </Link>
      <Link className="green-text" to="/results/oauth-exchange">
        OAuth Exchange
      </Link>
      <Link className="green-text" to="/results/api-response">
        API Response
      </Link>
    </div>
  );
};

export default ActionLinks;
