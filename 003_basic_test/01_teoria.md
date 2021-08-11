# Podstawowy test

W tej części spojrzymy na podstawe żądania w [k6/http](https://k6.io/docs/javascript-api/k6-http/).

- GET
- POST
- REQUEST

Parametry z linii poleceń możemy przekazywać przez -e lub k6 może czytać zmienne środowiskowe powłoki.

```powershell
    k6 run -e BODY="my perfect body" http_post_env.js
```

w drugim przypadku musimy użyc parametru `--include-system-env-vars`

```powershell
    $Env:BODY = "new body"; k6 run --include-system-env-vars http_post_env.js
```

