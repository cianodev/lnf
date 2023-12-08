import { combineReducers } from "@reduxjs/toolkit";

import userReducer from "@/store/reducer/user";
import itemReducer from "@/store/reducer/item";

const rootReducer = combineReducers({
  user: userReducer,
  item: itemReducer,
});

export default rootReducer;
