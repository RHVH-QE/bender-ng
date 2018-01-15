// import * as api from "../Utils/api"

export const FETCH_SERVICE = "FETCH_SERVICE"
export const FETCH_SERVICE_ASYNC = "FETCH_SERVICE_ASYNC"

export const FETCH_AUTO_STATUS = "FETCH_AUTO_STATUS"
export const FETCH_AUTO_STATUS_ASYNC = "FETCH_AUTO_STATUS_ASYNC"

export const FETCH_AUTO_LOGS = "FETCH_AUTO_LOGS"
export const FETCH_AUTO_LOGS_ASYNC = "FETCH_AUTO_LOGS_ASYNC"

export const FETCH_GITB = "FETCH_GITB"
export const FETCH_GITB_ASYNC = "FETCH_GITB_ASYNC"

export const START_BACKGROUND_SYNC = "START_BACKGROUND_SYNC"
export const STOP_BACKGROUND_SYNC = "STOP_BACKGROUND_SYNC"

export const SELECT_TEST_TYPE_SYNC = "SELECT_TEST_TYPE"

export const FETCH_PXE_PROFILES = "FETCH_PXE_PROFILES"
export const FETCH_PXE_PROFILES_ASYNC = "FETCH_PXE_PROFILES_ASYNC"

export const FETCH_RHVH_BUILD = "FETCH_RHVH_BUILD"
export const FETCH_RHVH_BUILD_ASYNC = "FETCH_RHVH_BUILD_ASYNC"

export const ADD_UPGRADE_TASK = "ADD_UPGRADE_TASK"
export const RM_UPGRADE_TASK = "RM_UPGRADE_TASK"
export const CLEAR_UPGRADE_TASK_QUEUE = "CLEAR_UPGRADE_TASK_QUEUE"

export const FETCH_LAST_JOB_RESULT = "FETCH_LAST_JOB_RESULT"
export const FETCH_LAST_JOB_RESULT_ASYNC = "FETCH_LAST_JOB_RESULT_ASYNC"

// actions creators
export const fetchService = service => ({ type: FETCH_SERVICE, service })
export const fetchServiceAsync = () => ({ type: FETCH_SERVICE_ASYNC })

export const fetchAutoStatus = status => ({ type: FETCH_AUTO_STATUS, status })
export const fetchAutoStatusAsync = () => ({ type: FETCH_AUTO_STATUS_ASYNC })

export const fetchAutoLogs = logs => ({ type: FETCH_AUTO_LOGS, logs })
export const fetchAutoLogsAsync = () => ({ type: FETCH_AUTO_LOGS_ASYNC })

export const fetchGitb = branch => ({ type: FETCH_GITB, branch })
export const fetchGitbAsync = () => ({ type: FETCH_GITB_ASYNC })

export const startBackgroundSync = () => ({ type: START_BACKGROUND_SYNC })
export const stopBackgroundSync = () => ({ type: STOP_BACKGROUND_SYNC })

export const selectTestTypeSync = testType => ({
  type: SELECT_TEST_TYPE_SYNC,
  testType
})

export const fetchPxePofiles = pxeProfiles => ({
  type: FETCH_PXE_PROFILES,
  pxeProfiles
})
export const fetchPxeProfilesAsync = () => ({ type: FETCH_PXE_PROFILES_ASYNC })

export const fetchRhvhBuilds = rhvhBuilds => ({
  type: FETCH_RHVH_BUILD,
  rhvhBuilds
})
export const fetchRhvhBuildsAsync = () => ({ type: FETCH_RHVH_BUILD_ASYNC })

export const addUpgradeTask = task => ({
  type: ADD_UPGRADE_TASK,
  task
})
export const rmUpgradeTask = task => ({
  type: RM_UPGRADE_TASK,
  task
})
export const clearUpgradeTaskQueue = () => ({ type: CLEAR_UPGRADE_TASK_QUEUE })

export const fetchLastJobResult = result => ({
  type: FETCH_LAST_JOB_RESULT,
  result
})
export const fetchLastJobResultAsync = () => ({
  type: FETCH_LAST_JOB_RESULT_ASYNC
})
