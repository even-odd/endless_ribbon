export function resCheckStatus(res) {
  if (res.status !== 200 && res.status !== 201) {
    return Promise.reject(new Error(res.statusText))
  }
  return Promise.resolve(res)
}

export function resToJSON(res) {
  if (!res.json) {
    return Promise.reject(new Error('is not json'))
  }
  return res.json()
}
