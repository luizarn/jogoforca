
export default function Jogo({ renderPalavra, iniciarJogo, imagemForca }) {


    return (
        <>
            <div className="container">
                <img className="forca" src={imagemForca} />

                <div className="container-direita">
                    <div className="escolherPalavra" onClick={() => iniciarJogo()}>Escolher Palavra</div>
                    <div className="palavra">
                        {renderPalavra}
                    </div>

                </div>
            </div>
        </>
    )
}



