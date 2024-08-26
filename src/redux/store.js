import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import adminSlice from "./admin/adminSlice";
import developerSlice from "./developer/developerSlice";
import {persistStore, persistReducer} from "redux-persist"

const persistConfig = {
    key: "root",
    storage,
}

const rootReducer = combineReducers({
    admin: adminSlice,
    developer: developerSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false
        })
});

let persistor = persistStore(store)


export {store, persistor};