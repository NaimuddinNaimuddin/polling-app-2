import { takeLatest, put } from 'redux-saga/effects'
import * as constant from '../constant'
import { signupSuccess, signupErr } from '../action/index'

function* signupSaga(action) {
    const response = yield fetch(`https://secure-refuge-14993.herokuapp.com/add_user?username=${action.payload.username}&password=${action.payload.password}&role=${action.payload.role}`)
    const data = yield response.json()
    data.error ? yield put(signupErr(data)) : yield put(signupSuccess(data))
}

function* signupRequest() {
    yield takeLatest(constant.SIGNUP_REQ, signupSaga);
}

export default signupRequest