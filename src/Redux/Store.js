import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../Redux/CartReducer"

const logger = (state) => (next) => (action) => {
    console.log(state.getState());
    next(action);
}

const store =configureStore({reducer : CartReducer, middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)});
export default store;