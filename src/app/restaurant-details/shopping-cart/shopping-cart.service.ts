import { CartItem } from "./CartItem";
import { Injectable } from "@angular/core";
import { NotificationService } from "../../shared/messages/notifications.service";
import { MenuItem } from "../../restaurant-detail/menu-item/menu-tem.model";

@Injectable()
export class ShoppingCartService{
    items: CartItem[] = []

    constructor(private notificationService: NotificationService){}

    clear(){
        this.items = []
    }

    addItem(item: MenuItem){
        let foundItem = this.items.find((mItem)=> mItem.menuItem.id === item.id);
        if(foundItem){
            this.increaseQty(foundItem)
        }else{
            this.items.push(new CartItem(item))
        }
        this.notificationService.notify(`Item ${item.name} incluído no carrinho!`)
    }

    increaseQty(item: CartItem){
        item.quantity = item.quantity + 1
    }

    decreaseQty(item: CartItem){
        item.quantity = item.quantity - 1
        if(item.quantity === 0){
            this.removeItem(item)
        }
    }

    removeItem(item: CartItem){
        this.items.splice(this.items.indexOf(item), 1)
        this.notificationService.notify(`Item ${item.menuItem.name} removido do carrinho!`)
    }

    total(): number{
        return this.items.map(item => item.value()).reduce((prev, value) => prev + value, 0);
    }

}