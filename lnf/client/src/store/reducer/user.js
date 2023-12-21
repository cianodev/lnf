import { createSlice } from "@reduxjs/toolkit";

import { requestRegister, requestLogin } from "@/api/user";

const initialState = {
  data: {},
  fetching: false,
  status: false,
  error: null,
};

const { actions, reducer } = createSlice({
  name: "sandbox",
  initialState,
  reducers: {
    initUser: (state) => {
      state.data = {};
      state.fetching = true;
      state.status = false;
      state.error = null;
    },
    initLogin: (state) => {
      state.fetching = true;
      localStorage.removeItem("isLogged");
      localStorage.removeItem("user");
    },
    successUser: (state, { payload }) => {
      state.data = payload.data;
      state.fetching = false;
      state.status = payload.status;
      state.error = null;
    },
    successLogin: (state, { payload }) => {
      state.fetching = false;
      localStorage.setItem("isLogged", true);
      localStorage.setItem("user", JSON.stringify(payload));

      window.location.replace('/profile')
    },
    errorUser: (state, { payload }) => {
      state.data = {};
      state.fetching = false;
      state.message = payload;
      state.error = payload;
    },
    errorLogin: (state, { payload }) => {
      state.fetching = false;
      state.error = payload;
    },
    resetStatus: (state) => {
      state.status = false;
      state.error = null;
    },
  },
});

export const {
  initLogin,
  initUser,
  successLogin,
  successUser,
  errorLogin,
  errorUser,
  resetStatus,
} = actions;

export const registerUser = (params) => async (dispatch) => {
  dispatch(initUser());

  const {
    data: { success, data, message },
  } = await requestRegister(params);

  success ? dispatch(successUser(data)) : dispatch(errorUser(message));
};

export const loginUser = (params) => async (dispatch) => {
  dispatch(initLogin());

  const {
    data: { success, data, message },
  } = await requestLogin(params);

  success ? dispatch(successLogin(data)) : dispatch(errorLogin(message));
};

export default reducer;
