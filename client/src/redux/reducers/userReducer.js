import { createReducer } from '@reduxjs/toolkit';

export const userReducer = createReducer(
  {},
   {

    uploadXlsxFileRequest: state => {
      state.loading = true;
    },
    uploadXlsxFileSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    uploadXlsxFileFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    getdataRequest: state => {
      state.loading = true;
    },
    getdataSuccess: (state, action) => {
      state.loading = false;
      state.alldata = action.payload.alldata;
    },
    getdataFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },


    clearError: state => {
      state.error = null;
    },
    clearMessage: state => {
      state.message = null;
    },
  }
);
