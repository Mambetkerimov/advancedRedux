import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from "./reducer/UserSlice";
import {postAPI} from "../services/PostService";

const rootReducer = combineReducers({
    userReducer,
    [postAPI.reducerPath]: postAPI.reducer
})

export const setupstore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(postAPI.middleware)
    })
}

export type RooteState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupstore>
export type AppDispatch = AppStore["dispatch"];