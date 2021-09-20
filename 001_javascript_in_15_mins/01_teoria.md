# JavaScript w 15 minut.

Językiem opisu testów w k6 jest zwykły JavaScript (tak typescript też może być użyty ...). Do pisania testów wystarczy podstawowa znajomośc syntaktyki [javascript](https://learnxinyminutes.com/)

Przejdziemy wspólnie przez podstawy javascriptu, które umożliwią nam pisanie testów podczas szkolenia. W kontekście k6 najwżniejsze z nich to:

- let,const
- funkcje, funkcje strzałkowe
- object literals
- praca z listami
- iterowanie po listach i obiektach
- tworzenie i praca z obiektami
- moduły es6

Wyróżniamy JavaScript - po stronie serwera i klienta (przeglądarki). Przykładem JS o stronie serwera jest "node" a po stronie przeglądarki implementacja V8 np, w Chrome. Różnica polega na tym, że środowiskiem uruchomieniowym dla JS serwerajest proces w systemie operacyjnym a dla klienta przeglądarka reprezentowana przez obiekt "window". W k6 środowiskiem uruchomieniowym także jest proces serwera ale nie jest nim proces "nodowy".
