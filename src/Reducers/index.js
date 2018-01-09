import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"
import { FETCH_SERVICE, FETCH_AUTO_STATUS, FETCH_AUTO_LOGS } from "../Actions"

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

export default combineReducers({
  services,
  autoStatus,
  autoLogs,
  routing: routerReducer
})
