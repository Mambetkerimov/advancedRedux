import {combineReducers, configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({

})

export const setupstore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RooteState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupstore>
export type AppDispatch = AppStore["dispatch"];