"use server"

import { TimeButton } from "./TimeButton.component";
import { getTime } from "./time.action"

export default async function ActionPage() {
    const time = await getTime();

    return <div>
        <h1>Time: {time}</h1>
        <TimeButton />
    </div>
}