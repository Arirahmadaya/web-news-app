// src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import router from "./router/router";
import { store } from './app/store'
import { Provider } from 'react-redux'

createRoot(document.getElementById("root")).render(
  //<StrictMode>
    <NextUIProvider>
    <Provider store={store}>
      <RouterProvider router={router} />
   </Provider>
    </NextUIProvider>
  //</StrictMode>
);
