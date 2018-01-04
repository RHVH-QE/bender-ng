import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"
import { FETCH_SERVICE } from "../Actions/index"

function services(state = [{ name: "" }], action) {
  let { srvs } = action
  if (action.type === FETCH_SERVICE) {
    return srvs
  }
  return state
}

export default combineReducers({
  services,
  routing: routerReducer
})
