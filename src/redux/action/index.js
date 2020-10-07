import { createAction } from "redux-actions";
import * as constant from "../constant";

export const loginReq = createAction(constant.LOGIN_REQ);
export const loginSuccess = createAction(constant.LOGIN_SUCCESS);
export const loginErr = createAction(constant.LOGIN_ERR);
export const signupReq = createAction(constant.SIGNUP_REQ);
export const signupSuccess = createAction(constant.SIGNUP_SUCCESS);
export const signupErr = createAction(constant.SIGNUP_ERR);

