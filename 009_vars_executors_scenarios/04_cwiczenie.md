## Scenariusz i egzekutory

1. Zmodyfikuj test `http_get.js` aby opcje zawierały 1 scenariusz gdzie executor to 'per-vu-iterations'. Uruchom z `--vus=3` i `--iterations=4`. 

```javscript
  export options = {
    scenarios: {
        myScenario: {
            ...
        }
    }
};
```
2. Rozszerz test z tego modułu (`http_get.js`) tak, aby:
- opcje składały się z 3 scenariuszy symulując wzrost i spadek aktywnych użytkowników w trakcie testu wg schematu:

    - **scenariusz 1**: 
      - czas trwania 0-10s 
      - liczba użytkowników rośnie: od 0 do 10 VU
    - **scenariusz 2**:
      - czas trwania 0-10s
      - liczba użytkowników rośnie: od 0 do 5 VU
    - **scenariusz 3**:
      - czas trwania 10-20s
      - liczba użytkowników stała: 15 VU
    
np:
```javascript
        let options = {
            scenarios: {
                s1:{
                    ...
                },
                s2: {
                    ...
                },
                s3: {
                   ... 
                }
            } 
        }
```
- dobierz egzekutory do scenariuszy na podstawie dokumentacji.
- niech każdy scenariusz ma inną funkcje __VU__