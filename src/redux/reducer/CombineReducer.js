import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import SignupReducer from "./SignupReducer";
import ListReducer from "./ListReducer";

const RootReducer = combineReducers({
  LoginReducerstatus: LoginReducer,
  SignupReducerstatus: SignupReducer,
  ListReducerstatus: ListReducer
});
export default RootReducer;