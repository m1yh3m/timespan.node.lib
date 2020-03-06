const { v4 } = require('uuid')

const MAX_SECONDS = 999999999999
const MAX_MILLI_SECONDS = MAX_SECONDS * 1000
const MAX_MICRO_SECONDS = MAX_MILLI_SECONDS * 1000
const MAX_NANO_SECONDS = MAX_MICRO_SECONDS * 1000

class TimeSpan {
  constructor(seconds = 0, minutes = 0, hours = 0, days = 0) {
    this.seconds = (((days * 24 + hours) * 60 + minutes) * 60 + seconds)
    this.milliseconds = this.seconds * 1000
    this.microseconds = this.milliseconds * 1000
    this.nanoseconds = this.microseconds * 1000

    this.seconds = this.seconds > MAX_SECONDS ? MAX_SECONDS : this.seconds
    this.milliseconds = this.milliseconds > MAX_MILLI_SECONDS ? MAX_MILLI_SECONDS : this.milliseconds
    this.microseconds = this.microseconds > MAX_MICRO_SECONDS ? MAX_MICRO_SECONDS : this.microseconds
    this.nanoseconds = this.nanoseconds > MAX_NANO_SECONDS ? MAX_NANO_SECONDS : this.nanoseconds

    this.id = v4()
  }

  isDifferentObject(than) {
    return this.id !== than.id
  }

  isEqual(to) {
    return this.seconds === to.seconds &&
      this.milliseconds === to.milliseconds &&
      this.microseconds === to.microseconds &&
      this.nanoseconds === to.nanoseconds
  }

  isDeepEqual(to) {
    return this.isEqual(to) && this.id === to.id
  }

  isSmaller(than) {
    return this.seconds < than.seconds &&
      this.milliseconds < than.milliseconds &&
      this.microseconds < than.microseconds &&
      this.nanoseconds < than.nanoseconds
  }

  isBigger(than) {
    return this.seconds > than.seconds &&
      this.milliseconds > than.milliseconds &&
      this.microseconds > than.microseconds &&
      this.nanoseconds > than.nanoseconds
  }

  addSeconds(seconds) {
    return new TimeSpan(this.seconds + seconds)
  }

  addMinutes(minutes) {
    return new TimeSpan(this.seconds + (minutes * 60))
  }

  addHours(hours) {
    return new TimeSpan(this.seconds + (hours * 60 * 60))
  }

  addDays(days) {
    return new TimeSpan(this.seconds + (days * 24 * 60 * 60))
  }

  get days() {
    return Math.floor(this.seconds / 24 / 60 / 60)
  }

  get totalDays() {
    return this.seconds / 24 / 60 / 60
  }

  get hours() {
    return Math.floor(this.seconds / 60 / 60)
  }
  get totalHours() {
    return this.seconds / 60 / 60
  }

  get minutes() {
    return Math.floor(this.seconds / 60)
  }

  get totalMinutes() {
    return this.seconds / 60
  }

  difference(b) {
    return new TimeSpan(this.seconds - b.seconds)
  }

  static today() {
    const d = new Date()
    const seconds = Math.floor((d - new Date(d.getFullYear(), d.getMonth(), d.getDate())) / 1000)
    return new TimeSpan(seconds)
  }
}

module.exports = {
  TimeSpan
}
