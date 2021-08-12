# Batching and grouping

## Baching służy do wysyłania żądań równolegle
- w k6 można podać albo listę elementów albo obiekt

## Grouping służy do organizowania żądań np. w Page Views 

https://k6.io/docs/javascript-api/k6/group-name-fn/

ćwiczenie:

Zamien skrypt 03_batching.js na wersję z użyciem "named objects" i objects.

https://k6.io/docs/javascript-api/k6-http/batch-requests

```powershell
    k6 run --iterations=1 .\05_odpowiedz.js
```