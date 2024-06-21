export default async function capture({ params, searchParams }: { params: { id: string }, searchParams?: { token?: string } }) {
    return <div>
        <h1>Payment ERROR</h1>
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
            </tbody>
        </table>
    </div>
}