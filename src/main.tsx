import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';
import {store} from './state/store';
import App from "./App";
import GlobalStyle from "./globalStyle";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <GlobalStyle/>
    <App />
  </Provider>
);
