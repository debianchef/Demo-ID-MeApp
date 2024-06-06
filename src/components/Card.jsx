import React from "react";
import ActionLinks from "../components/ActionLinks";

const Card = ({ title, content, reveal }) => {
  return (
    <main className="card sticky-action">
      <div className="card-image waves-effect waves-block waves-light">
        <img
          className="activator"
          src="https://d279m997dpfwgl.cloudfront.net/wp/2016/11/FlagByJnn13Wiki-1000x749.jpg"
          alt="Sample"
        />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {title}
          <i className="material-icons right">info_outline</i>
        </span>
        <div>{content}</div>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          {title}
          <i className="material-icons right">close</i>
        </span>
        <div>{reveal}</div>
      </div>
      <ActionLinks />
    </main>
  );
};

export default Card;
