"use client"

import { useState } from "react"
import { getTime } from "./time.action";

export function TimeButton() {
    const [time, setTime] = useState<number>(0);

    function update() {
        getTime()
            .then(setTime)
            .catch(console.error)
    }

    return <button onClick={update}>{time}</button>
}