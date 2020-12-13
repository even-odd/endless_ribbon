export function throttle() {
  let isThrottled = false

  return (func, ms) => {
    if (isThrottled) {
      // console.debug('func was Throttled!')
      return
    }

    isThrottled = true

    setTimeout(function () {
      isThrottled = false
      // console.debug('func was called')
      func()
    }, ms)
  }
}
