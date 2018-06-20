function parseTestTier(val) {
  let v = parseInt(val, 10)
  let ret = []
  let mapper = {
    2: 'ANACONDA_TIER1',
    4: 'ANACONDA_TIER2',
    8: 'KS_TIER1',
    16: 'KS_TIER2',
    1: 'DEBUG_TIER',
    32: 'UPGRADE_TIER1',
    64: 'UPGRADE_TIER2',
    128: 'VDSM_TIER'
  }
  for (let i of [1, 2, 4, 8, 16, 32, 64, 128]) {
    if (v & i) {
      ret.push(mapper[i])
    }
  }
  return ret.join(' | ')
}

export function parseStatus(val) {
  let { cb_profile, hosts, test_level, running } = val
  return {
    pxe: cb_profile,
    host: Object.keys(hosts).join(' || '),
    tier: parseTestTier(test_level),
    running: running === '0' ? false : true
  }
}

export function parseLogs(val) {
  let { log, path } = val
  let rs = path.split('/')
  return {
    build: rs[rs.length - 2],
    ks: rs[rs.length - 1],
    log: log
  }
}

export const autoInstallTiers = [
  { key: '1', text: 'DEBUG_TIER', value: 1 },
  { key: '2', text: 'ANACONDA_TIER1', value: 2 },
  { key: '3', text: 'ANACONDA_TIER2', value: 4 },
  { key: '4', text: 'KS_TIER1', value: 8 },
  { key: '5', text: 'KS_TIER2', value: 16 },
  { key: '6', text: 'VDSM_TIER1', value: 128 }
]

export const autoUpgradeTiers = [
  { key: '7', text: 'Upgrade Tier01', value: '32' },
  { key: '8', text: 'Upgrade Tier02', value: '64' }
]

export const rhvh4GABuilds = [
  'redhat-virtualization-host-4.1-20170421.0',
  'redhat-virtualization-host-4.1-20170202.0',
  'redhat-virtualization-host-4.0-20170307.1',
  'redhat-virtualization-host-4.0-20160201.0',
  'redhat-virtualization-host-4.0-20160104.1',
  'redhat-virtualization-host-4.0-20161116.1',
  'redhat-virtualization-host-4.0-20160919.0',
  'redhat-virtualization-host-4.0-20160817.0',
  'redhat-virtualization-host-4.1-20170522.0',
  'redhat-virtualization-host-4.1-20170616.0',
  'redhat-virtualization-host-4.1-20170706.0',
  'redhat-virtualization-host-4.1-20170808.0',
  'redhat-virtualization-host-4.1-20170816.2',
  'redhat-virtualization-host-4.1-20171002.0',
  'redhat-virtualization-host-4.1-20171101.0',
  'redhat-virtualization-host-4.1-20171207.0',
  'redhat-virtualization-host-4.1-20180126.0',
  'redhat-virtualization-host-4.1-20180314.0',
  'redhat-virtualization-host-4.1-20180410.1',
  'redhat-virtualization-host-4.1-20180426.0',
  'redhat-virtualization-host-4.2-20180104.0',
  'redhat-virtualization-host-4.2-20180322.0',
  'redhat-virtualization-host-4.2-20180508.0',
  'redhat-virtualization-host-4.2-20180518.2',
  'redhat-virtualization-host-4.2-20180531.0'
].map(x => ({ key: x, text: x, value: x }))

export function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  )
}

export function genHighChartConfig(cityName, data) {
  if (data.length === 0) {
    return {}
  }
  let t = data[0].reverse()
  let p = data[2].map(parseFloat).reverse()
  let c = data[1].map(parseFloat).reverse()

  return {
    credits: {
      enabled: false
    },
    title: {
      text: data[0][0] + ' ' + cityName + ' AQI is  ' + data[2][0]
    },
    subtitle: {
      text: 'Current Conc is ' + data[1][0]
    },
    xAxis: {
      categories: t
    },
    yAxis: {
      title: {
        text: 'Air Index'
      }
    },
    series: [
      {
        name: 'PM2.5',
        color: '#FF0000',
        data: p,
        type: 'line'
      },
      {
        name: 'Conc',
        color: '#000000',
        data: c,
        type: 'column'
      }
    ]
  }
}
