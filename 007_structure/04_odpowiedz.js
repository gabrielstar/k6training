import http from 'k6/http';
import {check} from 'k6';

const URL = 'https://appxx.azurewebsites.net/'

export function setup() {
    let res = http.get(URL);
    return { //data
        body: res.body
    }
}
export default function (data) {
    let body = JSON.stringify({
        body: data['body'] || 'nic tam nie ma',
        title: "new title from Gab's"
    })
    let params = {
        headers: {
            'Content-Type': 'application/json',
        },
    }
    let res = http.post(`${URL}/post/add/newpost`,body,params);
    check(res, {
        'response code was 201': (res) => res.status == 201,
    });
    //modify
    data['new'] = "new";
    console.log(JSON.stringify(data));
    return data;
}

export function teardown(data) {
    console.log(JSON.stringify(data)); //data is unmodified
}
