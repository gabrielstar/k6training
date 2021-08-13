# Grafana
https://k6.io/docs/results-visualization/influxdb-+-grafana

#Azure

na VM - create Ubunutu 20.04
```shell
    sudo apt-get update
    sudo apt install influxdb
    sudo snap install grafana
    curl localhost:3000
```

Add network Inbound rules for ports:
8086
3000

Go to http://${IP}:3000/login , admin:admin
Verify data can be streamed to indluxdb
```powershell
    k6 run --out influxdb=http://${IP}:8086/myk6db http_get.js
```
# configure dash

Let us import a dashboard (manage dashobards->import)
https://grafana.com/grafana/dashboards/2587
provide ID and resource.


Run a long test

k6 run --iterations 100000 --vus 3 --out influxdb=http://20.67.116.11:8086/myk6db http_get.js