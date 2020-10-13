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
        case constant.DEL_LIST_REQ: {
            return {
                ...state,
                isLoading: true,
                isDel: false
            }
        }
        case constant.DEL_LIST_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isDel: true
            }
        }
        case constant.DEL_LIST_ERR: {
            return {
                ...state,
                isLoading: false,
                isDel: false
            }
        }
        case constant.DEL_OPTION_LIST_REQ: {
            return {
                ...state,
                isLoading: true,
                isoptionDel: false
            }
        }
        case constant.DEL_OPTION_LIST_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isoptionDel: true
            }
        }
        case constant.DEL_OPTION_LIST_ERR: {
            return {
                ...state,
                isLoading: false,
                isoptionDel: false
            }
        }
        case constant.ADD_OPTION_LIST_REQ: {
            return {
                ...state,
                isLoading: true,
                isoptionAdd: false
            }
        }
        case constant.ADD_OPTION_LIST_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isoptionAdd: true
            }
        }
        case constant.ADD_OPTION_LIST_ERR: {
            return {
                ...state,
                isLoading: false,
                isoptionAdd: false
            }
        }
        case constant.ADD_LIST_REQ: {
            return {
                ...state,
                isLoading: true,
                isAdd: false
            }
        }
        case constant.ADD_LIST_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isAdd: true
            }
        }
        case constant.ADD_LIST_ERR: {
            return {
                ...state,
                isLoading: false,
                isAdd: false
            }
        }
        case constant.VOTE_REQ: {
            return {
                ...state,
                isVoteLoading: true,
                isVote: false
            }
        }
        case constant.VOTE_SUCCESS: {
            return {
                ...state,
                isVoteLoading: false,
                isVote: true
            }
        }
        case constant.VOTE_ERR: {
            return {
                ...state,
                isVoteLoading: false,
                isVote: false
            }
        }
        default:
            return state
    }
}
export default ListReducer





