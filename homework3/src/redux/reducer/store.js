import {combineReducers} from "redux";
import { inputReducer } from "./inputReducer";
import { titleReducer } from "./titleReducer";
import { userReducer } from "./usersReducer";


export const rootReducer = combineReducers({
    title: titleReducer,
    input: inputReducer,
    users: userReducer
})
