import useClima from "../hooks/useClima"
import Formulario from "./Formulario"
import Loading from "./Loading"

import Resultado from "./Resultado"



export default function AppClima() {

  const { resultado, cargando, noResultado } = useClima()


  return (
    <>
      <main className='dos-columnas'>
        <Formulario/>

        { cargando ? <Loading/> :
          resultado?.name ? <Resultado/> :
          noResultado ? <p>{noResultado}</p> :
          <p>El clima se va a mostrar aqui</p>
        }
      </main>
    </>
  )
}
