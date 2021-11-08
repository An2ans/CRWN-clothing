import {createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer.js";
import {composeWithDevTools} from "redux-devtools-extension/developmentOnly";

const middlewares = [logger];
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;
