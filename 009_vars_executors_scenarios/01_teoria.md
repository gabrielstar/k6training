# Zmienne kontekstowe (context VARS), executory, scenariusze

## __VU,__ITER
K6 posiada dwie przydatne, [wbudowane zmienne globalne](https://k6.io/docs/using-k6/execution-context-variables/), ktore mogą służyć między innymi do randomizacji akcji:

**__VU** - obecny VU (1 ..n)

**__ITER** - obecna iteracja (0 .. m-1)
***
__ITER

> A numeric counter with the current iteration number for a specific VU. Zero-based.

__VU
> Current VU number. The value is assigned incrementally for each new VU instance. One-based. However, VU number is 0 while executing the setup and teardown functions.

Uruchommy test i sprawdźmy wartości tych zmiennych:
```powershell
    k6 run --vus=3 --iterations=4 .\02_http_get.js
```
output
```shell
INFO[0000] Test: this is user 1  and iter 0 iteration    source=console
INFO[0000] Test: this is user 3  and iter 0 iteration    source=console                                                 INFO[0000] Test: this is user 2  and iter 0 iteration    source=console                                                 INFO[0000] Test: this is user 1  and iter 1 iteration    source=console
```
## Scnariusze, Executory

### Scenariusze
[Scenariusze](https://k6.io/docs/using-k6/scenarios) są elementem Opcji i pozwalają na tworzenie bardziej zaawansowanych konfiguracji testowych, takich składających się z wielu 
pod konfiguracji.

```javascript
export let options = {
    scenarios: {
        smoke: {
            vus: 1,
            ...
        },
        stress: {
            vus: 100,
            ...
        }
    }

};
```

Scnariusze:
- scenariusze pozwalają na użycie różnych egzekutorów w każdym z nich. Egzekutory sterują rozdziałem iteracji między VU.
- mogą się uruchamiać szeregowo lub równolegle
- każdy scenariusz może mieć inne zmienne środowiskowe i tagi

### Egzekutory


[Egzekutory](https://k6.io/docs/using-k6/scenarios/executors/) rozdzielają VU i iteracje. Każdy robi to w trochę inny sposób i tester powinien dopasować najlepszy egzekutor do sytuacji.
![cookies](img/executors.png)