import { MenuItem } from "../../restaurant-detail/menu-item/menu-tem.model";

export class CartItem {
  constructor(public menuItem: MenuItem, public quantity: number = 1) {

  }

  value(): number{
      return this.menuItem.price = this.quantity
  }

}
