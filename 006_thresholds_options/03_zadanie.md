# Thresholds, Options



1. Opcje: Spraw by Twój test (04_thresholds.js) rozpędzał sie powoli, użyj [stage'y](https://k6.io/docs/using-k6/options/#stages) any zasymulować taki wzorzec obciążenia

- 0-20s -> 10 VU
- 20-35s -> 10 VU
- 35-40s -> 0 VU

Sprawdż jak się zmienił output testu.

2. Thresholdy: Zdefiniuj Quality Gate:

- średni czas trwania grupy 'Log Out' powinien być mniejszy niż 10ms 

Żeby zdefiniować warunek będziesz potrzebował nazwy grupy, do której chcesz się odwołać, możesz użyć polecenia:

```powershell
     k6 run --iterations=10 .\04_thresholds.js --out csv
```

aby ją odczytać.