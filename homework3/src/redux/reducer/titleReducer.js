import { types } from "../../types"


const initialState = {
    title: "hello word"
}


export const  titleReducer = (state= initialState ,action) => {
    switch (action.type) {
        case types.CHANGE_TITLE:
            return{...state, title:"I am new title"}
            default:
                return state
    }
}