"use client"

import { useState } from "react";
import { Cart, CartItem } from "./cart.component";
import Payment from "./payment.component";

export default function PaymentCart() {
    const [items, setItems] = useState<CartItem[]>([])
    return <main>
        <Cart items={items} onChange={setItems} />
        <Payment items={items} />
    </main>
}