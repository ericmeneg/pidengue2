export default function Footer() {
    return (
        <>
            <div className="flex flex-row space-x-8 items-center justify-center mt-20 bg-emerald-100 pt-8 pb-10">
                <div className="flex flex-col space-y-4 w-1/3">
                    <h3>Veja outros recursos</h3>
                    <a href="https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/dengue">Ministério da saúde</a>
                    <a href="https://www.indaiatuba.sp.gov.br/saude/vigilancia-em-saude/vigilancia-epidemiologica/dengue/">Prefeitura de Indaiatuba</a>
                    <a href="https://info.dengue.mat.br/">Info Dengue</a>
                </div>
                <div>
                    <h3>Conheça a FATEC de Indaiatuba!</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.304234737353!2d-47.20515972592317!3d-23.085956244296515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8b4b183d3173b%3A0xe4e10e5dd84bd49e!2sFatec%20Indaiatuba%20-%20Faculdade%20de%20Tecnologia%20de%20Indaiatuba%20Dr.%20Archimedes%20Lammoglia!5e0!3m2!1spt-BR!2sbr!4v1718968597670!5m2!1spt-BR!2sbr"
                        width="100%" height="250" loading="lazy"></iframe>
                </div>
            </div>
        </>
    )
}