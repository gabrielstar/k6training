import http from 'k6/http';

export function setup() {
    console.log('Setup')
}
export default function () { //https://stackoverflow.com/questions/21117160/what-is-export-default-in-javascript
    http.get('https://appxx.azurewebsites.net/');
    console.log(`Test: this is user ${__VU}  and iter ${__ITER} iteration`)

}
export function teardown() {
    console.log('teardown')
}
