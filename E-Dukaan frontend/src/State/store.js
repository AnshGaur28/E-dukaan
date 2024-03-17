import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./auth/Reducer";
import { thunk } from "redux-thunk";
import { CustomerProductReducer } from "./Product/Reducer";
import { CartReducer } from "./Cart/Reducer";
import { orderReducer } from "./Order/Reducer";
import { paymentReducer } from "./payment/Reducer";
const rootReducers = combineReducers({
    auth : authReducer ,
    product: CustomerProductReducer,
    cart : CartReducer,
    order : orderReducer ,
    payment : paymentReducer ,
})
export const store = legacy_createStore(rootReducers ,applyMiddleware(thunk))