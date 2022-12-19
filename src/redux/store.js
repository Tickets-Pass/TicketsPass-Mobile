import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import concertsReducer from "./reducers/concertsReducer"

export const store = configureStore({
    reducer:{
        userReducer,
        concerts: concertsReducer
    }
})

