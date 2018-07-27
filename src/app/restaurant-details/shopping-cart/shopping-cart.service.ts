import { CartItem } from "./CartItem";

export class ShoppingCartService{
    items: CartItem[] = []

    clear(){
        this.items = []
    }

    addItem(item: any){
        let foundItem = this.items.find((mItem)=> mItem.menuItem.id === item.id);
        if(foundItem){
            foundItem.quantity = foundItem.quantity + 1
        }else{
            this.items.push(new CartItem(item))
        }
    }

    removeItem(item: any){
        this.items.splice(this.items.indexOf(item), 1)
    }

    total(): number{
        return this.items.map(item => item.value()).reduce((prev, value) => prev + value, 0);
    }

}