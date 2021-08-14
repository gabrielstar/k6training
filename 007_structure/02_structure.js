import http from 'k6/http';

var fileContent = "linia1,linia2";
//let data = http.get('https://appxx.azurewebsites.net/').body; - tak się nie da

export function setup() {
    let data = {}
    data['key'] = http.get('https://appxx.azurewebsites.net/').body; //tak się da
    data['file'] = fileContent;
    return data;
}

export default function (data) {
    console.log('Data in main block: ' +  JSON.stringify(data));
    console.log(fileContent === data['file']); //dane z init dostępne w bloku VU
}

export function teardown(data) {
    if (data.key != 'Hello, World!') {
        throw new Error('incorrect data: ' + JSON.stringify(data));
    }else{
        console.log('Data in teardow block: \n ' +  JSON.stringify(data,null,2) + "\n\n");
    }
}
