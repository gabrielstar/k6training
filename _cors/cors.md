## CORS (Cross-origin resource sharing)

- Domyœlnie ¿¹dania, o za³adowanie w przegl¹darce zasobów pochodz¹cych z innej strony ni¿ ta, z której pobraliœmy Ÿród³o strony s¹ blokowane (same origin policy). 
- Zapobiega to pewnym rodzajom ataku, w których strona której nie kontrolujemy mo¿e zawieraæ "niebezpieczny kod javscript", który za³adujemy do przegl¹darki i w ten sposób atakuj¹cy bêdzie mia³ dostêp do danych poprzez DOM w przegl¹darce.
- W prawdziwym zyciu czêsto jednak chcemy komunikowaæ siê do innych domen np. API/backend mo¿e byæ na zupe³nie innym serwerze ni¿ frontend.
 - Cross-origin resource sharing (CORS) jest mechanizem, który pozwala na wysy³anie ¿¹dañ i ³adawanie zasobów z/do domen innych ni¿ ta, z której pochodzi Ÿród³o strony.


Wiêkoszœæ ¿¹dañ "cross-origin" jest blokowanych w przegl¹darkach ze wzglêdu na same-origin security policy. 

>In computing, the same-origin policy (sometimes abbreviated as SOP) is an important concept in the web application security model. Under the policy, a web browser permits scripts contained in a first web page to access data in a second web page, but only if both web pages have the same origin. An origin is defined as a combination of URI scheme, host name, and port number. This policy prevents a malicious script on one page from obtaining access to sensitive data on another web page through that page's Document Object Model.
>
https://en.wikipedia.org/wiki/Same-origin_policy

CORS definiuje sposób dla przegl¹darki i serwera, który pozwala podj¹æ decyzjê czy ¿¹danie cross-origin jest bezpieczne.
Do realizacji tego procesu komunikacja zostaje wzbogacona o odpowiednie headery (Origin i Access-Control-Allow-Origin).

### Przyk³ad ¿¹dania Cross-origin

1. Otwieramy stronê HTML z http://www.example.com , która zawiera kod javascript:

```
GET http://www.example.com ->
    -> GET /index.html
    -> GET /script.js
```
Naszym 'Origin' jest w tym przypadku http://www.example.com


2. Nastêpnie skrypt **script.js** wysy³a ¿¹danie z naszej przegl¹darki do **service.example.com**, jest ono Cross-Origin bo  http://www.example.com != service.example.com
```powershell
    GET  / HTTP/1.1
    Host: service.example.com
    Origin: http://www.example.com

```


3. Serwer **service.example.com** mo¿e zezwoliæ lub nie na tak¹ komunikacjê:

    - Jeœli serwer **service.example.com** pozwala na po³¹czenie ze wszystkich domen (Originów), wysy³a odpowiedŸ i dodaje nag³ówek   
        ```powershell
        HTTTP/1.1 200 OK 
        Access-Control-Allow-Origin: *
      
        (..body..)
      ```

   - Jeœli serwer **service.example.com** pozwala na po³¹czenie z tego Originu, wysy³a odpowiedŸ i dodaje nag³ówek
   
   ```powershell
       HTTTP/1.1 200 OK 
       Access-Control-Allow-Origin: http://www.example.com
     
       (..body..)
        
    ```
        
    - Jeœli serwer **service.example.com** nie pozwala na po³¹czenie z tego Originu, wysy³a kod b³êdu

    
> Access-Control-Allow-Origin: * - jest to ustawienie odpowiednie dla publicznych API, ogólnie dostêpmnych obrazków czy fontów

Jak widaæ to serwer decyduje o tym na co zezwala klientom (originom) a rol¹ przegl¹darki jest respektowanie tych zasad i np. nie wysy³anie danych tam gdzie nie zostan¹ one zaaakceptowane. Mimo to jak widaæ ¿¹danie zosta³o wys³ane ...  

### preflight

.., ¿eby by³o odrobinê bezpieczniej w nowoczesnych przegl¹darkach dla pewnych typów ¿¹dañ Cross-Origin gdzie potencjalnie modyfikowane/przesy³ane mog¹ byæ dane u¿ytkownika, przegl¹darka sprawdzi czy ma uprawnienia do wys³ania takiego ¿¹dania, zanim wyœle dane:

   ```powershell
         OPTIONS / HTTP/1.1.
         Host: service.example.com
         Origin: http://www.example.com
         Access-Control-Request-Method: PUT
```
Jeœli serwer **service.example.com** akceptuje metodê PUT z Originu **http://www.example.com** odpowie

```powershell
        HTTTP/1.1 204 No Content 
        Access-Control-Allow-Origin: http://www.example.com
        Access-Control-Allow-Methods: PUT, DELETE

```