import http from 'k6/http';
import {check} from 'k6';

const URL = 'https://appxx.azurewebsites.net/'
var counter = 0; //każdy VU dostanie kopię

export function setup() {
    let res = http.get(URL);
    return { //data
        body: res.body //body is a property
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

    //dane z init są kopiowane, kopia per VU
    counter+=Math.random(1)*100;
    console.log(`counter:` + counter) //pracujemy na kopii w zakresie 1 VU
    return data;
}

export function teardown(data) {
    console.log(JSON.stringify(data)); //data is unmodified
    console.log(`counter:` + counter) //nadal wskazuje na 0
}
