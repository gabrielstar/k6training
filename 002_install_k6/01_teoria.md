# Instalacja

W systemie k6 [można zainstalować](https://k6.io/docs/getting-started/installation/):

- z paczki systemowej dla systemu operacyjmego (np .msi)
- użyć jako dockera 
- dodatkowo w azure istnieje dedykowamy task 'k6' do pipelinów

Zainstalujemy k6 z paczki .msi

***

Podstawowe polecenia w CLI:

```powershell
    k6 run script.js
    k6 run --vus 10 --duration 30s script.js
    k6 run --http-debug --vus 10 --duration 30s script.js
```

![cli](img/cli.png)