# thresholds and options

https://k6.io/docs/using-k6/thresholds/

Thresholds are a pass/fail criteria used to specify the performance expectations of the system under test.


Cwiczenie

Spraw by Twoj test rozpedzal sie powoli, uzyj do tego stagy https://k6.io/docs/using-k6/options/#stages

20s -> 10 VU
15s -> 10 VU
5s -> 0 VU

Cwiczenie

średni czas trwania grupy 'Log Out' powinien być mniejszy niż 10ms 

```powershell
     k6 run --iterations=10 .\04_thresholds.js --out csv
```

Podejrzyj plik csv. zeby podejrzec nazwe grupy.