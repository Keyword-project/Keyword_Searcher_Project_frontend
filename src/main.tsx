import React from "react";
import ReactDOM from "react-dom/client";
import App from "App.tsx";
import { Provider } from "react-redux";
import store from "store.js";
import { BrowserRouter } from "react-router-dom";
import GlobalFont from "styles/GlobalFont";

export type RootState = ReturnType<typeof store.getState>;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalFont />
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
