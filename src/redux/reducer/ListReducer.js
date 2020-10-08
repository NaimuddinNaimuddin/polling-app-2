import * as constant from "../constant";

let initialState = {
    isLoading: false
}
function ListReducer(state = initialState, action) {
    switch (action.type) {
        case constant.LIST_REQ: {
                  return {
                ...state,
                isLoading: true,
            }
        }
        case constant.LIST_SUCCESS: {
                       return {
                ...state,
                isLoading: false,
                response: action.payload
            }
        }
        case constant.LIST_ERR: {
                     return {
                ...state,
                isLoading: false,
                response: action.payload
            }
        }
        default:
            return state
    }
}
export default ListReducer





