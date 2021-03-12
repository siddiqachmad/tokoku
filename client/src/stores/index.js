import { createStore,applyMiddleware,combineReducer, combineReducers } from "redux";
import thunk from "redux-thunk";
import productReducer from "./reducers/ProductReducer";

const rootReducer = combineReducers({
    dataProduct: productReducer
})


const store = createStore(rootReducer,applyMiddleware(thunk))


//fungsi thunk agar return sebuah fungsi

export default store