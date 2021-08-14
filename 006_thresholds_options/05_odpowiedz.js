import http from 'k6/http';
import {group} from 'k6';

const URL = "https://appxx.azurewebsites.net/"

export let options = { //options allow to configure your test rum
    vus: 1,
    //iterations: 1,
    thresholds: {
        'group_duration{group:::User Scenario::Log Out}': [' avg > 10'],
    },
    stages: [
        { duration: '20s', target: 10 }, //rampUp
        { duration: '15s', target: 10 }, //true test
        { duration: '5s', target: 0 }, //rampDown
    ],
    scenarios: { //pozwala definiować wiele różnych scenariuszy w ramach jednego testu
        example_scenario: {
            executor: 'shared-iterations',
            vus: 2,
            iterations: 2,
        },
    },
};

export default function () {
    group('User Scenario' ,function(){
        group('Home' ,function(){
            http.request('GET', URL);
        });
        group('Log Out' ,function(){
            http.request('GET', URL);
            http.request('GET', URL);
            http.request('GET', URL);
            http.request('GET', URL);
            http.request('GET', URL);
        });
    });
}



