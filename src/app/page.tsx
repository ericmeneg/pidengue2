import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home(){
  return(
    <body className="bg-blue-50">
      <Navbar/>
      <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-green-200 background-color bg-green-50 text-4xl">Xô dengue</h1>
      </div>
      <Footer />
    </body>
  )
}