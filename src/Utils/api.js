const headers = { mode: "cors" }
const api_url = "http://10.73.73.23:7788"
const zoidberg_api_prod = "http://10.73.73.23:5000/api/v1"
// const zoidberg_api_debug = "http://10.66.8.150:5000/api/v1"
const zoidberg_api = zoidberg_api_prod

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

export function launchAutoInstall(opts) {
  return fetch(`${zoidberg_api}/autojob/lanuch`, {
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json"
    },
    method: "post",
    body: JSON.stringify(opts)
  }).then(resp => resp.ok)
}

export function launchAutoUpgrade(opts) {
  return fetch(`${zoidberg_api}/upgradejob/lanuch`, {
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json"
    },
    method: "post",
    body: JSON.stringify(opts)
  }).then(resp => resp.ok)
}

export function fetchLastJobResult() {
  return fetch(`${zoidberg_api}/autojob/last_result`, headers).then(resp =>
    resp.json()
  )
}
