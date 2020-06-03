import React from "react";
import ReactDOM from "react-dom";
import App from "./js/App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./js/redux/store";
import "./tailwind.generated.css";
const Index = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
};
ReactDOM.render(<Index />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
