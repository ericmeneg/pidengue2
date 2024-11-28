import Link from "next/link"

export default function Navbar() {
    return (
        <div className="bg-white flex flex-col px-0">
            <nav className="flex justify-center bg-green-200 p-3">
                <Link href="/" className="mx-4 px-4 py-2 font-semibold text-black hover:bg-green-300 rounded-md">Home</Link>
                <Link href="/login" className="mx-4 px-4 py-2 font-semibold text-black hover:bg-green-300 rounded-md">Login</Link>
                <Link href="/oque" className="mx-4 px-4 py-2 font-semibold text-black hover:bg-green-300 rounded-md">O que é?</Link>
                <Link href="/historico" className="mx-4 px-4 py-2 font-semibold text-black hover:bg-green-300 rounded-md">Histórico</Link>
                <Link href="/atualmente" className="mx-4 px-4 py-2 font-semibold text-black hover:bg-green-300 rounded-md">Atualmente</Link>
                <Link href="/diagnostico" className="mx-4 px-4 py-2 font-semibold text-black hover:bg-green-300 rounded-md">Diagnóstico</Link>
                <Link href="/prevencao" className="mx-4 px-4 py-2 font-semibold text-black hover:bg-green-300 rounded-md">Prevenção e Tratamento</Link>
                <Link href="/matematica" className="mx-4 px-4 py-2 font-semibold text-black hover:bg-green-300 rounded-md">Modelos</Link>
            </nav>
        </div>
    )
}
