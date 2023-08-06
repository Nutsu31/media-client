import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import { Provider } from "react-redux";
import filterReducer from "./redux/filterReducer";
import { SummonLoginProvide } from "./component/SummonLogin/SummonLoginComponent";
import { SummonSignUpComponent } from "./component/SummonLogin/SummonSignUpComponent";
import { AuthContextProvider } from "./component/Auth/AuthContext";

const store = createStore(filterReducer, applyMiddleware(thunk, logger));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <SummonSignUpComponent>
          <AuthContextProvider>
            <SummonLoginProvide>
              <App />
            </SummonLoginProvide>
          </AuthContextProvider>
        </SummonSignUpComponent>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
