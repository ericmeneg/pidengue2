import './botao.css';
import Link from 'next/link'

interface botaoProps {
    texto: string,
    destino: string
}

export default function Botao({ texto, destino }: botaoProps) {
    return (
        <Link href={destino} className="login-button flex flex-row justify-center">{texto}</Link>
    )
}