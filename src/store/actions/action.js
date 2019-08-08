import axios from "axios";
import { GET_NAME } from "../types";

export const createName = formData => dispatch => {
  console.log(formData);
  axios
    .post("http://localhost:3000/name", formData)
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
};

export const getAllName = () => dispatch => {
  axios
    .get("http://localhost:3000/name")
    // .then(res => console.log(res.data))
    .then(res => {
      dispatch({
        type: GET_NAME,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
