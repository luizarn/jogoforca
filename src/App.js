
import Chute from "./components/Chute";
import Jogo from "./components/Jogo"
import Letras from "./components/Letras";
import palavras from "./palavras";
import { useState } from "react"
// import { render } from "@testing-library/react";
// import { render } from "@testing-library/react";


function App() {
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  const [desativado, setDesativado] = useState(true)
  const [palavraEscolhida, setpalavraEscolhida] = useState([])
  const [letraClicada, setletraClicada] = useState([])
  const [qtdeErros, setqtdeErros] = useState(0)
  // const [qtdeAcertos, setqtdeAcertos] = useState(0)
  const [imagemForca, setimagemForca] = useState("img/forca0.png")
  const [corLetra, setcorLetra] = useState("")
  let [tentativa, setTentativa] = useState("")
  const [palavraChute, setPalavraChute] = useState(null)

  const renderPalavra = palavraEscolhida.map((l, index) => letraClicada.includes(palavraEscolhida[index]) ? l : " _")
  // console.log(renderPalavra)
  // console.log(palavraEscolhida)



  function iniciarJogo() {
    const palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)];
    // console.log(palavraAleatoria)
    const arrayPalavra = [...palavraAleatoria];
    setpalavraEscolhida(arrayPalavra)
    setDesativado(false)
  }


  function clicarLetra(caracter) {
    const novoarray = [...letraClicada, caracter]
    setletraClicada(novoarray)
   
    // console.log(novoarray)
    if(!renderPalavra.includes(" _")){
      setcorLetra("correta")
  
    }

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
        setimagemForca("img/forca6.png")
        // setcorLetra("incorreta")
      }
    } else {
      // let acertosAtual = qtdeAcertos + 1
      // setqtdeAcertos(acertosAtual)
      // console.log(acertosAtual)


  }
    ganharJogo()
    
  }
  function ganharJogo(){
    const escolhida = palavraEscolhida.join("")
    const renderizada = [...renderPalavra]
    const render = renderizada.join("")
    console.log(escolhida)
    console.log(render)
    if (escolhida === render){
      alert("ganhou")
      console.log(renderPalavra)
      console.log(palavraEscolhida)
   }
  }

 function chutarPalavra() {
const palavra = palavraEscolhida.join("")
if(tentativa === palavra){
  setpalavraEscolhida([])
  setPalavraChute([...palavraEscolhida])
  setcorLetra("correta")
} else{
  setpalavraEscolhida([])
  setPalavraChute([...palavraEscolhida])
  setcorLetra("incorreta")
  setimagemForca("img/forca6.png")
}
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
        // verificar={verificar}
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