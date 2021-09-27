# Podstawowy test

W tej części spojrzymy na podstawe żądania w [k6/http](https://k6.io/docs/javascript-api/k6-http/).

- GET
- POST
- REQUEST
- ...

Nauczymy się przekazywać parametery do środka testu z CLi z użyciem zmiennych środowiskowych.
Z linii poleceń możemy:
- przekazywać je przez -e lub
- k6 może czytać zmienne środowiskowe powłoki.

Przykłady:

### podanie zmiennej z linii poleceń

```powershell
    k6 run -e BODY="my perfect body" http_post_env.js
```

### użycie zmiennej środowiskowej powłoki (domyślnie true)

```powershell
    $Env:BODY = "new body"; k6 run --http-debug=full http_post_env.js
```

Aby wyłączyć czytanie zmiennych środowiskowych powłoki:

```powershell
    $Env:BODY = "new body"; k6 run --include-system-env-vars=false --http-debug=full http_post_env.js
```
