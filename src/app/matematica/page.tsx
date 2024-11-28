import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Titulo from "@/components/titulo";
import Artigo from "@/components/artigo";

export default function Matematica() {
    return (
        <>
            <div className="bg-white">
                <Navbar />
                <Titulo texto="Modelo SIR"></Titulo>
                <Artigo
                    texto="O modelo SIR é um dos mais básicos modelos matemáticos que visam prever as infecções por uma doença ao longo do tempo, este busca descrever a transição de membros da população total N pelos grupos S (suscetíveis), I (infectados) e R (removidos), que acontece em função da taxa de infecção β (infectados/tempo) e a taxa de recuperação γ (recuperados/tempo). Esse modelo assume o desenvolvimento de imunidade pelo indivíduo após a infecção, o que é aplicável para um único sorotipo da dengue, porém devido a existência de quatro sorotipos conhecidos da doença, ele é incapaz de levar em conta reinfecções por diferentes sorotipos e representar a enfermidade como um todo."
                    posicaoDoTexto="R"
                    nomeImagem="ilust_sir.png"
                    altImagem="Ilustração de três caixas denominadas S (suscetíveis), I (infectados) e R (removidos), setas indicam um fluxo unidirecional entre elas." />
                <Titulo texto="Modelo de Newton e Reiter" />
                <Artigo
                    texto='Para o estudo da relação entre a dengue e a população humana, um dos modelos matemáticos que pode ser utilizado é o de Newton e Reiter de 1992. Este modelo permite que sejam analisadas as duas principais formas de infecção da doença: a forma clássica (não-letal) e a forma hemorrágica (potencialmente letal), analisando a taxa de infecção entre a população humana e a população de mosquitos, levando algumas variáveis em consideração. Alguns exemplos das variáveis utilizadas no método de Newton e Reiter são o tamanho das populações, as taxas migratórias (migração e imigração) e as taxas vitais (nascimentos e mortes). Já na análise da população de mosquitos, pode ser considerado um crescimento lógico da população. Deve se levar em consideração que a dengue é uma doença sazonal, que ocorre principalmente durante o verão ou em períodos de chuvas intensas. A utilização do método de Newton e Reiter no estudo da dengue demonstra que tais métodos tendem a ajudar muito na compreensão dos avanços epidémicos ocasionados pela doença. Tais cenários, apesar de serem hipotéticos, auxiliam muito na compreensão e na tomada de decisão de medidas preventivas para a contenção do quadro epidemiológico em uma determinada região.'
                    posicaoDoTexto="L"
                    nomeImagem="grafico_newton_e_reiter.png"
                    altImagem="Gráfico de Ana Paula P. Wyse, Amaury Oliveira Gemaque e Guzman Eulálio Isla Chamilco, que demonstra o número de indivíduos infectados pelas dengues clássica e hemorrágica, pode-se ver que ambos crescem exponencialmente até um pico na metade do gráfico após 90 dias, e em seguida diminuem até zero no mesmo ritmo em que antes cresciam" />
                <Titulo texto="Modelos Compartimentais" />
                <div className="flex flex-row items-center w-1/2 mt-10 mx-auto">
                <p className="text-justify">Para o estudo da relação entre a dengue e a população humana, um dos modelos matemáticos que pode ser utilizado é o de Newton e Reiter de 1992. Este modelo permite que sejam analisadas as duas principais formas de infecção da doença: a forma clássica (não-letal) e a forma hemorrágica (potencialmente letal), analisando a taxa de infecção entre a população humana e a população de mosquitos, levando algumas variáveis em consideração. Alguns exemplos das variáveis utilizadas no método de Newton e Reiter são o tamanho das populações, as taxas migratórias (migração e imigração) e as taxas vitais (nascimentos e mortes). Já na análise da população de mosquitos, pode ser considerado um crescimento lógico da população. Deve se levar em consideração que a dengue é uma doença sazonal, que ocorre principalmente durante o verão ou em períodos de chuvas intensas. A utilização do método de Newton e Reiter no estudo da dengue demonstra que tais métodos tendem a ajudar muito na compreensão dos avanços epidémicos ocasionados pela doença. Tais cenários, apesar de serem hipotéticos, auxiliam muito na compreensão e na tomada de decisão de medidas preventivas para a contenção do quadro epidemiológico em uma determinada região.</p>
                </div>
                <Titulo texto="Modelo ARIMA" />
                <div className="flex flex-row items-center w-1/2 mt-10 mx-auto">
                <p className="text-justify">O modelo ARIMA (AutoRegressive Integrated Moving Average) é apropriado para analisar séries temporais, como os casos semanais de dengue. Ele pode ser usado para prever o número de casos futuros com base em dados históricos, com base em variáveis como casos estimados e condições climáticas.</p>
                </div>
                <Titulo texto="Modelo de regressão linear" />
                <Artigo 
                texto='A regressão linear pode ajudar a identificar relações entre variáveis como condições climáticas e a incidência de casos de dengue. Além das variáveis relacionadas aos casos, fatores como temperatura e umidade podem ser preditores fortes na regressão linear para estimar o número de casos. A regressão linear é simples de implementar e pode oferecer uma boa visão sobre como os fatores climáticos influenciam a disseminação da dengue. '
                posicaoDoTexto="R"
                nomeImagem="regressao_linear.jpg"
                altImagem="Visualização da regressão linear" />
                <Footer />
            </div>
        </>
    )
}