import React from "react";
import { SET_PAYLOAD, SET_TOKEN } from "../reducer";
import { useLocation } from "react-router-dom";
import $ from "jquery";

const Callback = ({ domain, dispatch }) => {
  const location = useLocation();
  const hash = location.hash !== "";
  const token =
    hash && location.hash.split("&")[0].match(/[^#access_token=]\w+/)[0];

  token && dispatch({ type: SET_TOKEN, payload: token });

  const params = () => {
    return {
      url: `https://api.${domain}/api/public/v3/attributes.json?access_token=${token}`,
      dataType: "jsonp"
    };
  };

  // Replace with fetch...I promise! See what I did there?
  $.get(params()).done(function (payload) {
    console.log("ID.me payload:", payload);

    dispatch({ type: SET_PAYLOAD, payload: payload });
  });

  return <div>Pending</div>;
};

export default Callback;
