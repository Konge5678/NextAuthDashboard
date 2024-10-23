import Link from "next/link";


export default function Denied() {
    return (
        <section className="flex flex-col gap-12 items-center">
            <h1 className="text-5xl"> Acces Denied</h1>
            <p className="text-3xl max-w-2xl text-center">cant view this page</p>
            <Link href="/" className="text-3xl underline"> return to home page</Link>
        </section> 
    )
}