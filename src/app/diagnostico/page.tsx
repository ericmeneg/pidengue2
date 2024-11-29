import Navbar from "@/components/navbar";
import Titulo from "@/components/titulo";
import Artigo from "@/components/artigo";
import Footer from "@/components/footer";

export default function Diagnostico() {
    return (
        <>
        <div className="bg-white">
        <Navbar />
        <Titulo texto="Sintomas" />
        <Artigo 
        texto="Os sintomas são derivados das possíveis três fases da dengue, e eles começam cerca de cinco dias após a picada, esse período é conhecido como incubação e seus sintomas são febre alta, fortes dores de cabeça e também atrás dos olhos, náuseas, canseira e o surgimento de manchas vermelhas no corpo, esta fase é considerada sem sinais de alerta e seus sintomas só permanecem por alguns dias. Caso os sintomas se agravem ao fim da primeira semana então ela é considerada com sinais de alerta, somente uma pequena parte atinge este estado, seus sintomas são dor abdominal intensa, vômitos recorrentes, canseira, desidratação e sangramentos nas mucosas, e deve ser tratada com a devida atenção pois o quadro viral pode evoluir rapidamente para dengue grave. Antigamente chamada de dengue hemorrágica nessa fase os sintomas avançam causando uma hemorragia intensa, colapso circulatório e falência múltipla dos órgãos sendo a principal causa de óbito."
        posicaoDoTexto= "L"
        nomeImagem="infograficosintomas.svg"
        altImagem="Infográfico ilustrando os sintomas descritos no parágrafo ao lado" />
        <Titulo texto="Diagnóstico" />
        <Artigo
        texto='O diagnóstico do paciente com suspeita de dengue é um processo que envolve múltiplas etapas para garantir a precisão. Inicialmente, os médicos avaliam os sintomas apresentados pelo paciente, que podem incluir febre alta, dores de cabeça intensas, dores atrás dos olhos, dores musculares e articulares, náuseas, vômitos e erupções cutâneas. Estes sintomas são considerados em conjunto com o histórico recente de viagens do paciente, especialmente se ele esteve em regiões onde a dengue é endêmica. Além disso, a situação epidêmica local é levada em consideração. Em períodos de surtos ou epidemias de dengue, a suspeita da doença aumenta, e o diagnóstico clínico pode ser mais direcionado para essa possibilidade. No entanto, como a dengue compartilha muitos sintomas com outras doenças infecciosas, como malária, chikungunya, zika, rubéola, sarampo, escarlatina, febre amarela e meningococcemia, é essencial realizar testes laboratoriais específicos para confirmar a presença do vírus da dengue. Esses testes podem incluir, por exemplo, o teste de antígeno NS1, que detecta a presença do antígeno NS1 do vírus da dengue nos primeiros dias de infecção. A sorologia (IgM e IgG), que identifica anticorpos produzidos em resposta à infecção pelo vírus da dengue, onde os anticorpos IgM indicam infecção recente, enquanto os anticorpos IgG podem indicar infecção anterior. E o teste de PCR (Reação em Cadeia da Polimerase), que detecta o material genético do vírus da dengue e é altamente específico e sensível, permitindo a confirmação do diagnóstico nos estágios iniciais da doença. Os exames laboratoriais não apenas confirmam a presença do vírus da dengue, mas também ajudam a diferenciar a dengue de outras doenças com sintomas semelhantes, assegurando que o paciente receba o tratamento adequado, a confirmação laboratorial é crucial para a vigilância epidemiológica e para o manejo adequado do paciente, contribuindo para a adoção de medidas de controle e prevenção da doença.'
        posicaoDoTexto="R"
        nomeImagem="tuboteste.svg" 
        altImagem="Foto de um tubo com sangue, um adesivo colado tem uma marcação de postivo sobre um texto que diz dengue." />
        <div className="mb-20" />
        <Footer />
        </div>
        </>
    )
}