import http from 'k6/http';
import {sleep, group} from 'k6';

const URL = "https://appxx.azurewebsites.net/" //our backend

export default function () {
    group('Get Main Page over 5 TCP connections', function(){
        http.batch([
            //method, url, body, params
            ['GET',URL,null,null],
            ['GET',URL,null,null],
            ['GET',URL,null,null],
            ['GET',URL,null,null],
            ['GET',URL,null,null],
        ]);
    });
    sleep(1);
}
