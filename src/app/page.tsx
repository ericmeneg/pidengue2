import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Botao from "@/components/botao"
import Titulo from "@/components/titulo"

// Fundo anterior "bg-blue-50"
export default function Home() {
  return (
    <body className="bg-white">
      <Navbar />
      <div className="flex flex-row justify-center items-center h-96">
        <img src="/images/todos_contra_dengue_sem_fundo.svg" alt='Imagem de mosquito riscada, indicando proibição, acompanhada do texto "todos contra a dengue"'></img>
        <h1 className="text-green-200 text-5xl text-center">Xô dengue</h1>
      </div>
      <div className="flex flex-row mx-auto w-4/12 mb-20">
        <Botao texto="Realizar Login" destino="/login" />
      </div>
      <Titulo texto="Veja um vídeo relevante" />
      <div className="px-6">
      <iframe className="w-11/12 mx-auto mt-10 mb-20" width="560" height="560" src="https://www.youtube.com/embed/6DHlzOoA7GU?si=LpHGt8yVeEZOkRQE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
      <Footer />
    </body>
  )
}