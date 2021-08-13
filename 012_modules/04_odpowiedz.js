import { sleep } from "k6";
import { envs } from "./04_envs.js";
import { todos } from "./04_submodule.js";

//k6 run .\04_odpowiedz.js --http-debug=full -e env=STAGE

let env = __ENV.env || 'STAGE';
export function setup(){
    let testContext = {
        env: envs[env]
    }
    return testContext
}
export default function main(tc) { //test context can have different names ...
    console.log('Your context: ' + JSON.stringify(tc,null,2))
    todos(tc['BASE_URL']);
    sleep(1);
}
