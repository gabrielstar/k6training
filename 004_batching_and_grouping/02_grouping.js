import http from 'k6/http';
import {group, sleep} from 'k6';

const URL = "https://appxx.azurewebsites.net/"

export default function () {
    group('Get Main Page', function () { //
        sendGet();
    });
    sleep(1);
    group('Add Post', function () {
        sendPost();
        sendGet();
    });
    
}

function sendPost() {
    let url = `${URL}/post/add/newpost`
    let payload = JSON.stringify( //The JSON.stringify() method converts a JavaScript object or value to a JSON string
        {
            "body": "k6 x " + Math.random(),
            "title": "Post from Gabriel's k6"
        }
        )
    ;
    let params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    http.request('POST', url, payload, params);
}

function sendGet() {
    http.request('GET', URL);
}
