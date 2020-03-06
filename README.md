# timespan.node.lib

```javascript
new l.TimeSpan(999999999999)
TimeSpan {
  seconds: 999999999999,
  milliseconds: 999999999999000,
  microseconds: 999999999999000000,
  nanoseconds: 999999999999000000000 }

new l.TimeSpan(0, 9999999999)
TimeSpan {
  seconds: 599999999940,
  milliseconds: 599999999940000,
  microseconds: 599999999940000000,
  nanoseconds: 599999999940000000000 }

new l.TimeSpan(0, 0, 99999999)
TimeSpan {
  seconds: 359999996400,
  milliseconds: 359999996400000,
  microseconds: 359999996400000000,
  nanoseconds: 359999996400000000000 }

new l.TimeSpan(0, 0, 0, 9999999)
TimeSpan {
  seconds: 863999913600,
  milliseconds: 863999913600000,
  microseconds: 863999913600000000,
  nanoseconds: 863999913600000000000 }

new l.TimeSpan(39, 46, 1, 11574074)
TimeSpan {
  seconds: 999999999999,
  milliseconds: 999999999999000,
  microseconds: 999999999999000000,
  nanoseconds: 999999999999000000000 }
```

## Use cases

### maximum via days, hours, minutes, seconds

- days: 11574074
- hours: 1
- minutes: 46
- seconds: 30

### TimeSpan today

A static function

`TimeSpan.today()`
