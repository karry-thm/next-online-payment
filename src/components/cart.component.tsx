"use client"

import { useState } from "react"

export interface CartItem {
    name: string
    qty: number
    singlePrice: number
}

export function Cart() {
    const [cart, setCart] = useState<CartItem[]>([])

    return <>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Anzahl</th>
                    <th>Preis</th>
                </tr>
            </thead>
            <tbody>
                {cart.map((item) => <tr>
                    <td>{item.name}</td>
                    <td>{item.qty}</td>
                    <td>{item.singlePrice}</td>
                </tr>)}
            </tbody>
        </table>
        <CartItemForm onAdd={(item)=>setCart([...cart, item])}/>
    </>
}

interface CartItemFormProps {
    onAdd: (item: CartItem) => void
}

function CartItemForm(props: CartItemFormProps) {
    const [name, setName] = useState<string>("");
    const [qty, setQty] = useState<number>(0);
    const [singlePrice, setSinglePrice] = useState<number>(0);

    function add() {
        props.onAdd({name, qty, singlePrice});
        setName("");
        setQty(0);
        setSinglePrice(0);
    }

    return <div>
        <input type="text" value={name} onChange={(evnt)=>setName(evnt.target.value)}/>
        <input type="number" value={qty} onChange={(evnt)=>setQty(parseInt(evnt.target.value))}/>
        <input type="number" value={singlePrice} onChange={(evnt)=>setSinglePrice(parseInt(evnt.target.value))}/>
        <button onClick={add}>Hinzufügen</button>
    </div>
}