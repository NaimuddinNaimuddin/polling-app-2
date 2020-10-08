import * as constant from "../constant";

let initialState = {
    isSignup: false,
    isLoading: false,
    isError : false
};

const Signup = (state = initialState, action) => {
    switch (action.type) {
        case constant.SIGNUP_REQ:
            return {
                ...state,
                isSignup: false,
                isLoading: true,
                isError : false
            };
        case constant.SIGNUP_SUCCESS:
            return {
                ...state,
                isSignup: true,
                isLoading: false,
                response: action.payload
            };
        case constant.SIGNUP_ERR:
            return {
                ...state,
                isSignup: false,
                isLoading: false,
                isError : true,
                response: action.payload
            };
        default:
            return {
                ...state
            };
    }
};
export default Signup