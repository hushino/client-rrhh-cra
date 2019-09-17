import logger from "./middleware/middleware";
import { createStore, applyMiddleware } from "redux";
import myReducer from './reducers'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, myReducer)

/* const store = createStore(
    persistedReducer,
    applyMiddleware(logger)
); */

/* export default function () {
    let store = createStore(persistedReducer,
        applyMiddleware(logger))
    let persistor = persistStore(store)
    return { store, persistor }
} */
const store = createStore(persistedReducer, applyMiddleware(logger));
export const persistor = persistStore(store)
export default store;

//export default store