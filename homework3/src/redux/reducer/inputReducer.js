import { types } from "../../types";


const initialState ={
    data : [],
}

export const inputReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_DATA:
            return {
                ...state, data:{
                    [action.payload.name]:
                action.payload.value +10}

            }
            case types.CLEAR_DATA:
                return {
                    ...state, data: {
                        [action.payload.name]: ""
                    }
                }
                case  types.INCREMENT_NUMBER:
                 return { ...state, data: +action.payload+ 10 }
                   
                
                default:
                    return state
    }
}

