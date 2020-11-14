import React, { useState } from 'react';
import Aside from '../Aside';
import close from '../../assets/img/close.svg';
import next from '../../assets/img/next.svg';
import { useHistory } from 'react-router-dom';

export default function Simulation(){
  const history = useHistory('/');
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
      target.parentNode.parentNode.parentNode.classList.remove('popup');
      history.push('/');
    }

    return (
        <>
            {Boolean(localStorage.getItem('skipTutorialOrama')) && !Boolean(localStorage.getItem('skipSimuladorOrama')) && (
            <>
                <Aside />
                <div className="w-40 h-40 bg-green-500 p-2 mx-64 my-4 text-black">
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
        </>
    )
}