# Batching and grouping

Stwórz test, który ma jedną grupę główną i 2 podgrupy

```powershell

grupa:
- grupa 1:
    batch(...)
- grupa 2:
    batch(...)
```

W obu wyślij po 2 równoległe żądania do

`GET https://appxx.azurewebsites.net`

W pierwszym przypadku użyj listy żądań, w drugim "named requests". Użyj dokumentacji, żeby zrealizować zadanie.
