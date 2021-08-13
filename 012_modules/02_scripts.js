import { sleep } from "k6";
import { submodule1 } from "./02_submodule1.js";
import { submodule2 } from "./02_submodule2.js";

export default function main() {
    submodule1();
    sleep(getRandom(2, 5));
    submodule2();
    sleep(getRandom(2, 5));
}

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}