import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import thunk from "redux-thunk"
import { noteReducer } from "./notes/note.reducer.js"
import userReducer from "./users/user.reducer.js"

export let rootReducer = combineReducers({
    userReducer:userReducer,
    noteReducer:noteReducer
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))