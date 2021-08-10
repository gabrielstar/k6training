```powershell
    k6 convert -O .\03_odpowiedz.js .\03_odpowiedz.har
    k6 run --http-debug=full .\03_odpowiedz.js
``` 


