import logger from "./middleware/middleware";
import { createStore, applyMiddleware } from "redux";
import myReducer from './reducers';


 const store = createStore(
    myReducer,
    applyMiddleware(logger)
); 
export default store;
/* export default function () {
    let store = createStore(persistedReducer,
        applyMiddleware(logger))
    let persistor = persistStore(store)
    return { store, persistor }
} */
/* const store = createStore(persistedReducer ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export const persistor = persistStore(store)
export default store; */

//export default store