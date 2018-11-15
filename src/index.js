import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise";
import reducers from "./reducers";
import * as serviceWorker from "./serviceWorker";
import "./styles/index.css";

import LibraryList from "./containers/library-list";
import SingleBook from "./containers/book-single";
import NewBook from "./containers/book-new";
import Navbar from "./components/navbar";

// https://spark-cathedral.glitch.me/

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter basename="/personal-library">
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={LibraryList} />
          <Route path="/books/new" component={NewBook} />
          <Route path="/books/:id" component={SingleBook} />
        </Switch>
      </>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
