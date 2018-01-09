import { call, put, takeEvery, all } from "redux-saga/effects"
import * as API from "../Utils/api"
import * as Helper from "../Utils/helper"
import {
  FETCH_SERVICE,
  FETCH_SERVICE_ASYNC,
  FETCH_AUTO_STATUS,
  FETCH_AUTO_STATUS_ASYNC,
  FETCH_AUTO_LOGS,
  FETCH_AUTO_LOGS_ASYNC
} from "../Actions"

function* fetchService() {
  const srv_list = yield call(API.fetchServicesList)
  yield put({ type: FETCH_SERVICE, service: srv_list })
}
function* watchFetchService() {
  yield takeEvery(FETCH_SERVICE_ASYNC, fetchService)
}

function* fetchAutoStatus() {
  const tmp = yield call(API.fetchAutoStatus)
  const status = Helper.parseStatus(tmp)
  // console.log(status)
  yield put({ type: FETCH_AUTO_STATUS, status })
}
function* watchFetchAutoStatus() {
  yield takeEvery(FETCH_AUTO_STATUS_ASYNC, fetchAutoStatus)
}

function* fetchAutoLogs() {
  const tmp = yield call(API.fetchAutoLogs)
  const logs = Helper.parseLogs(tmp)
  // console.log(logs)
  yield put({ type: FETCH_AUTO_LOGS, logs })
}
function* watchFetchAutoLogs() {
  yield takeEvery(FETCH_AUTO_LOGS_ASYNC, fetchAutoLogs)
}
// root saga
export default function* rootSaga() {
  yield all([watchFetchService(), watchFetchAutoStatus(), watchFetchAutoLogs()])
}
