"use client";

import { Provider } from "react-redux";
import store from "./store";
import { SnackbarProvider } from "notistack";

export default function Providers({ children }) {
  return (
    <SnackbarProvider
      maxSnack={2}
      autoHideDuration={2000}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
    >
      <Provider store={store}>{children}</Provider>
    </SnackbarProvider>
  );
}
