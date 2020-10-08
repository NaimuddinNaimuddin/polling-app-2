import { fork, all } from "redux-saga/effects"
import loginRequest from "./loginSaga"
import signupRequest from "./signupSaga"
import listSaga from "./ListSaga"

function* allSaga() {
  yield all([
    fork(loginRequest),
    fork(signupRequest),
    fork(listSaga)
  ]);
}
export default allSaga