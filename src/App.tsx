import { useState, useEffect } from 'react'
import './App.css'
import confetti from 'canvas-confetti';


function App() {

  const [state, setState] = useState('init');
  const [word, setWord] = useState('');
  const [qualify, setqualify] = useState(0);
  const [status, setStatus] = useState('Evaluando desempeño...')
  const [s, setS] = useState(false);

  const onInit = () => {
    setState('loading');
    setTimeout(() => {
      setWord(obtenerPalabraAleatoria())
      setState('word')
    }, 2000)
  }

  const trova = () => {
    setState('loading3');
    setStatus('esperando calificación...')
    setS(true)

    setIsRunning(true)
  }

  const qualifier = (q:number) => {
    if(s === false) {
      return;
    }
    setState('loading2');
    setStatus('Evaluando desempeño...');
    setTimeout(()=>{
      setStatus('Analizando voz...');
    },2000)
    setTimeout(()=>{
      setStatus('Evaluando rimas...');
    },3000)
    setTimeout(()=>{
      setStatus('Analizando coherencia...');
    },4000)

    setTimeout(()=> {
      setState('qualify')
      setStatus('Evaluando desempeño...');

      setqualify(q);
      handleConfettiClick();
      setS(false);
    },5000)
  }

  const reset = () => {
    setState('init');
    setWord('');
    setSeconds(30);
    setIsRunning(false);
  }

  function obtenerPalabraAleatoria() {
    const palabrasTrovas = [
      "Flores",
      "Medellín",
      "Feria",
      "Desfile",
      "Silleteros",
      "Antioquia",
      "Tradición",
      "Cultura",
      "Paisaje",
      "Colorido",
      "Alegría",
      "Música",
      "Gastronomía",
      "Paisa",
      "Orquídea",
      "Feriado",
      "Salsa",
      "Guayabera",
      "Sombrero",
      "Carrera",
      "Cumbia",
      "Festival",
      "Reina",
      "Folklore",
      "Jardín",
      "Arrieros",
      "Cabalgata",
      "Trovas",
      "Alpargatas",
      "Campesino",
      "Chiva",
      "Arepa",
      "Bandeja paisa",
      "Café",
      "Chirimía",
      "Bandola",
      "Guasca",
      "Carnaval",
      "Ganado",
      "Parque Norte",
      "Fiestas",
      "Peña",
      "Bailar",
      "Cerveza",
      "Helado",
      "Mañana de flores",
      "Pueblito Paisa",
      "Aves",
      "Montañero",
      "Mulas",
      "Palma de cera",
      "Parque Arví",
      "Plaza Botero",
      "Tradicional",
      "Rumba",
      "Alebrijes",
      "Caballos",
      "Comida típica",
      "Silleteros",
      "Traje típico",
      "Cuenteros",
      "Chicharrón",
      "Yipao",
      "Artesanía",
      "Feria equina",
      "Silleta",
      "Cuatro",
      "Parranda",
      "Sancocho",
      "Silleta",
      "Recua de mulas",
      "Charango",
      "Acordeón",
      "Feria de las flores",
      "Zócalo",
      "Baile",
      "Cultivos",
      "Hacienda",
      "Compartir",
      "Cosecha",
      "Farolitos",
      "Guirnaldas",
      "Desfile de carros antiguos",
      "Alegria",
      "Pueblos cercanos",
      "Antorchas",
      "Feria de los pájaros",
      "Chocolatería",
      "Marinera",
      "Carriel",
      "Artesanos",
      "Conciertos",
      "Música en vivo",
      "Danza",
      "Mariposario",
      "Traje de gala",
      "Exposición de flores",
      "Colores",
      "Ciclopaseo",
      "Carnaval de la vida"
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





  const [seconds, setSeconds] = useState(30);
  const [isRunning, setIsRunning] = useState(false);
  const [animateClass, setAnimateClass] = useState('');

  useEffect(() => {
    let countdown:any;

    if (isRunning && seconds > 0) {
      countdown = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
        setAnimateClass('animate');
      }, 1000);
    }

    if(seconds == 0 ) {
      setIsRunning(false);
    }

    return () => clearInterval(countdown);
  }, [isRunning, seconds]);

  useEffect(() => {
    if (animateClass) {
      const timer = setTimeout(() => {
        setAnimateClass('');
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [animateClass]);


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
          <button onClick={onInit}>BUSCAR PALABRA</button> 
        </div> : null

      }

      {
        state === 'loading' ?
        <div className='container-loading'>
          <img src="/loading3.png" alt="" />
          <span>Buscando palabras...</span>
        </div>:null
      }
      {
        state === 'loading2' ?
        <div className='container-loading2'>
          <img src="/loading3.png" alt="" />
          <span>{ status }</span>
        </div>:null
      }
      {
        state === 'loading3' ?
        <div className='container-loading2'>
          <span className={`countdown-text ${animateClass}`}>{seconds}</span>
        </div>:null
      }

      {
        state === 'word' ?
        <div className='container-word'>
          <img className='title' src="/palabra_trova.png" alt="" />
          <h1 className='word'>{word}</h1> 
          <img className='base' src="/base_palabra.png" alt="" /> 
          <button onClick={trova}>INICIAR TROVA</button> 
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

      {
        state === 'loading3' && seconds < 20 ?
        <div className='butt'>
          <div className='text'>
            Obtener Calificación
            <div onClick={()=>qualifier(0)} className='left'></div>
            <div onClick={()=>qualifier(2)} className='right'></div>
          </div>
        </div>:null

      }
    </div>
  )
}

export default App
