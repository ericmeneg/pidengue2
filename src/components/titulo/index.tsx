"use client"

interface TituloProps{
    texto: string
}

export default function Titulo({texto}: TituloProps) {
    return (
        <>
            <div className="title mx-auto w-[90%] mt-10 ">
            <h2 className="titleText text-black" style={{fontWeight: 'normal'}}>{texto}</h2>
            </div>
            <style jsx>{`
                .title{
                    width: 90%;
                    background-color: #BBF7D0;
                    border-radius: 60px
                }
                
                .titleText{
                    margin-top: 0.5rem;
                    padding: 0;
                    padding-bottom: 0.3rem;
                    display: flex;
                    justify-content: center;
                    font-size: 1.5rem;
                    padding-bottom: 0.2rem;
                    font-family: 'Merriweather'
                }
            `} </style>
        </>
    )
}