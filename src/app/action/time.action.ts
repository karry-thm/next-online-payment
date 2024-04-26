"use server"

export async function getTime():Promise<number> {
    return new Date().getTime();
}