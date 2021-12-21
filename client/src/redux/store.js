import {createStore, applyMiddleware} from "redux";
import logger from "redux-logger";

import rootSaga from "./root-saga";
import rootReducer from "./root-reducer.js";

import {composeWithDevTools} from "redux-devtools-extension/developmentOnly";
import {persistStore} from "redux-persist";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development"){
  middlewares.push(logger);
}
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export {store, persistor};
