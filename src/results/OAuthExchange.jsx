import React, { useState } from "react";
import Card from "../components/Card";

const prettyJSON = (object) => {
  return JSON.stringify(object, undefined, 2);
};

const OAuthExchange = ({ state }) => {
  const { token } = state;

  const title = "OAuth Exchange";
  const Content = () => {
    return (
      <div>
        <p>
          After a successful verification, ID.me will redirect the user to your
          redirect URI with the authorization code parameter appended.
        </p>
      </div>
    );
  };

  const tokenPayload = {
    access_token: token,
    token_type: "bearer",
    expires_in: "300",
    refresh_token: "e7c77fe1fd5ece9aaccb129f6dd39431",
    refresh_expires_in: "604800",
    scope: "military"
  };

  const Explicit = () => {
    return (
      <div>
        <h2>Receive the authorization code</h2>
        <p>
          After a successful authorization, ID.me will redirect the user to your
          redirect_uri with the authorization code parameter appended.
        </p>
        <pre>
          https://demos.id.me/callback?code=a8dee8e2e8d84d2d8ab6c4b04ea5afc6
        </pre>
        <h2>Exchange the authorization code for an access token</h2>
        <p>
          Send a request to the tokenb endpoint to retrieve the response
          containing your access token and refresh token.
        </p>
        <h3>CURL Example</h3>
        <pre>
          curl -X POST -d
          "code=a8dee8e2e8d84d2d8ab6c4b04ea5afc6&client_id=CLIENT_ID&client_secret=CLIENT_SECRET&redirect_uri=REDIRECT_URI&grant_type=authorization_code"
          https://api.id.me/oauth/token
        </pre>
        <h2>Obtain the access token</h2>
        <pre>{prettyJSON(tokenPayload)}</pre>
        <h2>Exchange the access token for user data</h2>
        <h3>CURL Example</h3>
        <pre>
          curl -X GET -d "code=${token}
          &client_id=CLIENT_ID&client_secret=CLIENT_SECRET&redirect_uri=REDIRECT_URI&grant_type=authorization_code"
          https://api.id.me/oauth/token
        </pre>
      </div>
    );
  };

  const Implicit = () => {
    return (
      <div>
        <h2>Receive the access token</h2>
        <p>
          After a successful authorization, ID.me will redirect the user to your
          redirect_uri with the access token appended as a hash.
        </p>
        <pre>
          https://demos.id.me/callback?token=a8dee8e2e8d84d2d8ab6c4b04ea5afc6
        </pre>
        <h2>Exchange the access token for user data</h2>
        <h3>CURL Example</h3>
        <pre>
          curl -X GET -d
          "code=488e864b&client_id=CLIENT_ID&client_secret=CLIENT_SECRET&redirect_uri=REDIRECT_URI&grant_type=authorization_code"
          https://api.id.me/oauth/token
        </pre>
      </div>
    );
  };

  const Reveal = () => {
    return (
      <div>
        <p>
          ID.me uses OAuth to provide authorized access to its API. Requests to
          retrieve user data require an access token that is used to query
          ID.me's REST API.
        </p>
        <hr />
        <Explicit />
      </div>
    );
  };

  return (
    <div id="oauth-exchange">
      <Card title={title} content={<Content />} reveal={<Reveal />} />
    </div>
  );
};

export default OAuthExchange;

// Please note that this example uses Implicit (Client-side) Flow
