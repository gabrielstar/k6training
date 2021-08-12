# Context VARS && executors

https://k6.io/docs/using-k6/scenarios/executors/

__VU and __ITER
__VU and __ITER are both global variables with execution context information that k6 makes available to the test script.

__ITER
A numeric counter with the current iteration number for a specific VU. Zero-based.

__VU
Current VU number. The value is assigned incrementally for each new VU instance. One-based. However, VU number is 0 while executing the setup and teardown functions.


```powershell
    k6 run --vus=3 --iterations=4 .\02_http_get.js
```