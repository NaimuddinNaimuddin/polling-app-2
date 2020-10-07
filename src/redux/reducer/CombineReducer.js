import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import SignupReducer from "./SignupReducer";

const RootReducer = combineReducers({
  LoginReducerstatus: LoginReducer,
  SignupReducerstatus: SignupReducer
});

export default RootReducer;