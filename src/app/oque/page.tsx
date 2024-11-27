import Navbar from "@/components/navbar";
import Artigo from "@/components/artigo";
import Titulo from "@/components/titulo";
import Footer from "@/components/footer";

export default function Oque() {
    return (
        <>
            <Navbar />
            <Titulo texto="O que é?"></Titulo>
            <Artigo texto= "A dengue é uma doença febril aguda, transmitida principalmente pela picada do mosquito Aedes aegypti infectado. Este mosquito é comum em áreas tropicais e subtropicais ao redor do mundo, especialmente em ambientes urbanos e semiurbanos. A dengue pode variar de uma doença leve a uma forma mais grave, conhecida como dengue grave ou dengue hemorrágica, que pode ser fatal se não for tratada adequadamente. A quase totalidade dos óbitos por dengue é evitável e depende, na maioria das vezes, da qualidade da assistência prestada e organização da rede de serviços de saúde." 
            posicaoDoTexto="R" 
            nomeImagem="virusmicroscopio.svg" 
            altImagem="Imagem computadorizada do vírus da dengue visito por microscópio"
            />
            <Footer />
        </>
    )
}