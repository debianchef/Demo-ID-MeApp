import React from "react";

const WithinAccount = ({ group }) => {
  return (
    <div>
      <p>
        You are now enrolled in our {group} Pro Program!
        <br />
        You are now collecting 2x bonus points every day on ID.me apparel, swag
        and red bulls.
        <a href={"/"}>Learn more about the program here.</a>
      </p>
    </div>
  );
};

export default WithinAccount;
