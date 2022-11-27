
export default function Letras({ alfabeto, clicarLetra }) {
    return (
        <div className="letras">
            {alfabeto.map((l, index) => <div onClick={() => clicarLetra(l)} className="letra" key={index}> {l.toUpperCase()}</div>)}
        </div>
    )
}

