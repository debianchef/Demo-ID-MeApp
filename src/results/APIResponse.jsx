import React from "react";
import Card from "../components/Card";

const prettyJSON = (object) => {
  return JSON.stringify(object, undefined, 2);
};

const APIResponse = ({ state }) => {
  const { payload } = state;

  const title = "API Response";
  const Content = () => {
    return (
      <div>
        <pre>{prettyJSON(payload)}</pre>
      </div>
    );
  };

  const Reveal = () => {
    return (
      <div>
        <p>
          Partners can access protected REST endpoints by making HTTP requests
          with the access token for a given user. The ID.me server will validate
          the access token to ensure it is valid and has not expired.
        </p>
        <p>
          After receiving a successful verification response from ID.me's API,
          you should apply business logic to unlock the benefit you are offering
          to the end user based on the JSON response.
        </p>
        <p>Full user data (JSON Payload)</p>
        <pre>{prettyJSON(payload)}</pre>
        <p>Attributes to leverage to help prevent fraud</p>
        <pre>{prettyJSON(payload.attributes)}</pre>
        <p>Triggers access based on verification status</p>
        <pre>{prettyJSON(payload.status)}</pre>
      </div>
    );
  };

  return (
    <div id="partner-receives">
      <Card title={title} content={<Content />} reveal={<Reveal />} />
    </div>
  );
};

export default APIResponse;
