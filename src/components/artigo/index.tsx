interface artigoProps {
    texto: string,
    posicaoDoTexto: 'L' | 'R',
    nomeImagem: string,
    altImagem: string,
    heightImagem?: string
    corTexto?: string;
}

export default function Artigo({ texto, posicaoDoTexto, nomeImagem, altImagem, heightImagem, corTexto='text-black' }: artigoProps) {
    if (posicaoDoTexto == 'L') {
        return (
            <>
                <div className="flex flex-col mx-16 md:flex-row items-center gap-4 mt-10">
                    <p className={`text-justify md:w-1/2 ${corTexto}`}>{texto}</p>
                    <img className={`h-auto md:w-1/2 ${heightImagem}`} src={`/images/${nomeImagem}`} alt={`${altImagem}`}></img>
                </div>
            </>
        )
    }

    if (posicaoDoTexto == 'R') {
        return (
            <>
                <div className="flex flex-col mx-16 md:flex-row items-center gap-4 mt-10">
                    <img className={`h-auto md:w-1/2 ${heightImagem}`} src={`../images/${nomeImagem}`} alt={`${altImagem}`}></img>
                    <p className={`text-justify md:w-1/2 ${corTexto}`}>{texto}</p>
                </div>
            </>
        )
    }
}