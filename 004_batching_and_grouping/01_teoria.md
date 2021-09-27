# Batching i grupowanie


## Batching

[Batching](https://k6.io/docs/javascript-api/k6-http/batch-requests) służy do wysyłania żądań równolegle. W k6 do batcha można podać albo listę elementów (żądań) albo obiekt. Batching służy między innym do lepszego odwzorowywania działania przeglądarki.

## Grupowanie 

[Grupowanie](https://k6.io/docs/javascript-api/k6/group-name-fn/) służy do organizowania żądań w większą całość np. w Page Views a więc do logicznego podziału naszego testu. 


Jeśli żądania wykonują się równolegle i odpowiednio długo na serwerze na kliencie możemy podejrzeć jak zmienia się liczba nawiązanych połączeń TCP. Jeśli uruchomisz test z batchowaniem dla 50 użytkowników zaobserwujesz jak zmienia się liczba zajętych połączeń TCP.

```powershell
while ($true) {
     netstat -n | measure-object -line
     Start-Sleep -Seconds 1
 }

```
Wysyłanie żądań równolegle jest potrzebne ale należy pamiętać o niebezpieczeństwie wysycenia połączeń TCP.

