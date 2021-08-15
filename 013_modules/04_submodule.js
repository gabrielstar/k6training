import {check, group} from "k6";
import http from "k6/http";

export function stage(baseURL = "https://appxx.azurewebsites.net") {
    group("Stage 1", function () {
        let res = http.get(baseURL);
        let checkResult = check(res, {
            'response code was 200': (res) => res.status == 200
        });
    });
}