# Hackathon

Wykorzystaj wszystko czego się dowiedziałeś do przygotowania testu (użyj metody Copy-Paste jeśli musisz, na pamięć nauczymy się kiedy indziej).

![hack](img/hack.jpg)

1. Nagraj kilka akcji użytkownika (Page Views) ze strony - https://red-water-022d04b03.azurestaticapps.net
2. Zorganizuj pojedyncze żądania w grupy (Page Views) 
3. Dodaj checki wg własnego pomysłu
4. Dodaj thresholdy, zaproponuj ich wartości i rodzaj
5  Użyj scenariuszy, żeby mieć kilka konfiguracji:
    - smokeTests
    - stressTests
    - soakTests
6. Stwórz Azure pipeline :
    - użytkownik powinien mieć możliwośc wyboru scenariusza lub parametrów testu podczas uruchomienia
    - (opcjonalnie: test smokeTest powinien się uruchamiać codziennie)
7. Dane z testu powinny być wysyłane do Grafany/InfluxDB
***
8. Gdy wszyscy będą gotowi dokonamy rytualnego uboju naszej aplikacji-under-test