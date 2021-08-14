# Cykl życia testu

[Istnieją 4 cykle życia testu w k6](https://k6.io/docs/using-k6/test-life-cycle/):
- init (init code)
- setup (setup code)
- VU (VU code)
- teardown (teardown code)

```js
// 1. init code

export function setup() {
  // 2. setup code
}

export default function (data) {
  // 3. VU code
}

export function teardown(data) {
  // 4. teardown code
}
```


```powershell
 k6 run --no-setup --no-teardown ...
```
