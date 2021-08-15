# Grafana

K6 jest w stanie wysylać [dane](https://k6.io/docs/getting-started/results-output/) do wielu zewnętrznych serwisów między innymi [Grafany](https://k6.io/docs/results-visualization/influxdb-+-grafana)
. W tej części:
- zainstalujemy grafanę/influxdb na Azure VM
- skonfigurujemy [dashboard](https://grafana.com/grafana/dashboards/2587)
- wyślemy dane z testu do grafany

![grafana](img/grafana.png)

## Azure VM Ubuntu 20.04 - instalacja Grafany

Instalujemy pakiety:
```shell
    sudo apt-get update
    sudo apt install influxdb
    sudo snap install grafana
    curl localhost:3000
```

Konfigurujemy sieć poprzez reguły dla ruchu przychodzącego (inbound rules):
- otwieramy port 8086 (influxdb)
- otwieramy port 3000 (grafana UI)

Weryfikujemy z naszej maszyny lokalnej instalację wpisując w przeglądarce `http://${IP}:3000/login` , `admin:admin`

Sprawdzamy czy możemy wysyłać dane do grafany/influxdb (jeśli baza myk6db nie istnieje zostanie utworzona)

```powershell
    k6 run --out influxdb=http://${IP}:8086/myk6db http_get.js
```
## Konfigurujemy dashboard

1. Zaimportujemy [dashboard](https://grafana.com/grafana/dashboards/2587
2. z repozytoriów Community (manage dashobards->import)


2) Puścimy test i zanalizujemy rezultat

k6 run --iterations 100000 --vus 3 --out influxdb=http://${IP}:8086/myk6db http_get.js