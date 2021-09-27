Jak poradzić sobie ze swagger filem?

```powershelldocker pull openapitools/openapi-generator-cli```


Wygeneruj plik k6 na podstawie OpenAPI

```powershell
docker run --rm -v ${PWD}:/local openapitools/openapi-generator-cli generate  -i http://httpbin.test.loadimpact.com/spec.json  -g k6  -o /local/k6/  --skip-validate-spec
```
a następnie uruchom (nie uda się ... konwersja wymaga pracy..).

```powershell
    k6 run .\k6\script.js
```

Ćwiczenie:

Spróbuj z https://petstore.swagger.io/v2/swagger.json
