import {createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer.js";
import {composeWithDevTools} from "redux-devtools-extension/developmentOnly";
import {persistStore} from "redux-persist";

const middlewares = [];

if (process.env.NODE_ENV === "development"){
  middlewares.push(logger);
}
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));
const persistor = persistStore(store);

export {store, persistor};
