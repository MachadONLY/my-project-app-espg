export default function Conteudo(props) {

    // {area declarativa}

    return(

        <section>

           

          {/* This is a content */}

 

          <p>

            <a href="/">Home Page</a>

          </p>

 

          <button onClick={() => alert("Hello World!")}>CLick me!</button>
          <img src={props.reactlogoProps} alt="" />

       

 

        </section>

    )

}