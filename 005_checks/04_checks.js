import http from 'k6/http';
import {check} from 'k6';

const URL = "https://appxx.azurewebsites.net/"

export default function () {
    let res = http.request('GET', URL);
    let checkResult = check(res, {
        'response code was 200': (res) => res.status == 200,
        'tcp connect < 100': (res) => res.timings.connecting < 100,
        'k6 is User-Agent': (res) => res.request.headers['User-Agent'][0].includes("k6"),
    });
    console.log(JSON.stringify(res.request.headers))
    console.log("Check was a " + checkResult)
}



