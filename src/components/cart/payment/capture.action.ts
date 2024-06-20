"use server"

import { captureOrder } from "./api/captureOrder.function";

export default async function capture(orderId: string): Promise<"OK"> {
    await captureOrder(orderId);
    return "OK";
}