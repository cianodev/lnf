import { combineReducers } from "@reduxjs/toolkit";

import userReducer from "@/store/reducer/user";

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
