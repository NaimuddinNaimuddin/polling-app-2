import { takeLatest, put } from 'redux-saga/effects'
import * as constant from '../constant'
import axios from 'axios'
import {
    voteErr, voteSuccess,
    listSuccess, listErr, dellistSuccess, dellistErr,
    deloptionlistSuccess, deloptionlistErr,
    addoptionlistSuccess, addoptionlistErr,
    addlistSuccess, addlistErr
} from '../action/index'

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
function* addlistSaga(action) {
    let option = action.payload.options;
    let length = option.length;
    let optionString = "";
    option.map((opt, index) => {
        if (index === length - 1) {
            optionString += opt;
        } else {
            optionString += opt + "____";
        }
    });
    try {
        const url = `https://secure-refuge-14993.herokuapp.com/add_poll?title=${action.payload.title}%20&options=${optionString}`
        const response = yield fetch(url)
        const res = yield response.json()
        res.error ?
            yield put(addlistErr(res)) :
            yield put(addlistSuccess(res));
    } catch (error) {
        yield put(dellistErr('Error'))
    }
}
function* dellistSaga(action) {
    try {
        const response = yield fetch(`https://secure-refuge-14993.herokuapp.com/delete_poll?id=${action.payload}`)
        const res = yield response.json()
        res.error ?
            yield put(dellistErr(res)) :
            yield put(dellistSuccess(res));
    } catch (error) {
        yield put(dellistErr('Error'))
    }
}
function* delOptionlistSaga(action) {

    const { id, option_text } = action.payload
    const url = `https://secure-refuge-14993.herokuapp.com/delete_poll_option?id=${id}&option_text=${option_text}`
    try {
        const response = yield fetch(url)
        const res = yield response.json()
        res.error ?
            yield put(deloptionlistErr(res)) :
            yield put(deloptionlistSuccess(res));
    } catch (error) {
        yield put(dellistErr('Error'))
    }
}
function* addOptionlistSaga(action) {
    const { id, optionText } = action.payload
    const url = `https://secure-refuge-14993.herokuapp.com/add_new_option?id=${id}&option_text=${optionText}`
    try {
        const response = yield fetch(url)
        const res = yield response.json()
        res.error ?
            yield put(addoptionlistErr(res)) :
            yield put(addoptionlistSuccess(res));
    } catch (error) {
        yield put(dellistErr('Error'))
    }
}
function* voteSaga(action) {
    console.log(action)
    const { id, text } = action.payload
    const url = `https://secure-refuge-14993.herokuapp.com/do_vote?id=${id}&option_text=${text}`
    // const url = `https://secure-refuge-14993.herokuapp.com/add_new_option?id=${id}&option_text=${text}`
    try {
        const res = yield axios({
            method: 'get',
            url: url,
            headers: {
                access_token: localStorage.getItem('token')
            }
        })
        console.log(res)
        res.error ?
            yield put(voteErr(res)) :
            yield put(voteSuccess(res));
    } catch (error) {
        yield put(dellistErr('Error'))
    }
}
function* listRequest() {
    yield takeLatest(constant.LIST_REQ, listSaga);
    yield takeLatest(constant.ADD_LIST_REQ, addlistSaga);
    yield takeLatest(constant.DEL_LIST_REQ, dellistSaga);
    yield takeLatest(constant.DEL_OPTION_LIST_REQ, delOptionlistSaga);
    yield takeLatest(constant.ADD_OPTION_LIST_REQ, addOptionlistSaga);
    yield takeLatest(constant.VOTE_REQ, voteSaga);
}
export default listRequest