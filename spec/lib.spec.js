const { TimeSpan } = require('../lib')

describe('TimeSpan', () => {
  it('is a function', () => {
    expect(typeof TimeSpan).toBe('function')
  })
  it('has arity of 0 due to default values of params', () => {
    expect(TimeSpan.length).toEqual(0)
  })
  it('returns an object with known properties', () => {
    var obj = new TimeSpan(1)
    var keys = Object.keys(obj)
    expect(keys.includes('seconds')).toBe(true)
    expect(keys.includes('milliseconds')).toBe(true)
    expect(keys.includes('microseconds')).toBe(true)
    expect(keys.includes('nanoseconds')).toBe(true)

  })
})

describe('TimeSpan objects', () => {
  it('contains seconds and other values', () => {
    var obj = new TimeSpan(1)
    expect(obj.seconds).toEqual(1)
    expect(obj.milliseconds).toEqual(1 * 1000)
    expect(obj.microseconds).toEqual(1 * 1000 * 1000)
    expect(obj.nanoseconds).toEqual(1 * 1000 * 1000 * 1000)
  })
})

describe('TimeSpan.today()', () => {
  it('gives seconds in the day since 00:00:00:000', () => {
    function expected() {
      const d = new Date()
      const seconds = Math.floor((d - new Date(d.getFullYear(), d.getMonth(), d.getDate())) / 1000)
      return new TimeSpan(seconds)
    }
    expect(TimeSpan.today().isEqual(expected())).toEqual(true)
  })
})

describe('TimeSpan difference', () => {
  it('gives an object with difference in time', () => {
    const a = new TimeSpan(1000)
    const b = new TimeSpan(200)
    const c = a.difference(b)
    expect(typeof c).toEqual('object')
    expect(c.seconds).toEqual(800)
    expect(c.isDifferentObject(b)).toBe(true)
    expect(c.isDifferentObject(a)).toBe(true)
  })
  it('gives an object with negative difference in time', () => {
    const a = new TimeSpan(1000)
    const b = new TimeSpan(200)
    const c = b.difference(a)
    expect(typeof c).toEqual('object')
    expect(c.seconds).toEqual(-800)
    expect(c.isDifferentObject(b)).toBe(true)
    expect(c.isDifferentObject(a)).toBe(true)
  })
})
