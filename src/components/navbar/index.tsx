import Link from "next/link"

export default function Navbar() {
    return (
        <>
            <body>
                <div className="bg-white-100 flex flex-col px-0">
                    <nav className="flex justify-center bg-green-200 p-3">
                        <Link href="/" className="mx-4 px-4 py-2 font-semibold text-black-700 hover:bg-green-300 rounded-md">Home</Link>
                        <Link href="/Oque" className="mx-4 px-4 py-2 font-semibold text-black-700 hover:bg-green-300 rounded-md">O que é?</Link>
                        <Link href="/Historico" className="mx-4 px-4 py-2 font-semibold text-black-700 hover:bg-green-300 rounded-md">Histórico</Link>
                        <Link href="/Atualmente" className="mx-4 px-4 py-2 font-semibold text-black-700 hover:bg-green-300 rounded-md">Atualmente</Link>
                        <Link href="/Diagnostico" className="mx-4 px-4 py-2 font-semibold text-black-700 hover:bg-green-300 rounded-md">Diagnóstico</Link>
                        <Link href="/Prevencao" className="mx-4 px-4 py-2 font-semibold text-black-700 hover:bg-green-300 rounded-md">Prevenção e Tratamento</Link>
                        <Link href="/Matematica" className="mx-4 px-4 py-2 font-semibold text-black-700 hover:bg-green-300 rounded-md">Modelos</Link>
                        <Link href="/Login" className="mx-4 px-4 py-2 font-semibold text-black-700 hover:bg-green-300 rounded-md">Login</Link>
                    </nav>
                </div>
            </body>
        </>
    )
}