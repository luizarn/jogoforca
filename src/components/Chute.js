export default function Chute({ desativado, chutarPalavra, setTentativa, tentativa }) {
   return (
      <div className="chute">
         <h1>Já sei a palavra!</h1>
         <input
            data-test="guess-input"
            type="text"
            placeholder=""
            className="input-digitar"
            disabled=
            {(desativado === true) ? true : false}
            onChange={(event) => setTentativa(event.target.value)}
            value={tentativa}
         />


         <button data-test="guess-button" onClick={() => chutarPalavra()} className="botaoChutar">Chutar</button>
      </div>
   )
}