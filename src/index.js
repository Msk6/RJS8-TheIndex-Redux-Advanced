import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import store from "./redux"
import {Provider} from "react-redux"

import App from "./App";

// actions
import {fetchAuthors, fetchBooks} from "./redux/actions/index"


store.dispatch(fetchAuthors())
store.dispatch(fetchBooks())

ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  
  ,
  document.getElementById("root")
);
registerServiceWorker();
