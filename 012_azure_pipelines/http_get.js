import http from 'k6/http';

const smokeOptions = { //options allow to configure your test rum
    vus: 1,
    iterations: 1,
};

const stressOptions = { //options allow to configure your test rum
    vus: 1,
    iterations: 5,
};

export let options = eval(__ENV.options) || smokeOptions

export default function () { //https://stackoverflow.com/questions/21117160/what-is-export-default-in-javascript
    http.get('https://appxx.azurewebsites.net/');
}
