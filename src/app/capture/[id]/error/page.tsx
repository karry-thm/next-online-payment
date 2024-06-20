export default async function capture({ params }: { params: { id: string } }) {
    return <div>Error ({params.id})</div>
}