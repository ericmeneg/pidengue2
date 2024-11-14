type pageIndex = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

interface NavbarProps {
    active: pageIndex
}

import Link from "next/link"

export default function Navbar() {
    return (
        <>
            <body>
                <div className="bg-white-100 h-screen flex flex-col px-0">
                    <nav className="flex justify-center bg-green-200 p-3">
                        <Link href="/oque" className="mx-4 px-4 py-2 font-semibold text-black-700 hover:bg-green-300 rounded-md">Oque é?</Link>
                        <Link href="/historico" className="mx-4 px-4 py-2 font-semibold text-black-700 hover:bg-green-300 rounded-md">Histórico</Link>
                        <Link href="/atualmente" className="mx-4 px-4 py-2 font-semibold text-black-700 hover:bg-green-300 rounded-md">Atualmente</Link>
                        <Link href="/sintomas" className="mx-4 px-4 py-2 font-semibold text-black-700 hover:bg-green-300 rounded-md">Sintomas</Link>
                        <Link href="/diagnostico" className="mx-4 px-4 py-2 font-semibold text-black-700 hover:bg-green-300 rounded-md">Diagnósticos</Link>
                        <Link href="/tratamento" className="mx-4 px-4 py-2 font-semibold text-black-700 hover:bg-green-300 rounded-md">Tratamento</Link>
                        <Link href="/prevencao" className="mx-4 px-4 py-2 font-semibold text-black-700 hover:bg-green-300 rounded-md">Prevenção</Link>
                    </nav>
                </div>
            </body>
        </>
    )
}