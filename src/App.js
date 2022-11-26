// import { useState } from "react";
import Chute from "./components/Chute";
import Jogo from "./components/Jogo"
import Letras from "./components/Letras";


function App() {
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  // const [listaPalavras, setlistaPalavras] = useState(alfabeto)


  return (
    <>
    <div className="container-principal">
    <Jogo 
    // listaPalavras={listaPalavras}
    // setlistaPalavras={setlistaPalavras}
    />
    <Letras
    alfabeto={alfabeto}
    />
    <Chute/>
    </div>
    </>
  );
}

export default App;