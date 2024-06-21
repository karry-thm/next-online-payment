import cap from "@/components/cart/payment/capture.action";

export default async function capture({ params, searchParams }: { params: { id: string }, searchParams?: { token?: string, PayerID?: string } }) {
    console.log(await cap(searchParams?.token || "asdf"));
    return <div>
        <h1>Captured</h1>
        <table>
            <tbody>
                <tr>
                    <th colSpan={2}>Parameter</th>
                </tr>
                <tr>
                    <th>Internal ID</th>
                    <td>{params.id}</td>
                </tr>
                <tr>
                    <th>PayPal ID</th>
                    <td>{searchParams?.token}</td>
                </tr>
                <tr>
                    <th>Payer ID</th>
                    <td>{searchParams?.PayerID}</td>
                </tr>
            </tbody>
        </table>
    </div>
}