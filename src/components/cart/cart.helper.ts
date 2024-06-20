import CartItem from "./CartItem.interface";

export function calcCartTotal(cart: CartItem[]): number {
    return cart.reduce((acc, curr) => acc + curr.amount * curr.unitPrice, 0);
}