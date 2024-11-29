'use client'
import Navbar from "@/components/navbar";
import Artigo from "@/components/artigo"
import Titulo from "@/components/titulo";
import Footer from "@/components/footer";
import Topo from "@/components/topo";
import React, { useState, useEffect } from "react";

interface dataType {
    nivel: number,
    data_iniSE: number,
    casos: number
}

export default function Atualmente() {
    const [data, setData] = useState< dataType[] | null | undefined >(null)
    const [loading, setLoading] = useState< boolean>(true)
    const [error, setError] = useState< string | null >(null)

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await fetch("https://pidengue2backend.onrender.com/proxy/?url=https%3A%2F%2Finfo.dengue.mat.br%2Fapi%2Falertcity%2F%3Fgeocode%3D3520509%26disease%3Ddengue%26format%3Djson%26ew_start%3D44%26ey_start%3D2024%26ew_end%3D48%26ey_end%3D2999")
                if (!response.ok && response.status != 304){
                    throw new Error("Não foi possível obter uma resposta")
                }
                const jsonData = await response.json()
                setData(jsonData)
            } catch (error: unknown){
                if (error instanceof Error){
                    setError(error.message)
                } else {
                    setError('Um erro desconhecido ocorreu')
                }
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    function unixConverter(timestamp: number | undefined){
        if (timestamp == undefined){
            return ''
        }
        const currentDate = new Date(timestamp)
        const months = ['01','02','03','04','05','06','07','08','09','10','11','12'];
        const year = String(currentDate.getFullYear());
        const month= String(months[currentDate.getMonth()]);
        let date = String(currentDate.getDate());
        if (date.length<2) {
            date = '0'+date
        }
        const recordDate = date+'/'+month+'/'+year
        return recordDate
    }

    const dia = unixConverter(data?.[0]?.data_iniSE)
    const casos = data?.[0]?.casos
    const nivel = data?.[0]?.nivel

    let classeStatus = ''
    let statusStringCor = ''
    if (nivel == 1){
        classeStatus = 'text-lime-500'
        statusStringCor = 'verde'
    } else if (nivel == 2){
        classeStatus = 'text-amber-300'
        statusStringCor = 'amarelo'
    } else if (nivel == 3) {
        classeStatus = 'text-amber-500'
        statusStringCor = 'laranja'
    } else {
        classeStatus = 'text-red-500'
        statusStringCor = 'vermelho'
    }

    return (
        <>
        <div className="bg-white">
        <Navbar/>
        <Titulo texto="Atualmente" />
        <Artigo
        texto="A dengue sempre foi um problema, dos grandes, em países subtropicais e tropicais. As mudanças climáticas, a alta taxa de urbanização acontecendo a todo momento são fatores que contribuem para que o mosquito Aedes Aegypti se propague com mais facilidade. Ultimamente o surto de dengue tem piorado bastante, tanto sua propagação, quanto as consequências da pessoa que contraiu a dengue, aumentando rapidamente o número de casos e mortes. O vírus da dengue vem desafiando os sistemas de saúde no Brasil inteiro, o Distrito Federal está na liderança de estado com mais casos de dengue no Brasil (coeficiente de incidência)."
        posicaoDoTexto="R"
        nomeImagem="infografico.svg"
        altImagem="Gráfico que apresenta algumas informações sobre a dengue no Brasil, uma pesquisa de 24 de maio de 2024, os dados apresentados são 5.239.867 casos prováveis, 3.038 mortes confirmadas e 2.679 mortes em investigação"
        heightImagem="max-h-96" />
        <div className="py-8 mt-20 rounded-lg w-4/5 mx-auto flex flex-col items-center justify-center" style={{
            borderStyle:'solid',
            borderWidth:'thin',
        }}>
            <h2 className="text-2xl">Veja os dados sobre a dengue em Indaiatuba na última semana:</h2>
            {loading && <h2>Carregando...</h2>}
            {error && <p>Sentimos muito, ocorreu um erro ao recuperar os dados</p>}
            {data && !loading && !error && (
            <>
            <p>Indaiatuba teve {casos} casos de dengue essa semana ({dia})</p>
            <p className={classeStatus}>O nível de alerta é {statusStringCor}!</p>
            </>
            )}
        </div>
        </div>
        <div className="mb-20" />
        <Topo />
        <Footer />
        </>
    )
}