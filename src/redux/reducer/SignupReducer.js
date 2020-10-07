import * as constant from "../constant";

let initialState = {
    isRegistion: false,
    isLoading: false,
    error: ''
};

const Signup = (state = initialState, action) => {
    switch (action.type) {
        case constant.SIGNUP_REQ:
            return {
                ...state,
                isRegistion: false,
                isLoading: true,
                error: ''
            };
        case constant.SIGNUP_SUCCESS:
            return {
                ...state,
                isRegistion: true,
                isLoading: false,
                response: action.payload,
                error: ''
            };
        case constant.SIGNUP_ERR:
            return {
                ...state,
                isRegistion: false,
                isLoading: false,
                error: action.payload
            };
        default:
            return {
                ...state
            };
    }
};
export default Signup