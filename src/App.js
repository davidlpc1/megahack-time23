import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from './components/Slider';
import Aside from './components/Aside'
import './assets/index.css';
import close from './assets/img/close.svg';
import next from './assets/img/next.svg';

function App() {
  const Logo = "https://minhaconta.orama.com.br/static/img/logos/orama.svg";
  const [AtualButton, setAtualButton] = useState(0);
  const descriptionButtons = [
    'A Home é a área inicial da aplicação',
    'Conta que tem transações,é movimentada',
    'Invista seu dinheiro aqui',
    'Confira a cotação das moedas...',
    'Acesse as ferramentas Orama...',
    'Aprenda mais sobre finanças',
    'Entre em contato com o nosso time'
  ]

  function simulation( { target }  ){
    const { parentNode } = target;
    const lenButtons = parentNode.previousElementSibling.childElementCount
    parentNode.childNodes[1].innerHTML = descriptionButtons[AtualButton]
    console.log(AtualButton >= lenButtons)
    if(AtualButton > 0 && AtualButton < lenButtons){
      parentNode.previousElementSibling.childNodes[AtualButton - 1].style.backgroundColor = '#639c3199';
    }else if(AtualButton >= lenButtons){
      parentNode.childNodes[1].innerHTML = 'Acabou a simulação';
      setAtualButton(0);
      finishSimulation({target});
      return;
    }
    parentNode.previousElementSibling.childNodes[AtualButton].style.backgroundColor = '#639c31';
    setAtualButton(AtualButton + 1);
    parentNode.parentNode.parentNode.classList.add('popup')
  }
  
  function finishSimulation( {target } ){
    localStorage.setItem('skipSimuladorOrama',String(true))
    target.parentNode.style.display = 'none';
    target.parentNode.parentNode.parentNode.classList.remove('popup')
  }

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
          <div className="w-40 h-40 bg-gray-400 p-2 mx-64 my-4 text-black">
            <img className="h-4  cursor-pointer" 
              onClick={finishSimulation} 
              src={close} alt="Close" />
            <p className="text-xl tracking-normal">Inicie a simulação</p>
            <img className="h-4  cursor-pointer mx-auto my-2" 
              onClick={simulation} 
              src={next} alt="Next" />
          </div>
        </>
      )} 

    </div>
  );
}

export default App;
