# Batching i grupowanie

Grupy można zagnieżdżać. Stwórz test, który ma jedną grupę główną i 2 podgrupy

```powershell

grupa:
- grupa 1:
    batch(...)
- grupa 2:
    batch(...)
```

W obu grupach wyślij po 2 równoległe żądania do adresu

`GET https://appxx.azurewebsites.net`

W pierwszym przypadku użyj listy [obiektów](https://k6.io/docs/javascript-api/k6-http/batch-requests/#example-with-request-objects).
```pow
    [
        {...},
        {...},
        {...}
    ]
```
a  w drugim ["named requests"](https://k6.io/docs/javascript-api/k6-http/batch-requests/#example-with-named-requests).

```powershell
   {
       'req1' : {...},
       'req2' : {...}
   }
```
 Użyj dokumentacji, żeby zrealizować zadanie.

[Batching](https://k6.io/docs/javascript-api/k6-http/batch-requests)

Zajrzyj do skryptu, który skonwertowaliśmy z pliku HAR. Czy teraz jest bardziej zrozumiały ?