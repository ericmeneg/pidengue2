import Navbar from "@/components/navbar";
import Artigo from "@/components/artigo";
import Titulo from "@/components/titulo";
import Footer from "@/components/footer";

export default function Prevencao() {
    return (
        <>
        <div className="bg-white">
        <Navbar/>
        <Titulo texto = "Prevenção" />
        <Artigo
        texto = "O mosquito Aedes aegypti é o agente transmissor de doenças como a Dengue, Zika e Chikungunya. A proliferação do mosquito se dá por diversos motivos, como a falta de saneamento básico ou o crescimento desordenado das cidades. Devido a isso, é de extrema necessidade que medidas de prevenção sejam tomadas por todos, desde os órgãos governamentais e até a própria população. O grande foco da prevenção a Dengue é erradicar a proliferação do mosquito através da eliminação dos possíveis criadouros do mosquito. Coisas como: Evitar água parada em diversos recipientes, em locais como vasos de plantas, pneus, garrafas plásticas, tampas de garrafa, piscinas sem uso e manutenção, etc. A verificação de calhas, por exemplo, pode ser uma boa medida de prevenção ao Aedes aegypti, evitando que coisas como folhas e galhos impeçam a circulação da água. A vedação de caixas d’água e lixeiras também é parte fundamental no combate ao mosquito. Em caso de obras na vizinhança, é sempre bom se manter atento a possíveis criadouros em equipamentos de construção como lonas, betoneiras, carrinhos de mão, etc. Outras medidas que a população pode tomar é utilizar repelentes de mosquito, instalar telas protetoras nas janelas da residência e demais locais de convivência, utilizar roupas que auxiliem na proteção (roupas brancas e que exponham poucas partes do corpo) e ajudar nas campanhas do SUS (Sistema único de Saúde), ajudando na fiscalização e conscientização contra a Dengue em seus locais de convívio."
        posicaoDoTexto="L"
        nomeImagem="medidaspreventivas.svg"
        altImagem="Imagem demonstrando as técnicas de prevenção descritas no paragráfo ao lado" />
        <Titulo texto = "Tratamento" />
        <Artigo
        texto = "Atualmente não se conhece um tratamento específico contra a dengue, em casos de dengue hemorrágica, com vômitos recorrentes, pode ser necessária reidratação em hospital, do contrário é recomendado que o doente beba bastante água, repouse, e procure ajuda médica em caso de sangramento ou outros sinais de alerta, analgésicos e outros medicamentos atenuadores de sintomas devem ser usados apenas com acompanhamento médico."
        posicaoDoTexto="R" 
        nomeImagem="pessoahospitalizada.svg" 
        altImagem="Imagem de uma pessoa enferma internada em um hospital." />
        <Footer />
        </div>
        </>
    )
}