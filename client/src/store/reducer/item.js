import { createSlice } from "@reduxjs/toolkit";

import { requestReportItem, requestGetAllItems } from "@/api/item";

const initialState = {
  data: {},
  items: [],
  fetching: false,
  status: false,
  error: null,
};

const { actions, reducer } = createSlice({
  name: "item",
  initialState,
  reducers: {
    initItems: (state) => {
      state.items = [],
      state.fetching = true;
      state.error = null;
    },
    initReport: (state) => {
      state.data = {};
      state.fetching = true;
      state.status = false;
      state.error = null;
    },
    successItems: (state, { payload }) => {
      state.items = payload;
      state.fetching = false;
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
    errorItems: (state, { payload }) => {
      state.items = [],
      state.fetching = false;
      state.error = payload;
    },
    resetStatus: (state) => {
      state.status = false;
    },
  },
});

export const {
  initItems,
  initReport,
  successItems,
  successReport,
  errorItems,
  errorReport,
  resetStatus,
} = actions;

export const reportItem = (params) => async (dispatch) => {
  dispatch(initReport());

  const {
    data: { success, data, message },
  } = await requestReportItem(params);

  success ? dispatch(successReport(data)) : dispatch(errorReport(message));
};

export const getAllItems = () => async (dispatch) => {
  dispatch(initItems());

  const {
    data: { success, data, message },
  } = await requestGetAllItems();

  success ? dispatch(successItems(data)) : dispatch(errorItems(message));
};

export default reducer;
