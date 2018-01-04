// import * as api from "../Utils/api"

export const FETCH_SERVICE = "FETCH_SERVICE"

export function fetchService(srvs) {
  return { type: FETCH_SERVICE, srvs }
}
