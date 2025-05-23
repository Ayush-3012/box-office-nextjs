"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shows: [],
};

const showSlice = createSlice({
  name: "Shows",
  initialState,

  reducers: {
    setShows: (state, action) => {
      state.shows = action.payload;
    },
  },
});

export const { setShows } = showSlice.actions;
export default showSlice.reducer;
