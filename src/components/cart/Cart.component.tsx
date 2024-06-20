"use client";

import { useEffect, useState } from "react";
import CartItem from "./CartItem.interface";
import { calcCartTotal } from "./cart.helper";

interface CartProps {
    cart: CartItem[]
}

export default function Cart({ cart }: CartProps) {
    const [total, setTotal] = useState<number>(calcCartTotal(cart));

    useEffect(() => {
        setTotal(calcCartTotal(cart));
    })

    return <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Einzelpreis</th>
                    <th>Anzahl</th>
                    <th>Gesamtpreis</th>
                </tr>
            </thead>
            <tbody>
                {cart.map((item) => <tr>
                    <td>{item.name}</td>
                    <td>{item.unitPrice}</td>
                    <td>{item.amount}</td>
                    <td>{item.unitPrice * item.amount}</td>
                </tr>)}
            </tbody>
        </table>
        <h2>Total: {total} &euro;</h2>
    </div>
}