import http from 'k6/http';

//simplest test possible
export default function () { //https://stackoverflow.com/questions/21117160/what-is-export-default-in-javascript
    let res = http.get('https://appxx.azurewebsites.net/'); //request - response
    console.log(JSON.stringify(res));
}
