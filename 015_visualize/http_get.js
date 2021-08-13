import http from 'k6/http';
import {check} from 'k6';


export default function () { //https://stackoverflow.com/questions/21117160/what-is-export-default-in-javascript
    let res = http.get('https://appxx.azurewebsites.net/');
    let checkResult = check(res, {
        'response code was 200': (res) => res.status == 200,
        'body size was < 1234 bytes': (res) => res.body.length < 1234,
    });
}
