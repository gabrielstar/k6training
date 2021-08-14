import http from 'k6/http';

let optionsPerVU = {
    scenarios: {
        scenario: { //default
            executor: 'per-vu-iterations',
            vus: 3,
            iterations: 4, //requests = 3 vu x 4 iters = 12
        }
    }
};
let optionsScenarios = {
    discardResponseBodies: true,
    scenarios: {
        start1: {
            executor: 'ramping-vus',
            startVUs: 0,
            tags: {type: 'buyers'},
            stages: [
                {duration: '10s', target: 10}
            ]
        },
        start2: {
            executor: 'ramping-vus',
            startVUs: 0,
            tags: {type: 'bots'},
            stages: [
                {duration: '10s', target: 5}
            ]
        },
        main: {
            executor: 'constant-vus',
            vus: 15,
            startTime: '10s',
            duration: '10s',
            tags: {type: 'main load'}
        }
    }

};
export let options = optionsScenarios;

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
