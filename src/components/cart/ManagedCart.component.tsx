"use client"

import { useState } from "react"
import CartItem from "./CartItem.interface"
import Cart from "./Cart.component"
import CartItemInput from "./CartItemInput.component"
import PaymentService from "./payment/PaymentService.component"

export default function ManagedCart() {
    const [cart, setCart] = useState<CartItem[]>([])

    return <div>
        <CartItemInput onAdd={(item) => setCart([...cart, item])} />
        <Cart cart={cart} />
        <PaymentService cart={cart} />
    </div>
}