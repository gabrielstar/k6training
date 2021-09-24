# JavaScript w 15 minut.

![js](img/js.png)
![go](img/go.png)

Językiem opisu testów w k6 jest zwykły JavaScript (tak typescript też może być użyty ...). Do pisania testów wystarczy podstawowa znajomośc syntaktyki [javascript](https://learnxinyminutes.com/)

Przejdziemy wspólnie przez podstawy javascriptu, które umożliwią nam pisanie testów podczas szkolenia. W kontekście k6 najwżniejsze z nich to:

- let,const
- funkcje, funkcje strzałkowe
- object literals, klasy es6
- praca z listami
- iterowanie po listach i po właściwościach obiektów
- tworzenie i praca z obiektami
- moduły es6

Wyróżniamy JavaScript - po stronie serwera i klienta (przeglądarki). Przykładem JS o stronie serwera jest "node" a po stronie przeglądarki implementacja V8 np, w Chrome. Różnica polega na tym, że środowiskiem uruchomieniowym dla JS serwera jest proces w systemie operacyjnym a dla klienta przeglądarka reprezentowana przez obiekt "window". W k6 środowiskiem jest proces serwera ale nie jest nim proces "nodowy". JavaScript jest językiem opisu testu ale za wykonanie testu odpowiada silnik Go.
