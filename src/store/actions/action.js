import axios from "axios";

export const createName = formData => dispatch => {
  axios
    .post("http://localhost:3000/name", formData)
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
};
