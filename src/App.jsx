import React from 'react'

export default function App() {
  return (
    <>
      <div className='container'>

        <cabecalho/>

        <header>
          <h1>Vite + React</h1>
        </header>

        <section>
          {/* This is a content */}
          <p><a href="/">Home Page</a></p>
          <button onClick={() => alert("Hello World!")}>
            CLick me!
          </button>
        </section>

        <footer>
          <p>&copy; 2021, Vite.Js and react</p>
        </footer>

      </div>
    </>
  )
}
