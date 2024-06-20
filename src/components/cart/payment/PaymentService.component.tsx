"use client"

import CartItem from "../CartItem.interface"
import pay from "./pay.action"

interface PaymentServiceProps {
    cart: CartItem[]
}

export default function PaymentService({ cart }: PaymentServiceProps) {
    return <button onClick={() => pay(cart)} >Bezahlen</button>
}