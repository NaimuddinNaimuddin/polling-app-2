import * as constant from "../constant";

let initialState = {
    isLoading: false,
    isLogin: false
};
function LoginReducer(state = initialState, action) {
    switch (action.type) {
        case constant.LOGIN_REQ: {
            console.log('login req')
            return {
                ...state,
                isLoading: true,
                isLogin: false
            }
        }
        case constant.LOGIN_SUCCESS: {
            console.log('login success')
            return {
                ...state,
                isLoading: false,
                isLogin: true,
                response : action.payload
            }
        }
        case constant.LOGIN_ERR: {
            console.log('login error')
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





