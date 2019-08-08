import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import getallName from "./nameReducers";

export default combineReducers({
  errors: errorReducer,
  getallname: getallName
});
