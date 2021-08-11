Jak poradzić sobie ze swagger filem?

```powershelldocker pull openapitools/openapi-generator-cli```

```powershell
docker run --rm -v ${PWD}:/local openapitools/openapi-generator-cli generate \
    -i http://httpbin.test.loadimpact.com/spec.json \
    -g k6 \
    -o /local/k6-test/
    --skip-validate-spec
```

Spróbuj z https://petstore.swagger.io/v2/swagger.json
