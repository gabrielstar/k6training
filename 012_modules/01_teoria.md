#Moduły

Oprócz grupowania, funckji i tagów do organizacji testów przydaje się pozdział kodu testu na [moduły](https://github.com/grafana/k6-example-woocommerce):

W tej części zobaczymy jak zrobić. Przykład:

```javascript
import { zaloguj } from "./logowanie.js";
import { kup } from "./kupowanie.js";

export default function main() {
    zaloguj();
    kup();
}
```


