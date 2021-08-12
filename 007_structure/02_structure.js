import http from 'k6/http';

export function setup() {
    let data = {}
    data['key'] = 'value';
    return data;
}

export default function (data) {
    console.log('Data in main block: ' +  JSON.stringify(data));
}

export function teardown(data) {
    if (data.key != 'value') {
        throw new Error('incorrect data: ' + JSON.stringify(data));
    }else{
        console.log('Data in teardow block: \n ' +  JSON.stringify(data,null,2) + "\n\n");
    }
}
