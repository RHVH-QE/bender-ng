const headers = { mode: "cors" }
const api_url = "http://10.73.73.23:7788"
const zoidberg_api = "http://10.73.73.23:5000/api/v1"

export function fetchServicesList() {
  return fetch(`${api_url}/conf.json`, headers).then(resp => resp.json())
}

export function fetchAutoStatus() {
  return fetch(`${zoidberg_api}/current/status`, headers).then(resp =>
    resp.json()
  )
}

export function fetchAutoLogs() {
  return fetch(`${zoidberg_api}/current/build`, headers).then(resp =>
    resp.json()
  )
}

export function fetchCurrentGitBranch() {
  return fetch(`${zoidberg_api}/git/branch`, headers).then(resp => resp.text())
}

export function fetchPxeProfiles() {
  return fetch(`${zoidberg_api}/pxe/profiles`, headers).then(resp =>
    resp.json()
  )
}

export function fetchRhvhBuilds() {
  return fetch(`${zoidberg_api}/rhvh_builds/4`, headers).then(resp =>
    resp.json()
  )
}
