import * as constant from "../constant";

let initialState = {
    isLoading: false,
    isLogin: false
};
function LoginReducer(state = initialState, action) {
    switch (action.type) {
        case constant.LOGIN_REQ: {
                return {
                ...state,
                isLoading: true,
                isLogin: false
            }
        }
        case constant.LOGIN_SUCCESS: {
                    return {
                ...state,
                isLoading: false,
                isLogin: true,
                response : action.payload
            }
        }
        case constant.LOGIN_ERR: {
                     return {
                ...state,
                isLoading: false,
                isLogin: false,
                response : action.payload
            }
        }
        default:
            return state
    }
}
export default LoginReducer





