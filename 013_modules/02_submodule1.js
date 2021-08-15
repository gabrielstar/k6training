import { group } from "k6";
import http from "k6/http";

export function submodule1() {
    group("Submodule1", function () {
        http.get("http://ecommerce.test.k6.io/cart/");
    });
}