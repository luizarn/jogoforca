
export default function Letras({alfabeto}){

    return(
        <div className="letras">

        {alfabeto.map((l) => <div className="letra">{l.toUpperCase()}</div>)}


        </div>
        
    )
   
}