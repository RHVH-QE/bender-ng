import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"
import {
  FETCH_SERVICE,
  FETCH_AUTO_STATUS,
  FETCH_AUTO_LOGS,
  FETCH_GITB,
  SELECT_TEST_TYPE_SYNC,
  FETCH_RHVH_BUILD,
  FETCH_PXE_PROFILES
} from "../Actions"

function services(state = [], action) {
  let { service } = action
  if (action.type === FETCH_SERVICE) {
    return state.concat(service)
  }
  return state
}

function autoStatus(state = {}, action) {
  let { status } = action
  if (action.type === FETCH_AUTO_STATUS) {
    return (state = status)
  }
  return state
}

function autoLogs(state = {}, action) {
  let { logs } = action
  if (action.type === FETCH_AUTO_LOGS) {
    return (state = logs)
  }
  return state
}

function gitBranch(state = "master", action) {
  let { branch } = action
  if (action.type === FETCH_GITB) {
    return (state = branch)
  }
  return state
}

function testType(state = "auto_install", action) {
  let { testType } = action
  if (action.type === SELECT_TEST_TYPE_SYNC) {
    return (state = testType)
  }
  return state
}

function pxeProfiles(state = [], action) {
  let { pxeProfiles } = action
  if (action.type === FETCH_PXE_PROFILES) {
    return state.concat(pxeProfiles)
  }
  return state
}

function rhvhBuilds(state = [], action) {
  let { rhvhBuilds } = action
  if (action.type === FETCH_RHVH_BUILD) {
    return state.concat(rhvhBuilds)
  }
  return state
}

export default combineReducers({
  services,
  autoStatus,
  autoLogs,
  gitBranch,
  testType,
  pxeProfiles,
  rhvhBuilds,
  routing: routerReducer
})
