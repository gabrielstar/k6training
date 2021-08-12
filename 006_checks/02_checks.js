import http from 'k6/http';
import {check} from 'k6';

const URL = "https://appxx.azurewebsites.net/"

export default function () {
    let res = http.request('GET', URL);
    let checkResult = check(res, {
        'response code was 200': (res) => res.status == 200,
        'body size was 1234 bytes': (res) => res.body.length < 1234,
        'dummy check' : ()=> 'a' === 'a'
    });
    console.log("Check Result " + checkResult)
}



