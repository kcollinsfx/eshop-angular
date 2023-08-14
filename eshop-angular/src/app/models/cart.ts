import { CartItem } from "./cart-item";

export class Cart {
  cartItems: CartItem[] = [];

  // If item is already in the cart just add 1 to its quantity
  // else add the item to the cart.
  addItem(cartItem: CartItem){
    let found: boolean = false;
    this.cartItems = this.cartItems.map (ci => {
      if (ci.item?.id == cartItem.item?.id){
        ci.quantity++;
        found = true;
      }
      return ci;
    });
    if (!found){
      this.cartItems.push(cartItem);
    }
  }

  removeItem(item: CartItem){
    const index = this.cartItems.indexOf(item, 0);
    if (index > -1){
      this.cartItems.splice(index, 1);
    }
  }

  emptyCart(){
    this.cartItems = [];
  }

  getTotalValue(): number {
    let sum = this.cartItems.reduce((a,b) => {
      return a = a + (b.item?.price) * (b.quantity);
    }, 0);

    return sum;

  }

  isCartValid(): boolean{
    if (this.cartItems.find(ci =>(ci.quantity == null || ci.quantity <= 0)) === undefined){
      return true;
    }
    return false;
  }
}
