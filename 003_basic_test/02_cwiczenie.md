# Podstawowy test

1. Napisz nowy test w osobnym pliku. W środku iteracji użytkownika umieść żądania:
- GET ( skopiuj z http_get.js)
  
```powershell
    GET /
    Host: https://appxx.azurewebsites.net
```
- POST ( skopiuj z http_post.js)
```powershell
    POST /post/add/newpost
    Host: https://appxx.azurewebsites.net
    Content-Type: application/json

    {
        "body": "k6",
        "title": "Post from k6"
    }
```   
Do implementacji użyj natywnego [request](https://k6.io/docs/javascript-api/k6-http/request-method-url-body-params) to znaczy zamiast stosować:

```javascript
    http.get(...);
    http.post(...);
```
użyj
```javascript 
   http.request(...);
```



