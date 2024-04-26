"use client"

import { Counter } from "@/components/counter";
import { useState } from "react"

export function CounterWrapper() {
    const [value, setValue] = useState<number>(0);

    return <Counter value={value} onChange={setValue} />
}