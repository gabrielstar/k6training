# Checks/Sprawdzenia

W tej części poznamy _checki_ - podstawowy mechanizm ewaluacji żądań i odpowiedzi. 

[Checki - Sprawdzenia](https://k6.io/docs/using-k6/checks/) to mechanizm podobny do asercji ale nieudany 'check' nie powoduje, że żądanie/odpowiedź jest ocenione jako nieudane.

W skrócie w k6 mamy 2 mechanizmy sprawdzeń:

- _Checki_ = Asercje bez konsekwencji, używane do weryfikacji samego testu
- _Thresholdy_ = Asercje z konsekwencjami, niespełnienie warunków, że test ma status FAIL, używane do markowania testu jako PASS/FAIL

Użycie check'ów (sprawdzeń) powoduje, że kod testu jest:
- czytelniejszy 
- lepiej zorganizowany.

Dodatkowo, _checki_ dają nam informacje diagnostyczne np. szybko możemy się dowiedzieć, że sam kod testu jest błędny.
Sprawdzeń możemy użyć w dowolnym miejscu w kodzie.





