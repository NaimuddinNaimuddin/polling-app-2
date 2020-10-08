import { takeLatest, put } from 'redux-saga/effects'
import * as constant from '../constant'
import { listSuccess, listErr } from '../action/index'

function* listSaga() {
    try {
        const response = yield fetch(`https://secure-refuge-14993.herokuapp.com/list_polls`)
        const res = yield response.json()
        res.error ?
            yield put(listErr(res.message)) :
            yield put(listSuccess(res.data));
    } catch (error) {
        yield put(listErr('Error'))
    }
}
function* listRequest() {
    yield takeLatest(constant.LIST_REQ, listSaga);
}
export default listRequest