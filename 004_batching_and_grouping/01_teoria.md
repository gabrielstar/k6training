# Batching i grupowanie

## Bacthing

[Batching](https://k6.io/docs/javascript-api/k6-http/batch-requests) służy do wysyłania żądań równolegle. W k6 do batcha można podać albo listę elementów (żądań) albo obiekt.

## Grupowanie 

[Grupowanie](https://k6.io/docs/javascript-api/k6/group-name-fn/) służy do organizowania żądań w większą całość np. w Page Views 


Jeśli żądania wykonują się równolegle i odpowiednio długo na serwerze na kliencie możemy podejrzeć jak zmienia się liczba nawiązanych połączeń TCP

```powershell
while ($true) {
     netstat -n | measure-object -line
     Start-Sleep -Seconds 1
 }

```

