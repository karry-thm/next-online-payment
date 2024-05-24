"use client"

import { CreateOrderActions, CreateOrderData, OnApproveActions, OnApproveData } from "@paypal/paypal-js"
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js"

const CURRENCY_EURO = "EUR"

async function createOrder(_data: CreateOrderData, actions: CreateOrderActions): Promise<string> {
    return actions.order.create({
        intent: "CAPTURE",
        purchase_units: [{
          amount: {
            currency_code: "EUR",
            value: "1.99"
          }
        }]
    })
}

async function onApprove(_data: OnApproveData, actions: OnApproveActions): Promise<void> {
    actions.order?.capture()
        .then((res) => console.log("Captured", res))
        .catch((err) => console.error("Error on capture", err))
}

export function Payment() {
    return <div>
        <h1>Simple PayPage</h1>
        <div>
            <PayPalScriptProvider options={{
                clientId: "AUNgKGIMSckA1N6j2_vftTQh8dB0AfShyFJ0mKi4PVQqx4REjQET1kHLFpS_03WUv5v7s3t1uA4vkBfG",
                currency: CURRENCY_EURO
            }}>
                <PayPalButtons style={{ layout: "horizontal" }}
                    createOrder={createOrder}
                    onApprove={onApprove}
                />
            </PayPalScriptProvider>
        </div>
    </div>
}