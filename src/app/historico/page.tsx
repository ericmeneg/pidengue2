import Navbar from "@/components/navbar";
import Artigo from "@/components/artigo";
import Titulo from "@/components/titulo";
import Footer from "@/components/footer"

export default function Historico() {
    return (
        <>
        <div className="bg-white">
        <Navbar/>
        <Titulo texto="Histórico"></Titulo>
        <Artigo
        texto="Provavelmente, o vírus da dengue teve origem em primatas não humanos na Malásia. A transmissão para humanos ocorreu com a aproximação das populações humanas ao habitat natural do vírus. O primeiro registro provável da dengue foi na China. A dengue hemorrágica, uma forma mais grave da doença, surgiu na década de 1950 no sudeste asiático. Esta forma severa ocorre quando uma pessoa previamente infectada pelo vírus é contaminada por um sorotipo diferente. Na América do Sul e Central, essa forma da doença começou a aparecer na década de 1980. O vetor da dengue é o mosquito do gênero Aedes, sendo a principal espécie o Aedes aegypti, embora não seja a única. Este mosquito é vetor de várias doenças, incluindo dengue, zika, chikungunya e febre amarela. Originário da África, o Aedes aegypti se espalhou pelo mundo durante as grandes navegações a partir do século XV. No Brasil, os primeiros relatos de dengue surgiram no final do século XIX, mas o principal problema na época era a febre amarela. Houve grandes campanhas contra o vetor, e na década de 1950, após intensa campanha, a Associação Pan-Americana de Saúde conseguiu erradicar o Aedes aegypti de diversos países das Américas, inclusive do Brasil. No entanto, o mosquito voltou a se alastrar posteriormente, reaparecendo nas principais cidades brasileiras a partir da década de 1970. As primeiras epidemias de dengue nas Américas ocorreram no século XIX, com surtos no Caribe, Estados Unidos, Colômbia e Venezuela. A proliferação da doença está associada principalmente a perturbações ambientais e ao aquecimento global. "
        posicaoDoTexto='L'
        nomeImagem="mosquitoegito.svg"
        altImagem="Imagem de um mosquito da dengue rodeando um barco, ao fundo pode-se ver pirâmides e uma esfinge"
        ></Artigo>
        <img className="mb-20 mt-10" src="/images/grafico_indaiatuba.png" alt="Gráfico mostrando o crescimento da dengue em indaiatuba ao longo dos anos desde 2010, vê-se que no meio de 2024 a proliferaçao da doença esteve em seu auge" />
        <Footer />
        </div>
        </>    
)
}