export default function Footer() {

    const titulo = {
        paddingLeft: '0.5rem',
        borderStyle: 'solid',
        borderWidth: '0px 0px 0px 0.3rem',
        borderColor: '#17a2b8'
    }

    return (
        <>
            <div className="flex flex-col md:flex-row space-x-8 items-center justify-center bg-green-200 pt-8 pb-10">
                <div className="flex mb-10 md:mb-0 flex-col space-y-4 sm:w-1/3 w-10/12 text-black ">
                    <h3 style={titulo}>Veja outros recursos</h3>
                    <a className="linkFooter" href="https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/dengue">Ministério da saúde</a>
                    <a className="linkFooter" href="https://www.indaiatuba.sp.gov.br/saude/vigilancia-em-saude/vigilancia-epidemiologica/dengue/">Prefeitura de Indaiatuba</a>
                    <a className="linkFooter" href="https://info.dengue.mat.br/">Info Dengue</a>
                </div>
                <div className="flex mb-10 md:mb-0 flex-col space-y-4 sm:w-1/3 w-10/12 text-black ">
                    <h3 style={titulo}>Conheça a FATEC de Indaiatuba!</h3>
                    <iframe
                        style={{ marginTop: '0.83em' }}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.304234737353!2d-47.20515972592317!3d-23.085956244296515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8b4b183d3173b%3A0xe4e10e5dd84bd49e!2sFatec%20Indaiatuba%20-%20Faculdade%20de%20Tecnologia%20de%20Indaiatuba%20Dr.%20Archimedes%20Lammoglia!5e0!3m2!1spt-BR!2sbr!4v1718968597670!5m2!1spt-BR!2sbr"
                        width="100%" height="250" loading="lazy"></iframe>
                </div>
            </div>
            <div className=" bg-green-200">
                <div className="sm:w-1/3 w-10/12 flex flex-col items-center pb-6 mx-auto">
                    <h3 style={titulo}>Este site foi criado por estudantes de DSM da FATEC de Indaiatuba:</h3>
                    <a className="linkFooter" href="https://github.com/ArthurDG2" title="https://github.com/ArthurDG2">Arthur Davi Gomes</a>
                    <a className="linkFooter" href="https://github.com/DanielBritoSJunior" title="https://github.com/DanielBritoSJunior">Daniel Brito da Silva Junior</a>
                    <a className="linkFooter" href="https://github.com/ericmeneg" title="https://github.com/ericmeneg">Eric Vinicius da Silva Menegon</a>
                    <a className="linkFooter" href="https://github.com/leohubert27" title="https://github.com/leohubert27">Leonardo Vinicius Gurtler Hubert</a>
                    <a className="linkFooter" href="https://github.com/robson817" title="https://github.com/robson817">Robson Alan Mantovani</a>
                </div>
            </div>

        </>
    )
}