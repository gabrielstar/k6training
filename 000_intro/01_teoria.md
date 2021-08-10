# Czym jest k6 ?

![](img/logo.png)

[k6](https://k6.io/) to narzędzie typu open source do przerowadzania testów wydajnościowych. W k6 testy piszemy w javascripcie, natomiast samo narzędzie napisane jest w Go co czyni je bardzo wydajnym.

## Cechy

K6 przenaczone jest dla:

- **Deweloperów i SDET-ów:**
    - proste w użyciu CLI
    - jezykiem opisu testów jest zwykły javascript
- **DevOps i SRE**
    - pozwala na stabilną automatyzację (między innymi w Azure, azure task, docker, system installatiom)
    - posiada natywne wsparcie dla celów SLO i pozwala na ich ewaluację
    - przybliża nas do calkowitej automatyzacji testów wydajnościowych
- **Testerów i QA**
    - testy można tworzyć od zera (ground-up)
    - można konwertować pliki .har, swaggera, kolekcje postmana

## Manifest (https://k6.io/our-beliefs/)

- Proste testy są lepsze niż ich brak
- Testy wydajnościowe powinny być zorientowane na cel
- Deweloperzy powinni pisać testy wydajnościowe
- User-experience jest bardzo ważne:
    - środowiska lokalne
    - wszystko jako kod
    - automatyzacja
- Testuj w środowisku pre-produkcyjnym
  
## Open Source vs Cloud

Narzędzie jest darmowe ale posiada też płatną wersję, w której mamy dostęp do portalu w Chmurze gdzie możemy puszczać testy bez uterzymywania własnej infrastruktury. 

![](img/cloud.webp)