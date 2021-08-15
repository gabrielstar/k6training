# Moduły 

Przygotuj test, którego kod zorganizowany będzie w plikach:

script.js (test)
 - envs.js (moduł)
 - submodule.js (moduł)

W pliku ze środowiskami (envs.js) powinna być konfiguracja np. `BASE_URL` dla każdego ze środowisk:
- QA 
- STAGE

Zaczytaj w `script.js` wybraną konfigurację środowiska w fazie `setup`i przekaż dalej do `kodu VU`.
W fazie VU użyj funckji z submodułu, inicjalizowanej danymi ze środowiska np. BASE_URL.