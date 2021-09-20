# Czym są testy wydajnościowe ?

Przyjmijmy, że jesteście producentem luksusowych aut. Jakie testy wydajnościowe można zaplanować i wykonać dla supersamochodu ?  Co znaczy wydajny w kontekście auta?

![koenigsegg](img/koenigsegg.jpg)

    `żródło: https://www.autocentrum.pl/ac-file/news/58932ffa592c7d8b479156db/koenigsegg-one-1-pierwszy-na-swiecie-megasamochod.jpgl`

 
***
### Przykłady
#### 01.03.2011 - uefa.com
**Sytuacja**: Nie można zarejestrować się w loterii biletowej na UEFA 2012

**Konsekwencja**: Biznesowa - niewielka, popyt jest wielokrotnie wyższy niż podaż. Doświadczenie użytkownika - fatalne. 

**Przyczyna**: Zbyt duża liczba użytkowników próbujących wejść na stronę w tym samym czasie.  

![uefa.com nie dziala](img/euro2012.jpg)

    `żródło: https://www.rp.pl/artykul/619791-Bilety-na-Euro-2012--strona-UEFA-z-biletami-nie-dziala.html`

*** 
#### 29.04.2021 - login.gov.pl
**Sytuacja**: Nie działa ZUS i pacjent.gov.pl z powodu niedostępnośći login.gov.pl

**Konsekwencja**: Nie można się zarejestrować na szczepienie COVID-19. Nie można się zalogować do wielu zależnych serwisów rządowych w tym do ZUS-u.

**Przyczyna**: Prawdopodobnie login.gov.pl nie był przygotowany na tak duży ruch spowodowany próbą rejestracji na szczepienie grupy 30-40 latków  

![login.gov.pl nie dziala](img/zus-down.jpg)

    `żródło: własne`

*** 
#### 7.02.2021 - CBS/SuperBowl
**Sytuacja**: Nie działała transmisja SuperBowl 

**Konsekwencja**: SuperBowl to najbardziej dochodowe wydarzenie sportowe na świecie. 30s reklamy kosztuje 5.6 mln $. Firmy wykupujące reklamy liczą na odpowiedni zasięg.
                  Niedostępność medium zmniejsza zasięg i może być powodem żądań rekompensaty.

**Przyczyna**: Zbyt wielu użytkowników  

![login.gov.pl nie dziala](img/superbowl.png)

    `żródło: https://www.the-sun.com/news/2290209/super-bowl-2021-cbs-all-access-down/#`

***

Potraficie podać inne przykłady, które zapadły Wam w pamięć ?

*** 
## Czy warto testować?


 > Testowanie może uchronić nas przed ryzykami, których można uniknąć. Pozostałe zmaterializują się na produkcji.

 
Problemy wydajnościowe aplikacji mają różne przyczyny i konsekwencje. Jest też wiele możliwych odpowiedzi i rozwiązań, które można zastosować.

Testujemy wydajność ponieważ:
-  komuś coś obiecaliśmy (wymagania, obietnice)
-  tak nakazują przepisy (branża medyczna)
-  poprawienie czegoś na wczesnym etapie jest mnie kosztowne
-  chcemy wiedzieć
-  nasza opinie/image nam nakazuje, ... 

Konsekwencje problemów wydajnościowych to np.:
 - utrata przychodów (sklepy internetowe)
 - ryzyko roszczeń finansowych
 - utrata zaufania klientów
 
Przyczyny:
 - brak testów :)
 - bycie ofiarą własnego sukcesu
 - nieprzygotowanie aplikacji na określoną sytuacją związaną ze zwiększonym obciążeniem
 - niektóre problemy powstają tylko pod dużym obciążeniem
 
