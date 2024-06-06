import React from "react";
import { SET_ENV } from "../reducer";
import { groupsEndpoint } from "../client";

const Verify = ({ sandbox, dispatch }) => {
  const changeHandler = (e) => {
    dispatch({ type: SET_ENV, payload: e.target.value });
  };

  return (
    <div>
      <main className="card">
        <div className="card-content">
          <span className="banner">Hello! Welcome to ID.me's Demo App</span>

          <p>
            This app was created to allow you to test group or identity
            verification using of ID.me.
          </p>

          <h1>Select path:</h1>
          <form onChange={(e) => changeHandler(e)}>
            <p>
              <label>
                <input name="env" type="radio" value="true" />
                <span>Mocked Verification (Sandbox)</span>
                <p className="valign-wrapper">
                  <i class="material-icons green-text">check</i>
                  <span>
                    Input <b>any</b> data
                  </span>
                </p>
                <p className="valign-wrapper">
                  <i class="material-icons green-text">check</i>
                  <span>
                    Upload <b>any</b> document
                  </span>
                </p>
                <p className="valign-wrapper">
                  <i class="material-icons green-text">check</i>
                  <span>
                    Generate <b>mocked</b> responses
                  </span>
                </p>
              </label>
            </p>
            <span>OR</span>
            <p>
              <label>
                <input name="env" type="radio" value="false" defaultChecked />
                <span>Live Verification (Production)</span>
                <p className="valign-wrapper">
                  <i class="material-icons green-text">check</i>
                  <span>
                    Input <b>real</b> data
                  </span>
                </p>
                <p className="valign-wrapper">
                  <i class="material-icons green-text">check</i>
                  <span>
                    Upload <b>real</b> documents
                  </span>
                </p>
                <p className="valign-wrapper">
                  <i class="material-icons green-text">check</i>
                  <span>
                    Generate <b>real</b> responses
                  </span>
                </p>
              </label>
            </p>
          </form>

          <h1>Let's get started!</h1>
          <p>
            Simply click the <i>"Verify with ID.me"</i> button below to get
            started.
          </p>
          <a id="idme-button" href={groupsEndpoint(sandbox)}>
            <img
              className="responsive-img"
              src={
                "https://s3.amazonaws.com/idme/buttons/v4/verify-with-idme-green.png"
              }
              alt="Verify with ID.me"
            />
          </a>

          <span>
            ID.me is a trusted technology partner in helping to keep your
            personal information safe. We specialize in digital identity
            protection and help partners make sure you're you—and not someone
            pretending to be you—before giving you access to your information or
            offer.
          </span>

          <a href={"https://www.id.me/about"} target="_blank" rel="noreferrer">
            Learn more about ID.me
          </a>
        </div>
      </main>
    </div>
  );
};

export default Verify;
