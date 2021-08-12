# struktura

1. Wykonaj żadanie https://appxx.azurewebsites.net/ w setup
2. Przekaż body odpowiedzi do głównej funkcji, użyj body do stworzenia nowego posta

         POST https://appxx.azurewebsites.net/post/add/newpost
         'Content-Type': 'application/json',
         {
               "body": "k6",
               "title": "Post from k6"
          }
         
  
    
3. zmodyfikuj zawartosc data czy modyfikacja widoczna jest w teardown  