import { types } from "../types";



export const initlalState = {
    users: [0],
    name:""
}


export const createUsersReducer = (state = initlalState, action) => {

 switch (action.type) {
    case types.CREATE_USER:
        return {
            ...state, users: [...state.users, +action.payload + 10]
        }
        default:
            return state
 }
}