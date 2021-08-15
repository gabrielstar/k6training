import { group } from "k6";
import http from "k6/http";

export function submodule2() {
    group("Submodule2", function () {
        http.get("http://ecommerce.test.k6.io/cart/");
    });
}