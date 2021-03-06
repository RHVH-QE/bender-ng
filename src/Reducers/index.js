import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"
import {
  FETCH_SERVICE,
  FETCH_AUTO_STATUS,
  FETCH_AUTO_LOGS,
  FETCH_GITB,
  SELECT_TEST_TYPE_SYNC,
  FETCH_RHVH_BUILD,
  FETCH_PXE_PROFILES,
  ADD_UPGRADE_TASK,
  RM_UPGRADE_TASK,
  CLEAR_UPGRADE_TASK_QUEUE,
  FETCH_LAST_JOB_RESULT,
  FETCH_LOG_SUMMARY
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

function upgradeTaskQueue(state = [], action) {
  let { task } = action
  switch (action.type) {
    case ADD_UPGRADE_TASK:
      return state.concat(task)
    case RM_UPGRADE_TASK:
      let new_state = []
      state.forEach(x => {
        if (x.id !== task.id) {
          new_state.push(x)
        }
      })
      return new_state
    case CLEAR_UPGRADE_TASK_QUEUE:
      return []
    default:
      return state
  }
}

function lastJobResult(state = {}, action) {
  let { result } = action
  if (action.type === FETCH_LAST_JOB_RESULT) {
    return { ...result }
  }
  return state
}

function logSummary(state = {}, action) {
  let { logs } = action
  if (action.type === FETCH_LOG_SUMMARY) {
    return { ...logs }
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
  upgradeTaskQueue,
  lastJobResult,
  logSummary,
  routing: routerReducer
})
