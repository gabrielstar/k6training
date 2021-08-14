# Cykl życia testu

[Istnieją 4 cykle życia testu w k6](https://k6.io/docs/using-k6/test-life-cycle/):
- **init** (init code):
  - uruchamiany 1x na test na początku testu
  - może czytać z dysku np. pliki
  - dzięki wydzieleniu fazy init testowanie rozproszone jest prostsze (dla twórców k6)
  - k6 dostarczy wszystkie dane do fazy VU w pamięci
- **setup** (setup code):
  - uruchamiany 1x na test
  - faza przygotowania testu 
  - może przekazać dane do fazy VU
  - przekazane dane są read-only
- **VU** (VU code):
  - wymagany przynajmniej blok default, 
  - tutaj są wykonywane akcje w ramach iteracji użytkownika
  - nie można importować modułów
  - nie można czytać z dysku! - ma czytać z pamięci, żeby systemy RW nie były potrzebne w trybie rozproszonym
- **teardown** (teardown code), faza finalizacji
  - uruchamiany 1x na test
  - ma dostęp do danych z fazy setup
    
```js
// 1. init code start
var counter = 0;
var file = ...;
// 2. init code end
export function setup() {
  // 2. setup code
  let data = {}
  return data
}

export default function (data) {
  // 3. VU code
  counter ++; //data from init code is availabe between iteartions of the same VU
}

export function teardown(data) {
  // 4. teardown code
}
```

Z linii poleceń można pomijać np. setup czy teardown

```powershell
 k6 run --no-setup --no-teardown ...
```
