import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from "./reducer/UserSlice";

const rootReducer = combineReducers({
    userReducer
})

export const setupstore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RooteState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupstore>
export type AppDispatch = AppStore["dispatch"];