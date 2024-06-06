import React from "react";

const Payloads = ({ payload }) => {
  return (
    <div>
      <h2>Full user data (payload)</h2>
      <pre>{JSON.stringify(payload, undefined, 2)}</pre>
      <h3>Attributes to leverage to help prevent fraud</h3>
      <pre>{JSON.stringify(payload.attributes, undefined, 2)}</pre>
      <h3>Triggers access based on verification status</h3>
      <pre>{JSON.stringify(payload.status, undefined, 2)}</pre>
    </div>
  );
};

export default Payloads;
