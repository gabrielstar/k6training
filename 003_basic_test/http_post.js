import http from 'k6/http';

export default function () {
    var url = 'https://appxx.azurewebsites.net/post/add/newpost';
    var payload = JSON.stringify(
        {
               "body": "k6",
               "title": "Post from k6"
              }
        )
    ;
    var params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    http.post(url, payload, params);
}
