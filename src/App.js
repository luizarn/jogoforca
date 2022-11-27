
import Chute from "./components/Chute";
import Jogo from "./components/Jogo"
import Letras from "./components/Letras";
import palavras from "./palavras";
import { useState } from "react"


function App() {
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  
  const [letraClicada, setletraClicada] = useState([])
  const [palavraEscolhida, setpalavraEscolhida] = useState([])

  const renderPalavra = palavraEscolhida.map((l, index) => letraClicada.includes(palavraEscolhida[index]) ? l : " _")

  let [qtdeErros, setqtdeErros] = useState(0)
  let [imagemForca, setimagemForca] = useState("img/forca0.png")


  function iniciarJogo() {
    const palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)];
    console.log(palavraAleatoria)
    const arrayPalavra = [...palavraAleatoria];
    setpalavraEscolhida(arrayPalavra)
  }

  function clicarLetra(caracter) {
    const novoarray = [...letraClicada, caracter]
    setletraClicada(novoarray)
    if (!palavraEscolhida.includes(caracter)) {
      let errosAtual = qtdeErros + 1
      setqtdeErros(errosAtual)
      console.log(qtdeErros)
      if (errosAtual === 1) {
        setimagemForca("img/forca1.png")
      } else if (errosAtual === 2) {
        setimagemForca("img/forca2.png")
      } else if (errosAtual === 3) {
        setimagemForca("img/forca3.png")
      } else if (errosAtual === 4) {
        setimagemForca("img/forca4.png")
      } else if (errosAtual === 5) {
        setimagemForca("img/forca5.png")
      } else if (errosAtual === 6) {
        setimagemForca("img/forca6.png")
      }
    }
  }


  return (
    <>
      <div className="container-principal">
        <Jogo
          iniciarJogo={iniciarJogo}
          renderPalavra={renderPalavra}
          imagemForca={imagemForca}
        />
        <Letras
          alfabeto={alfabeto}
          clicarLetra={clicarLetra}
          palavas={palavras}
        />
        <Chute />
      </div>
    </>
  );
}

export default App;