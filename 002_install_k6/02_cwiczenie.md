## CLI

1. Wejdz na https://red-water-022d04b03.azurestaticapps.net/
- Wykonaj dowolne dwie akcje
- Zapisz ruch w formacie HAR '03_odpowiedz.har'
- Użyj CLI, żeby skonwertować plik HAR do testu k6 '03_odpowiedz.js'
- Użyj do tego polecenia har convert, skorzystaj z pomocy

2. Uruchom nagrwany wczesniej test z pełnym debugowaniem

```powershell
    k6 run --http-debug=full --vus 10 --duration 30s 03_odpowiedz.js
``` 


