
import Chute from "./components/Chute";
import Jogo from "./components/Jogo"
import Letras from "./components/Letras";
import palavras from "./palavras";
import { useState } from "react"



function App() {
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  const [desativado, setDesativado] = useState(true)
  const [palavraEscolhida, setpalavraEscolhida] = useState([])
  const [letraClicada, setletraClicada] = useState([])
  const [qtdeErros, setqtdeErros] = useState(0)
  const [imagemForca, setimagemForca] = useState("img/forca0.png")
  const [corLetra, setcorLetra] = useState("")
  let [tentativa, setTentativa] = useState("")
  const [palavraChute, setPalavraChute] = useState(null)
 

  const renderPalavra = palavraEscolhida.map((l, index) => letraClicada.includes(palavraEscolhida[index]) ? l : " _")
  console.log(palavraEscolhida)
  const palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)];
 
  function iniciarJogo() {
   
    // console.log(palavraAleatoria)
    const arrayPalavra = [...palavraAleatoria];
    setpalavraEscolhida(arrayPalavra)
    setDesativado(false)
    setTentativa("")
    setcorLetra("")
    setPalavraChute(null)
    setimagemForca("img/forca0.png")
    setqtdeErros(0)
    setletraClicada([])
  }


  function clicarLetra(caracter) {
    const novoarray = [...letraClicada, caracter]
    setletraClicada(novoarray)
  

    if (!palavraEscolhida.includes(caracter)) {
      let errosAtual = qtdeErros + 1
      setqtdeErros(errosAtual)

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
        jogadorPerdeu()
      }
    }
  }


  if (desativado === false){
    if(renderPalavra.join("") === palavraEscolhida.join("")){
      jogadorGanhou()
    }
 }
 

 function chutarPalavra() {
const palavra = palavraEscolhida.join("")
if(tentativa === palavra){
 jogadorGanhou()
} else{
  jogadorPerdeu()
}
 }

function jogadorGanhou(){
  setPalavraChute([...palavraEscolhida])
  setpalavraEscolhida([])
  setcorLetra("correta")
  setDesativado(true)
}

function jogadorPerdeu(){
  setPalavraChute([...palavraEscolhida])
  setpalavraEscolhida([])
  setcorLetra("incorreta")
  setimagemForca("img/forca6.png")
  setDesativado(true)

}
 

  return (
    <>
      <div className="container-principal">
        <Jogo
          iniciarJogo={iniciarJogo}
          renderPalavra={renderPalavra}
          imagemForca={imagemForca}
          corLetra={corLetra}
          palavraChute={palavraChute}
          palavraAleatoria={palavraAleatoria}
        />

        <Letras
          alfabeto={alfabeto}
          clicarLetra={clicarLetra}
          palavas={palavras}
          letraClicada={letraClicada}
          desativado={desativado}
          qtdeErros={qtdeErros}
        />

        <Chute
          desativado={desativado}
          setTentativa={setTentativa}
          tentativa={tentativa}
          chutarPalavra={chutarPalavra}
        />
      </div>
    </>
  );


}
export default App;