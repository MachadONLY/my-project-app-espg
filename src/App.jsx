import Cabecalho from "./components/cabecalho";

import Conteudo from "./components/conteudo";

import Rodape from "./components/Rodape";

import reactlogo from "./assets/react.svg"

 

export default function App() {

 

  let reactlogoAlt = "React logo"

 

  //Lista de links redes sociais

 

  let listaLinks = [<li>GitHub</li>, <li>Youtube</li>]

 

  return (

    <>

      <div className="container">

        <Cabecalho />

 

       

        <Conteudo reactlogoProps = {reactlogo} reactlogoAltProps = {reactlogoAlt}/>

 

        <Rodape listaProps={listaLinks}/>

       

      </div>

    </>

  );

}