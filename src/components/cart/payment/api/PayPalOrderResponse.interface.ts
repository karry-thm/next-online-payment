export default interface PayPalOrderResponse {
    id: string,
    status: string,
    links: {
        href: string,
        rel: string,
        method: string
    }[]
}