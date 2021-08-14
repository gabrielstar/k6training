# Zmienne kontekstowe (context VARS), executory, scenariusze

## __VU,__ITER
K6 posiada dwie przydatne, wbudowane zmienne globalne:

**__VU** - obecny VU (1 ..n)

**__ITER** - obecna iteracja (0 .. m-1)
***
__ITER

> A numeric counter with the current iteration number for a specific VU. Zero-based.

__VU
> Current VU number. The value is assigned incrementally for each new VU instance. One-based. However, VU number is 0 while executing the setup and teardown functions.

Uruchommy test i sprawdźmy wartości tych zmiennych:
```powershell
    k6 run --vus=3 --iterations=4 .\02_tags.js
```
output
```shell
INFO[0000] Setup: this is user 0  and iter 0 iteration   source=console
INFO[0000] Test: this is user 1  and iter 0 iteration    source=console
INFO[0000] Test: this is user 3  and iter 0 iteration    source=console                                                 INFO[0000] Test: this is user 2  and iter 0 iteration    source=console                                                 INFO[0000] Test: this is user 1  and iter 1 iteration    source=console
INFO[0000] Teardown: this is user 0  and iter 0 iteration  source=console    
```

https://k6.io/docs/using-k6/scenarios/executors/

Executors are the workhorses of the k6 execution engine. Each one schedules VUs and iterations differently, and you'll choose one depending on the type of traffic you want to model to test your services.

https://k6.io/docs/using-k6/scenarios