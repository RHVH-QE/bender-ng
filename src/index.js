import React from "react"
import ReactDOM from "react-dom"
import createSagaMiddleware from "redux-saga"
import { createStore, applyMiddleware, compose } from "redux"
import { Provider } from "react-redux"
import { syncHistoryWithStore } from "react-router-redux"
import reducer from "./Reducers"
import { BrowserRouter } from "react-router-dom"
import { createBrowserHistory } from "history"
import rootSaga from "./Sagas"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
)
const history = syncHistoryWithStore(createBrowserHistory(), store)

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter histroy={history}>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
)
registerServiceWorker()
