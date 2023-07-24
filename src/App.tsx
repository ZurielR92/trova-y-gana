import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti';


function App() {

  const [state, setState] = useState('init');
  const [word, setWord] = useState('');
  const [qualify, setqualify] = useState(0);

  const onInit = () => {
    setState('loading');
    setTimeout(() => {
      setWord(obtenerPalabraAleatoria())
      setState('word')
    }, 2000)
  }

  const qualifier = () => {
    setState('loading');
    setTimeout(()=> {
      setState('qualify')
      setqualify(aleatorioEntreCeroYUno);
      handleConfettiClick();
    },5000)
  }

  const reset = () => {
    setState('init');
    setWord('');
  }

  function aleatorioEntreCeroYUno() {
    return Math.floor(Math.random() * 2);
  }

  function obtenerPalabraAleatoria() {
    const palabrasTrovas = [
      "Bandeja paisa",
      "Sancocho antioqueño",
      "Arepa antioqueña",
      "Ajiaco",
      "Berraco",
      "Tominejo",
      "Panela",
      "Café",
      "Guayabo",
      "Tradiciones folclóricas",
      "Festival de la Trova",
      "Festival de Danzas",
      "Mariachi",
      "Corrido antioqueño",
      "Tejo",
      "Rana",
      "Fonda antioqueña",
      "Viejoteca",
      "Café de hoya",
      "Ron Medellín",
      "Pueblito paisa",
      "Atardecer en Santa Elena",
      "Desfile de Autos Clásicos",
      "Caballo de Paso Fino",
      "Feria Ganadera",
      "Haciendas Cafeteras",
      "Café de exportación",
      "Cometas",
      "Pueblito paisa",
      "Trianón",
      "Fondas Silleteras",
      "La Macarena",
      "Plaza de Flores",
      "Danzas folclóricas",
      "Trova antioqueña",
      "Atuendo tradicional",
      "Cimarrona",
      "Pueblos Antioqueños",
      "Recuca",
      "Juegos tradicionales",
      "Chapoleras",
      "Sanjuanero",
      "Marinera",
      "Parque de las Luces",
      "Comuna 13",
      "Arte callejero",
      "Grafitis",
      "Palomas Blancas",
      "Parque Arví",
      "Catedral Metropolitana",
      "Pueblos cercanos a Medellín",
      "Parque Lleras",
      "Ruta de las Flores",
      "Feria de los Mercados Campesinos",
      "Carrera 70",
      "Estadio Atanasio Girardot",
      "Carnaval de las Flores",
      "Plaza de Cisneros",
      "Gobernación de Antioquia",
      "Feria de las Colonias",
      "Desfile de Carros Antiguos"
    ];

    const indiceAleatorio = Math.floor(Math.random() * palabrasTrovas.length);
    const palabraAleatoria = palabrasTrovas[indiceAleatorio];

    return palabraAleatoria;
  }

  const handleConfettiClick = () => {
    const confettiSettings = {
      particleCount: 500,
      spread: 140,
      origin: { y: 0.6 }
    };

    confetti(confettiSettings);
  };

  return (
    <div className='container'>
      <div className='container-flores-superiores'>
        <img className='flores-superiores' src="/flores-superior.png" alt="" />
      </div>
      <div className='container-flores-inferiores'>
        <img className='flores-inferiores' src="/flores-inferior.png" alt="" />
      </div>

      {
        state === 'init' ?
        <div className='container-welcome'>
          <img className='welcome' src="/bienvenida_alkomprar.png" alt="" /> 
          <button onClick={onInit}>COMENZAR</button> 
        </div> : null

      }

      {
        state === 'loading' ?
        <div className='container-loading'>
          <img src="/loading.gif" alt="" />
        </div>:null
      }

      {
        state === 'word' ?
        <div className='container-word'>
          <img className='title' src="/palabra_trova.png" alt="" />
          <h1 className='word'>{word}</h1> 
          <img className='base' src="/base_palabra.png" alt="" /> 
          <button onClick={qualifier}>CALIFICAR</button> 
        </div> : null
      }

      {
        state === 'qualify' ?
        <div className='container-qualify'>
          {
            qualify == 0 ?
            <img className='result' src="/inspiracion_total.png" alt="total" /> :
            <img className='result' src="/trovador_experto.png" alt="experto" />
          }
        </div>:null
      }
      {
        state !== 'init' && state !== 'loading' ?
          <button onClick={reset} className='reload'>
            <img src="/reload.png" alt="" />
          </button>:null
      }
    </div>
  )
}

export default App
