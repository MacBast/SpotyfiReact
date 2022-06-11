//un componente es una ffuncion
/*hooks  funciones de react que nos permiten modificar 
el comportamento de un componente
*/

import { consultarApi } from "../Services/servicio.js"
import { useEffect,useState } from "react" //hook para determinar cuantas veces vamos  a ejecutar algo de logia dentro del componente

export function Home(){

    const[carga,setcarga]=useState(true)
    const[canciones,setcanciones]=useState(null)

    useEffect(function(){
         //llamando al servicio desde el componente
        consultarApi()
        .then(function (respuesta) {
            setcanciones(respuesta)
            setcarga(false)
        })
    },[])
    if(carga==true){
        //console.log("cargando")
        return(
            <>
                <h1>cargando...</h1>
                <br/>
            </>
        )
    }else{
        //console.log(canciones)
        return(
            <div>
                {
                    canciones.tracks.map(function(cancion,indice){
                        return(
                            <div key={indice}>
                                <h1>{cancion.name}</h1>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    //console.log(canciones)
}