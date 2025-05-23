"use client";

import { configureStore } from "@reduxjs/toolkit";
import showReducer from "./showSlice";

const store = configureStore({
  reducer: {
    shows: showReducer,
  },
});

export default store;
