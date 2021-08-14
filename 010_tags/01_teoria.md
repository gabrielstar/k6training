
## Tagi

[Tagów](https://k6.io/docs/using-k6/tags-and-groups/), używa się do kategoryzacji elementów k6 w na ogół w celu filtracji później w wynikach lub w innych elementach k6.

Tagi mogę być:
- zdefiniowane przez użytkownika
- systemowe (mające konkrente znaczenie w k6)
Uruchomimy test i sprawdzimy jak tagio prezentują się w wynikach:

```powershell
k6 run .\02_tags.js --out csv
```