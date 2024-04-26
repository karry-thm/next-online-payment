"use server"

import { CounterWrapper } from "./CounterWrapper.component"

export default async function FolderPage() {
    return <div>
        <h1>Folder Page</h1>
        <CounterWrapper />
    </div>
}