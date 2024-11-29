import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Botao from "@/components/botao"

// Fundo anterior "bg-blue-50"
export default function Home() {
  return (
    <body className="bg-white">
      <Navbar />
      <div className="flex flex-row justify-center items-center h-96 ">
        <img src="/images/todos_contra_dengue_sem_fundo.svg" alt='Imagem de mosquito riscada, indicando proibição, acompanhada do texto "todos contra a dengue"'></img>
        <h1 className="text-green-200 text-5xl text-center">Xô dengue</h1>
      </div>
      <div className="flex flex-row mx-auto w-4/12">
        <Botao texto="Realizar Login" destino="/login" />
      </div>
      <Footer />
    </body>
  )
}