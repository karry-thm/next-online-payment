"use server"

import { redirect } from "next/navigation";
import CartItem from "../CartItem.interface";
import { createOrder } from "./api/createOrder.function";
import { v4 as uuid } from 'uuid';

export default async function pay(cart: CartItem[]) {
    const reqId = uuid();
    const order = await createOrder(cart, reqId);

    console.log("PAY", order);

    redirect(order.links.find((item) => item.rel === "payer-action")?.href || "/oops");
}