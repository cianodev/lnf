import { createSlice } from "@reduxjs/toolkit";

import { requestReportItem } from "@/api/item";

const initialState = {
  data: {},
  fetching: false,
  status: false,
  error: null,
};

const { actions, reducer } = createSlice({
  name: "item",
  initialState,
  reducers: {
    initReport: (state) => {
      state.data = {};
      state.fetching = true;
      state.status = false;
      state.error = null;
    },
    successReport: (state, { payload }) => {
      state.data = payload.data;
      state.fetching = false;
      state.status = payload.status;
      state.error = null;
    },
    errorReport: (state, { payload }) => {
      state.data = {};
      state.fetching = false;
      state.message = payload.message;
      state.error = payload.error;
    },
  },
});

export const {
  initReport,
  successReport,
  errorReport,
} = actions;

export const reportItem = (params) => async (dispatch) => {
  dispatch(initReport());

  const {
    data: { success, data, message },
  } = await requestReportItem(params);

  success ? dispatch(successReport(data)) : dispatch(errorReport(message));
};

export default reducer;
