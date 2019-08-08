import axios from "axios";

export const createName = formData => dispatch => {
  console.log( formData );
  axios
    .post("http://localhost:3000/name", formData)
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
};
