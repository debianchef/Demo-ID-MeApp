import React from "react";
import Card from "../components/Card";

const UserView = ({ state }) => {
  const { fname, group } = state;
  const title = "User View";
  const Content = () => {
    return (
      <p>
        Thank you {fname} for {group === "military" && "your service and "}
        verifying your {group} status with ID.me.{" "}
        {group && group !== "identity" && "Enjoy 20% off and free shipping."}
      </p>
    );
  };

  const Reveal = () => {
    return (
      <div>
        <p>
          The user view displays the results of their verification and/or
          provides access to the offer/discount/benefits to the end user.
        </p>
        <p>
          From a user experience perspective, it is recommended that you store
          the verified status in the user's session to keep the experience
          consistent in case the page is refreshed, the back button is pressed,
          etc.
        </p>
        <hr />
        <h2>Successful Verification</h2>
        <p>
          If users successfully complete verification, users should be welcomed
          with success messaging that clearly defines next steps for the user.
        </p>
        <span>
          Example:
          <i>
            <Content />
          </i>
        </span>
        <hr />
        <h2>Failed Verification</h2>
        <p>
          If users are unable to successfully complete verification, they are
          prompt to retry verification. If enabled, users may have the option to
          <i>"Return to Partner"</i>, which returns transactional data and an
          error code assoicated with the reason to the partner.
        </p>
        <p>
          The user should be presented with error messaging based on the error
          code and reason.
        </p>
        <span>
          Example:
          <p>
            <i>
              Thank you {fname}! Unfortunately, ID.me was unable to verify your
              {group} status. It looks like your have already verified with
              ID.me. Please log in with your primary account, and try again.
            </i>
          </p>
        </span>
      </div>
    );
  };

  return (
    <div id="user-view">
      <Card title={title} content={<Content />} reveal={<Reveal />} />
    </div>
  );
};

export default UserView;
