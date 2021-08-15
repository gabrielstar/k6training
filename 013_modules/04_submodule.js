import {check, group} from "k6";
import http from "k6/http";

export function todos(baseURL = "https://appxx.azurewebsites.net") {
    group("Todos", function () {
        let res = http.get(baseURL);
        let checkResult = check(res, {
            'response code was 200': (res) => res.status == 200
        });
    });
}