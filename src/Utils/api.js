const headers = { mode: "cors" }
const api_url = "http://10.73.73.23:7788"

export function fetchServicesList() {
  return fetch(`${api_url}/conf.json`, headers).then(resp => resp.json())
}
