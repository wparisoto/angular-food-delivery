import { Injectable } from "@angular/core";
import { ShoppingCartService } from "../restaurant-details/shopping-cart/shopping-cart.service";
import { CartItem } from "../restaurant-details/shopping-cart/CartItem";
import { HttpClient} from "@angular/common/http";
import { MEAT_API } from "../app.api";
import { Order } from "./order.model";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class OrderService {
    constructor(
        private cartService: ShoppingCartService,
        private http: HttpClient) {

    }

    itemsValue(): number {
        return this.cartService.total()
    }

    cartItems(): CartItem[] {
        return this.cartService.items
    }

    increaseQty(item: CartItem) {
        this.cartService.increaseQty(item)
    }

    decreaseQty(item: CartItem) {
        this.cartService.decreaseQty(item)
    }

    remove(item: CartItem) {
        this.cartService.removeItem(item)
    }

    clear() {
        this.cartService.clear()
    }

    checkOrder(order: Order): Observable<string> {
        return this.http.post<Order>(`${MEAT_API}/orders`, order)
                    .pipe(map(order => order.id))
    }
}