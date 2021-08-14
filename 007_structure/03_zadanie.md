# Cykl życia

Napisz taki test:

1. W fazie **init** zdefiniuj zmienną/stałą `url=https://appxx.azurewebsites.net/`
2. W fazie **setup** wykonaj żadanie o `GET https://appxx.azurewebsites.net/`
3. Przekaż body tej odpowiedzi z **setup** do fazy **VU**, użyj tego body do stworzenia nowego posta wykorzystując endpoint:
```
         POST https://appxx.azurewebsites.net/post/add/newpost
         Content-Type: application/json
         
         {
               "body": "...",
               "title": "..."
         }
 ```
    
4. Zmodyfikuj zawartosc danych (data) w fazie **VU**. Czy modyfikacja widoczna jest w fazie **teardown**? Sprawdź.  