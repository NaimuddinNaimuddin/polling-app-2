import { createAction } from "redux-actions";
import * as constant from "../constant";

export const loginReq = createAction(constant.LOGIN_REQ);
export const loginSuccess = createAction(constant.LOGIN_SUCCESS);
export const loginErr = createAction(constant.LOGIN_ERR);

export const signupReq = createAction(constant.SIGNUP_REQ);
export const signupSuccess = createAction(constant.SIGNUP_SUCCESS);
export const signupErr = createAction(constant.SIGNUP_ERR);

export const listReq = createAction(constant.LIST_REQ);
export const listSuccess = createAction(constant.LIST_SUCCESS);
export const listErr = createAction(constant.LIST_ERR);

export const dellistReq = createAction(constant.DEL_LIST_REQ);
export const dellistSuccess = createAction(constant.DEL_LIST_SUCCESS);
export const dellistErr = createAction(constant.DEL_LIST_ERR);

export const addlistReq = createAction(constant.ADD_LIST_REQ);
export const addlistSuccess = createAction(constant.ADD_LIST_SUCCESS);
export const addlistErr = createAction(constant.ADD_LIST_ERR);

export const deloptionlistReq = createAction(constant.DEL_OPTION_LIST_REQ);
export const deloptionlistSuccess = createAction(constant.DEL_OPTION_LIST_SUCCESS);
export const deloptionlistErr = createAction(constant.DEL_OPTION_LIST_ERR);

export const addoptionlistReq = createAction(constant.ADD_OPTION_LIST_REQ);
export const addoptionlistSuccess = createAction(constant.ADD_OPTION_LIST_SUCCESS);
export const addoptionlistErr = createAction(constant.ADD_OPTION_LIST_ERR);

export const voteReq = createAction(constant.VOTE_REQ);
export const voteSuccess = createAction(constant.VOTE_SUCCESS);
export const voteErr = createAction(constant.VOTE_ERR);

export const titleReq = createAction(constant.TITLE_REQ);
export const titleSuccess = createAction(constant.TITLE_SUCCESS);
export const titleErr = createAction(constant.TITLE_ERR);