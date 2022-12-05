import { configureStore } from "@reduxjs/toolkit";
import rootreducers from "./rootreducers";
import productSaga from "./productSaga";
import createSagaMiddleware from "@redux-saga/core";


let sagaMiddleware = createSagaMiddleware()
const store = configureStore({
    reducer: rootreducers,
    middleware: () => [sagaMiddleware]
})

sagaMiddleware.run(productSaga)
export default store;