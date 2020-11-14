import React from 'react';
import { Link } from 'react-router-dom';
import Slider from './components/Slider';
import Aside from './components/Aside'
import './assets/index.css';
import close from './assets/img/close.svg';
import next from './assets/img/next.svg';

function App() {
  const Logo = "https://minhaconta.orama.com.br/static/img/logos/orama.svg";
  
  function setSkipTutorial(){
    localStorage.setItem('skipTutorialOrama',String(true));
  }

  return (
    <div className="relative">
      <header className="bg-logo p-8 flex justify-center shadow-2xl">
        <Link to="/">
          <img src={Logo} alt="Orama" />
        </Link>
      </header>

      {(!Boolean(localStorage.getItem('skipTutorialOrama'))) && (
        <>
          <Slider className="bg-pink-100 pb-8" />

          <button 
            className="rounded bg-logo p-3 flex justify-center mx-auto my-8 text-white
            hover:bg-green-200 hover:text-green-600 outline-none transition duration-500 ease-in-out"
            onClick={setSkipTutorial}
          >
            Pular Tutorial
          </button>
        </>
      )} 
      

      {Boolean(localStorage.getItem('skipTutorialOrama')) && !Boolean(localStorage.getItem('skipSimuladorOrama')) && (
        <>
          <Aside />
          <div className="w-40 h-40 bg-gray-400 p-2 mx-64 my-4 text-justify text-black">
            <img className="h-4  cursor-pointer" 
              onClick={( {target} ) => {
                target.parentNode.style.display = 'none';
                target.parentNode.parentNode.parentNode.classList.remove('popup')
              }} 
              src={close} alt="Close" />
            <p className="text-sm">Inicie a simulação</p>
            <img className="h-4  cursor-pointer mx-auto my-2" 
              onClick={( {target} ) => {
                target.parentNode.childNodes[1].innerHTML = 'A Home e´o início da Orama'
                target.parentNode.parentNode.parentNode.classList.add('popup')
              }} 
              src={next} alt="Next" />
          </div>
        </>
      )}

    </div>
  );
}

export default App;
