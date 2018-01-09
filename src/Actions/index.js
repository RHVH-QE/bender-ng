// import * as api from "../Utils/api"

export const FETCH_SERVICE = "FETCH_SERVICE"
export const FETCH_SERVICE_ASYNC = "FETCH_SERVICE_ASYNC"

export const FETCH_AUTO_STATUS = "FETCH_AUTO_STATUS"
export const FETCH_AUTO_STATUS_ASYNC = "FETCH_AUTO_STATUS_ASYNC"

export const FETCH_AUTO_LOGS = "FETCH_AUTO_LOGS"
export const FETCH_AUTO_LOGS_ASYNC = "FETCH_AUTO_LOGS_ASYNC"

// actions creators
export const fetchService = service => ({ type: FETCH_SERVICE, service })
export const fetchServiceAsync = () => ({ type: FETCH_SERVICE_ASYNC })

export const fetchAutoStatus = status => ({ type: FETCH_AUTO_STATUS, status })
export const fetchAutoStatusAsync = () => ({ type: FETCH_AUTO_STATUS_ASYNC })

export const fetchAutoLogs = logs => ({ type: FETCH_AUTO_LOGS, logs })
export const fetchAutoLogsAsync = () => ({ type: FETCH_AUTO_LOGS_ASYNC })
