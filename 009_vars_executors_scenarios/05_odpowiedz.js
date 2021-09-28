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
        buyers: {
            executor: 'ramping-vus',
            startVUs: 0,
            stages: [
                { duration: '10s', target: 10 }
            ],
            exec: 'buyers'
        },
        bots: {
            executor: 'ramping-vus',
            startVUs: 0,
            stages: [
                { duration: '10s', target: 5 }
            ],
            exec: 'bots'
        },
        customers: {
            executor: 'constant-vus',
            vus: 15,
            startTime: '10s',
            duration: '10s',
            tags: { type: 'main load' },
            exec: 'customers'
        }
    }

};
export let options = optionsScenarios;

export function setup() {
    console.log('Setup')
}


export function customers() { //https://stackoverflow.com/questions/21117160/what-is-export-default-in-javascript
    http.get('https://appxx.azurewebsites.net/');
    console.log('Running customer iteration')

}

export function bots() { //https://stackoverflow.com/questions/21117160/what-is-export-default-in-javascript
    http.get('https://appxx.azurewebsites.net/');
    console.log('Running bots iteration')

}

export function buyers() { //https://stackoverflow.com/questions/21117160/what-is-export-default-in-javascript
    http.get('https://appxx.azurewebsites.net/');
    console.log('Running buyers iteration')

}

export function teardown() {
    console.log('Teardown')
}
