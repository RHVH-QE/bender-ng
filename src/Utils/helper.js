function parseTestTier(val) {
  let v = parseInt(val)
  let ret = []
  let mapper = {
    2: "ANACONDA_TIER1",
    4: "ANACONDA_TIER2",
    8: "KS_TIER1",
    16: "KS_TIER2",
    1: "DEBUG_TIER",
    32: "UPGRADE_TIER1",
    64: "UPGRADE_TIER2",
    128: "VDSM_TIER"
  }
  for (let i of [1, 2, 4, 8, 16, 32, 64, 128]) {
    if (v & i) {
      ret.push(mapper[i])
    }
  }
  return ret.join(" | ")
}

export function parseStatus(val) {
  let { cb_profile, hosts, test_level, running } = val
  return {
    pxe: cb_profile,
    host: Object.keys(hosts).join(" || "),
    tier: parseTestTier(test_level),
    running: running === "0" ? true : false
  }
}

export function parseLogs(val) {
  let { log, path } = val
  let rs = path.split("/")
  return {
    build: rs[rs.length - 2],
    ks: rs[rs.length - 1],
    log: log
  }
}
