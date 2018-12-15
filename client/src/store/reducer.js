import { combineReducers } from "redux-immutable";
import { reducer as bookReducer } from "../pages/book/store";
import { reducer as authReducer } from "../pages/auth/store";
export default combineReducers({
  book: bookReducer,
  auth: authReducer
});
