import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// Fundo anterior "bg-blue-50"
export default function Home(){
  return(
    <body className="bg-white">
      <Navbar/>
      <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-green-200 text-5xl">Xô dengue</h1>
      </div>
      <Footer />
    </body>
  )
}