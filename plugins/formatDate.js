export default ({ app }, inject) => {
  inject('showDate', date => {
    const now = app.$moment()
    const diffDate = now.diff(date, 'seconds')
    let dateResult

    if (diffDate < 86400) {
      dateResult = app.$moment(date).fromNow()
    } else if (diffDate >= 86400) {
      dateResult = app.$moment(date).calendar()
    }
    return dateResult
  })
}
