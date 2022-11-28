
export default function Jogo({ renderPalavra, iniciarJogo, imagemForca, corLetra, palavraChute}) {


    return (
        <>
            <div className="container">
                <img className="forca" src={imagemForca} />

                <div className="container-direita">
                    <div className="escolherPalavra" onClick={() => iniciarJogo()}>Escolher Palavra</div>
                    <div className={`palavra ${corLetra}`}>
                        {renderPalavra}
                       {palavraChute !== null ? palavraChute.map((i) => i) : false}
                    </div>

                </div>
            </div>
        </>
    )
}


