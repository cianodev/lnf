import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";

import { theme } from "@/theme";
import Routes from "@/routes";
import store from "@/store";

import "@assets/styles/global.less";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ConfigProvider theme={theme}>
          <Routes />
        </ConfigProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
