# Jak działa HTTP i co robi przeglądarka? 
***
## HTTP 

Protokołem komunikacyjnym aplikacji webowych jest HTTP. Opisuje on jaką akcję chcemy wykonać względem określonego zasobu (na serwerze).

![warstwy](../002_rodzaje_aplikacji/img/simple-client-server.png)

    `żrodło: https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works`

Jest to protokół oparty na schemacie Żądanie-Odpowiedź. Nie ma odpowiedzi bez żądania. Serwer nie może wysłać wiadomości pierwszy (dlatego powstają takie technologie jak WebSockets).

Metody HTTP:    
- GET - pobranie reprezentacji zasobu
- HEAD - to samo co GET ale bez zawartości
- POST - stworzenie zasobu
- PUT - zamiana zasobu
- PATCH - częściowa modyfikacja zasobu
- DELETE - usunięcie zasobu
- OPTIONS - zapytanie o opcje komunikacji dla zasobu
- TRACE - test komunikacji do zasobu
- CONNECT - ustanowienie tunelu do zasobu (np. w web socketach, HTTPS)

``żródło: https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods``



### struktura komunikatów HTTP

Żądania/Odpowiedzi składają się z :

- linii startowej (start line)
- nagłówków (headers)
- pustej linii
- ciała/zawartości (body)

![warstwy](../002_rodzaje_aplikacji/img/httpmsgstructure2.png)
``źródło: https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages``


Korzystając z protokołu HTTP względem zasobów stron webowych używamy klientów HTTP (i tak można symulować działanie przeglądarki)

Przydatne komendy:

Windows
```powershell
    Invoke-WebRequest -UseBasicParsing -Uri https://bing.com -Method GET
```
Linux (https://curl.se/docs/httpscripting.html)
```console
    curl https://bing.com
    curl --head https://bing.com
    
```

Zasobami, które najczęściej pobieramy w trakcie interakcji ze stronami webowymi to
:
- HTML (document)
- CSS (stylesheet)
- JavaScript (script)
- Media (img)
- Czcionki (fonts)

Podstawowa różnica między zwykłym klientem HTTP i przeglądarką jest to, że:
- przeglądarka interpretuje Javascript (z pomocą silników, z których najpopularniejszy jest V8/Chromium od Google)
- przeglądarka wyświetla kompletnie przeprocesowaną zawartość strony użytkownikowi (renderuje zawartość)

W testach wydajnościowych musimy rozumieć jak działa przeglądarka lecz na codzień pracujemy bezpośrednio z żądaniami HTTP. 

**Zadanie**:

Z pomocą linii polecen (bash/powershell) dla dowolnego adresu URL spróbuj wykonać metody HEAD,GET,TRACE, OPTIONS np:

```powershell
        Invoke-WebRequest https://red-water-022d04b03.azurestaticapps.net/ -Method OPTIONS | 
            Select-Object -ExpandProperty Headers 
```


## Co robi przeglądarka krok po kroku kiedy wpisujemy w niej adres strony WWW

1. W najprostszym scenariuszu ściągamy HTML, który zawiera zasoby.
2. Przeglądarka parsuje HTML i identyfikuje dodatkowe zasoby (embedded resources).
3. Dodatkowe zasoby są dociągane. Mogą być one pobierane z innych lokalizacji.
4. A równolegle silnik przeglądarki renderuje zawartość tak szybko jak potrafi.  

***

![warstwy](../002_rodzaje_aplikacji/img/browser.png)

    `żródło: https://www.youtube.com/watch?v=oZkfApkWgPc&t=369s`
   
Oczywiście zanim coś zostanie ściągnięte, przeglądarka nawiązuje połączenie TCP, rozwiązuje nazwę DNS i przegląda cache. 
 
![warstwy](../002_rodzaje_aplikacji/img/browserTimings.png)

    `żródło: https://www.youtube.com/watch?v=oZkfApkWgPc&t=369s`
    
    
## Co jeszcze robi przeglądarka?

- Pozwala na utrzymywanie sesji (zapisuje dane: ciasteczka, local storage)
- Nawiązuje bezpieczny kanał np. HTTPS
- Chroni użytkownika np. implementując CORS (https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

### CORS

Z powodów bezpieczeństwa przeglądarki blokują requesty HTTP ze skryptów jeśli dotyczą innego serwera niż źródłowy.
Programista może jednak zezwolić na takie działanie. Jednym z elementów implementacji CORS jest "pre-flighted request", który 
jest żądaniem OPTIONS sprawdzającym co można wysłać do serwera zanim to faktycznie wyślemy (wysłanie bez sprawdzenia może doprowadzić do narażenia danych).

W Chromie zobaczycie te requesty jako "pre-flight".

### fetch and AJAX calls

**Zadanie:**

Otwórz 'Chrome Dev Tools' i załaduj stronę (https://jsonplaceholder.typicode.com/).
Zanalizuj zakładkę Network, czy jesteś w stanie zrozumieć co ściąga Twoja przeglądarka?

Otwórz stronę wp.pl. Czy są tam jakieś dodatkowe typy żądań, których wcześniej nie widzieliśmy?

