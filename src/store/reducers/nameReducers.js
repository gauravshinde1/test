import { GET_NAME } from "../types";

const initialState = {
  getname: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_NAME:
      return {
        getname: action.payload
      };
    default:
      return state;
  }
}
