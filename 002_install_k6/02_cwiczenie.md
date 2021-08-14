## CLI

1. Wejdź na stronę testową https://red-water-022d04b03.azurestaticapps.net/

    - Zapoznaj się ze źródłem (Chrome - Ctrl+U)
    - Wykonaj dowolne dwie akcje w przeglądarce
    - Zapisz ruch w formacie HAR '03_odpowiedz.har' z użyciem Chrome DevTools/Network Tab 
    - Użyj CLI, żeby skonwertować plik HAR do testu k6 o nazwie 'odpowiedz.js'
    - Użyj do tego polecenia har convert, skorzystaj z pomocy
    - Przejrzyj wygenerowany skrypt. W trakcie szkolenie wszystkie zawarte tam elementy będziemy wyjaśniać. 

2. Uruchom nagrwany wczesniej test z pełnym debugowaniem np:

```powershell
    k6 run --http-debug --vus 10 --duration 30s 03_odpowiedz.js
    k6 run --http-debug=full --vus 10 --duration 30s 03_odpowiedz.js
``` 

Czym różnią się obydwa tryby ?


