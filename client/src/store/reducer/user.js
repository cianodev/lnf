import { createSlice } from "@reduxjs/toolkit";

import {
  requestRegister
} from '@/api/user'

const initialState = {
  data: {},
  fetching: false,
  status: false,
  error: null
}

const { actions, reducer } = createSlice({
  name: "sandbox",
  initialState,
  reducers: {
    initUser: (state) => {
      state.data = {};
      state.fetching = true;
      state.status = false
      state.error = null
    }, 
    successUser: (state, { payload }) => {
      state.data = payload.data
      state.fetching = false
      state.status = payload.status
      state.error = null
    },
    errorUser: (state, { payload }) => {
      state.data = {}
      state.fetching = false
      state.message = payload.message
      state.error = payload.error
    }
  }
})

export const {
  initUser,
  successUser,
  errorUser
} = actions

export const registerUser = (params) => async (dispatch) => {
  dispatch(initUser())

  const {
    data: { success, data, message },
  } = await requestRegister(params);

  success
    ? dispatch(successUser(data))
    : dispatch(errorUser(message)); 

}

export default reducer;