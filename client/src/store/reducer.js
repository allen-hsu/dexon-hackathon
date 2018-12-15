import { combineReducers } from "redux-immutable";
import { reducer as bookReducer } from "../pages/book/store";
export default combineReducers({
  book: bookReducer
});
