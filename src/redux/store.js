import logger from "./middleware/middleware";
import { createStore, applyMiddleware } from "redux";
import myReducer from './reducers'

const store = createStore(
    myReducer,
    applyMiddleware(logger)
);
export default store