import cap from "@/components/cart/payment/capture.action";

export default async function capture({ params, searchParams }: { params: { id: string }, searchParams?: { token: string } }) {
    console.log("CAPTURE", searchParams?.token);
    console.log(await cap(searchParams?.token || "asdf"));
    return <div>Capture ({params.id}-{searchParams?.token})</div>
}