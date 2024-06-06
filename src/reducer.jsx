export const SET_PAYLOAD = "SET_PAYLOAD";
export const SET_ENV = "SET_ENV";
export const SET_TOKEN = "SET_TOKEN";

export const initialState = {
  sandbox: false,
  token: null,
  redirect: null,
  payload: {},
  fname: null,
  lname: null,
  email: null,
  group: null,
  subgroup: null,
};

export const reducer = (prevState, { type, payload }) => {
  switch (type) {
    case SET_ENV:
      return {
        ...prevState,
        sandbox: payload,
      };
    case SET_TOKEN:
      return {
        ...prevState,
        token: payload,
      };
    case SET_PAYLOAD:
      const attributes = payload.attributes;
      const status = payload.status;

      return {
        ...prevState,
        redirect: "",
        payload: payload,
        fname: attributes.find((element) => element.handle === "fname").value,
        lname: attributes.find((element) => element.handle === "lname").value,
        email: attributes.find((element) => element.handle === "email").value,
        uuid: attributes.find((element) => element.handle === "uuid").value,
        // group: status[0].group,
        // subgroup: status[0].subgroups[0]
      };
    default:
      return prevState;
  }
};
