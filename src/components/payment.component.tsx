"use client"

import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js"
import { CartItem } from "./cart.component"
import { CreateOrderActions, CreateOrderData, OnApproveActions, OnApproveData } from "@paypal/paypal-js"
import { useEffect, useState } from "react"

interface PaymentProps {
    items: CartItem[]
}

function total(items: CartItem[]): number {
    let sum = 0;
    items.forEach((item) => sum += item.qty * item.singlePrice)
    return sum;
}

function createOrderObject(price: number): any {
    return {
        intent: "CAPTURE",
        purchase_units: [{
            amount: {
                currency_code: "EUR",
                value: price
            }
        }]
    }
}

function orderCreator(price: number) {
    return async function createOrder(_data: CreateOrderData, actions: CreateOrderActions): Promise<string> {
        return actions.order.create(createOrderObject(price));
    }
}

async function onApprove(_data: OnApproveData, actions: OnApproveActions): Promise<void> {
    actions.order?.capture()
        .then((res) => console.log("Captured", res))
        .catch((err) => console.error("Error on capture", err))
}

export default function Payment({ items }: PaymentProps) {
    const [totalPrice, setTotalPrice] = useState<number>(0)

    useEffect(() => {
        setTotalPrice(total(items))
    }, [items])

    return <div>
        <h2>Total: { totalPrice }</h2>
        <PayPalScriptProvider options={{
            clientId: "AUNgKGIMSckA1N6j2_vftTQh8dB0AfShyFJ0mKi4PVQqx4REjQET1kHLFpS_03WUv5v7s3t1uA4vkBfG",
            currency: "EUR"
        }}>
            <PayPalButtons style={{ layout: "horizontal" }}
                createOrder={orderCreator(totalPrice)}
                onApprove={onApprove}
            />
        </PayPalScriptProvider>
    </div>
}