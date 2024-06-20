"use client";

import { useState } from "react";
import CartItem from "./CartItem.interface";

interface CartItemInputProps {
    onAdd: (item: CartItem) => void
}

export default function CartItemInput({ onAdd }: CartItemInputProps) {
    const [name, setName] = useState<string>("");
    const [amount, setAmount] = useState<number>(0);
    const [unitPrice, setUnitPrice] = useState<number>(0);

    return <div>
        <input type="text" value={name} onChange={(evnt) => setName(evnt.target.value)} />
        <input type="number" value={amount} onChange={(evnt) => setAmount(parseInt(evnt.target.value))} />
        <input type="number" value={unitPrice} onChange={(evnt) => setUnitPrice(parseFloat(evnt.target.value))} />
        <button onClick={() => {
            onAdd({name, amount, unitPrice});
            setName("");
            setAmount(0);
            setUnitPrice(0);
        }}>Hinzuf&uuml;gen</button>
    </div>
}