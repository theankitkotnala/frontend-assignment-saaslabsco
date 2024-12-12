import { combineReducers } from "redux";
import percentageFundedReducer from "./percentageFunded";

const rootReducer = combineReducers({
  percentageFundedReducer,
});

export default rootReducer;
