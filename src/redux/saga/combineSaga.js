import { fork, all } from "redux-saga/effects"
import loginRequest from "./loginSaga"
import signupRequest from "./signupSaga"

function* allSaga() {
  yield all([
    fork(loginRequest),
    fork(signupRequest)
  ]);
}
export default allSaga