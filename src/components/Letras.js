
export default function Letras({ alfabeto, clicarLetra, letraClicada, desativado, qtdeErros }) {
    return (
        <div className="letras">
            {alfabeto.map((l, index) => <button disabled=
                {(letraClicada.includes(l)) || (desativado === true) || (qtdeErros === 6) ? true : false}
                onClick={() => clicarLetra(l)}
                className={`${desativado === true || letraClicada.includes(l) ? "letra" : "habilitada"}`}
                key={index}> {l.toUpperCase()} </button>)}
        </div>
    )
}

