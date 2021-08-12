import http from 'k6/http';

export let options = {
    discardResponseBodies: true,
    scenarios: {
        smoke: {
            executor: 'per-vu-iterations',
            vus: 2,
            iterations: 5,
            tags: {type: 'smoke'}

        },
        stress: {
            executor: 'per-vu-iterations',
            vus: 5,
            iterations: 10,
            tags: {type: 'stress'}
        }
    }

};

export function setup() {
    console.log(`Setup: this is user ${__VU}  and iter ${__ITER} iteration`)
}


export default function () { //https://stackoverflow.com/questions/21117160/what-is-export-default-in-javascript
    http.get('https://appxx.azurewebsites.net/');
    console.log(`Test: this is user ${__VU}  and iter ${__ITER} iteration`)

}

export function teardown() {
    console.log(`Teardown: this is user ${__VU}  and iter ${__ITER} iteration`)
}
