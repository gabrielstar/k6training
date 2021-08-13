# Repeat

1. Record traffic https://red-water-022d04b03.azurestaticapps.net/?#
2. Organize Page Views into proper groups
3. Add checks
4. Decide on thresholds for HTTP response times
5 Implement default scenarios:
    - smoke
    - stress
    - soak
6. Create Azure pipeline and run it so you can choose :
    - scenario on runtime
    - number of VUs on runtime
7. Stream all data to Grafana
8. If not succeeded by now try to crash the app from Azure DevOps