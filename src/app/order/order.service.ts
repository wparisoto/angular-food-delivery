import { Injectable } from "@angular/core";
import { ShoppingCartService } from "../restaurant-details/shopping-cart/shopping-cart.service";
import { CartItem } from "../restaurant-details/shopping-cart/CartItem";
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { MEAT_API } from "../app.api";
import { Order } from "./order.model";
import { LoginService } from "../security/login/login.service";

@Injectable()
export class OrderService{
    constructor(
        private cartService: ShoppingCartService, 
        private http: HttpClient,
        private loginService: LoginService){

    }

    itemsValue(): number{
        return this.cartService.total()
    }

    cartItems(): CartItem[]{
        return this.cartService.items
    }

    increaseQty(item: CartItem){
        this.cartService.increaseQty(item)
    }

    decreaseQty(item: CartItem){
        this.cartService.decreaseQty(item)
    }

    remove(item: CartItem){
        this.cartService.removeItem(item)
    }

    clear(){
        this.cartService.clear()
    }

    checkOrder(order: Order): Observable<string>{
        let headers = new HttpHeaders()

        if(this.loginService.isLoggedIn()){
            headers = headers.set('Authorization', `Bearer ${this.loginService.user.accessToken}`)
        }

        return this.http.post<Order>(`${MEAT_API}/orders`, order, {headers: headers})
                    .map(o => o.id)
    }
}