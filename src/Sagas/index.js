import {
  call,
  put,
  takeLatest,
  all,
  cancelled,
  cancel,
  take,
  fork
} from 'redux-saga/effects'
import { delay } from 'redux-saga'
import * as API from '../Utils/api'
import * as Helper from '../Utils/helper'
import {
  FETCH_SERVICE,
  FETCH_SERVICE_ASYNC,
  FETCH_AUTO_STATUS,
  FETCH_AUTO_STATUS_ASYNC,
  FETCH_AUTO_LOGS,
  FETCH_AUTO_LOGS_ASYNC,
  START_BACKGROUND_SYNC,
  STOP_BACKGROUND_SYNC,
  FETCH_GITB,
  FETCH_GITB_ASYNC,
  FETCH_PXE_PROFILES,
  FETCH_PXE_PROFILES_ASYNC,
  FETCH_RHVH_BUILD,
  FETCH_RHVH_BUILD_ASYNC,
  FETCH_LAST_JOB_RESULT,
  FETCH_LAST_JOB_RESULT_ASYNC,
  FETCH_LOG_SUMMARY,
  FETCH_LOG_SUMMARY_ASYNC
} from '../Actions'

function* fetchService() {
  const srv_list = yield call(API.fetchServicesList)
  yield put({ type: FETCH_SERVICE, service: srv_list })
}
function* watchFetchService() {
  yield takeLatest(FETCH_SERVICE_ASYNC, fetchService)
}

function* fetchAutoStatus() {
  const tmp = yield call(API.fetchAutoStatus)
  const status = Helper.parseStatus(tmp)
  // console.log(status)
  yield put({ type: FETCH_AUTO_STATUS, status })
}
function* watchFetchAutoStatus() {
  yield takeLatest(FETCH_AUTO_STATUS_ASYNC, fetchAutoStatus)
}

function* fetchAutoLogs() {
  const tmp = yield call(API.fetchAutoLogs)
  const logs = Helper.parseLogs(tmp)
  // console.log(logs)
  yield put({ type: FETCH_AUTO_LOGS, logs })
}
function* watchFetchAutoLogs() {
  yield takeLatest(FETCH_AUTO_LOGS_ASYNC, fetchAutoLogs)
}

function* fetchGitb() {
  const branch = yield call(API.fetchCurrentGitBranch)
  yield put({ type: FETCH_GITB, branch })
}
function* watchFetchGitb() {
  yield takeLatest(FETCH_GITB_ASYNC, fetchGitb)
}

function* pollingAutoStatus() {
  try {
    while (true) {
      yield put({ type: FETCH_AUTO_STATUS_ASYNC })
      yield put({ type: FETCH_AUTO_LOGS_ASYNC })
      yield put({ type: FETCH_GITB_ASYNC })
      yield console.log('polling auto status')
      yield delay(10000)
    }
  } finally {
    if (yield cancelled()) {
      yield console.log('polling auto status stopped')
    }
  }
}
function* watchPolling() {
  while (yield take(START_BACKGROUND_SYNC)) {
    const bgSyncTask = yield fork(pollingAutoStatus)
    yield take(STOP_BACKGROUND_SYNC)
    yield cancel(bgSyncTask)
  }
}

function* fetchPxeProfiles() {
  const pxeProfiles_ = yield call(API.fetchPxeProfiles)
  const pxeProfiles = pxeProfiles_.sort().reverse()
  yield put({ type: FETCH_PXE_PROFILES, pxeProfiles })
}
function* watchFetchPxeProfiles() {
  yield takeLatest(FETCH_PXE_PROFILES_ASYNC, fetchPxeProfiles)
}

function* fetchRhvhBuilds() {
  const rhvhBuilds_ = yield call(API.fetchRhvhBuilds)
  const rhvhBuilds = rhvhBuilds_.sort().reverse()
  yield put({ type: FETCH_RHVH_BUILD, rhvhBuilds })
}
function* watchFetchRhvhBuilds() {
  yield takeLatest(FETCH_RHVH_BUILD_ASYNC, fetchRhvhBuilds)
}

function* fetchLastJobResult() {
  const result = yield call(API.fetchLastJobResult)
  yield put({ type: FETCH_LAST_JOB_RESULT, result })
}
function* watchFetchLastJobResult() {
  yield takeLatest(FETCH_LAST_JOB_RESULT_ASYNC, fetchLastJobResult)
}

function* fetchLogSummary() {
  const logs = yield call(API.fetchLogSummary)
  yield put({ type: FETCH_LOG_SUMMARY, logs })
}
function* watchFetchLogSummary() {
  yield takeLatest(FETCH_LOG_SUMMARY_ASYNC, fetchLogSummary)
}

// root saga
export default function* rootSaga() {
  yield all([
    watchFetchService(),
    watchFetchAutoStatus(),
    watchFetchAutoLogs(),
    watchFetchGitb(),
    watchFetchPxeProfiles(),
    watchFetchRhvhBuilds(),
    watchFetchLastJobResult(),
    watchFetchLogSummary(),
    watchPolling()
  ])
}
