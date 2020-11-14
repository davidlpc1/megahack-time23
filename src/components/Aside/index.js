import React from 'react';
import Home from '../../assets/img/home.svg'
import Atendimento from '../../assets/img/atendimento.svg';
import Ferramentas from '../../assets/img/ferramentas.svg';
import Moedas from '../../assets/img/moedas.svg';
import Invista from '../../assets/img/invista.svg';
import Aprenda from '../../assets/img/aprenda.svg';
import Conta_Corrente from '../../assets/img/carteira.svg';

export default function Aside(){
    const buttons = [
        {
            img:Home,
            alt:'Home',
            description:'A Home é a área inicial da aplicação',

        },
        {
            img:Conta_Corrente,
            alt:'Conta Corrente',
            description:'Conta que tem transações,é movimentada',
        },
        {
            img:Invista,
            alt:'Invista Agora',
            description: 'Invista seu dinheiro aqui',

        },
        {
            img:Moedas,
            alt:'Moedas e Serviços',
            description:'Confira a cotação das moedas...',
        },
        {
            img:Ferramentas,
            alt:'Ferramentas',
            description: 'Acesse as ferramentas Orama...',

        },
        {
            img:Aprenda,
            alt:'Aprenda',
            description: 'Aprenda mais sobre finanças',
        },
        {
            img:Atendimento,
            alt:'Atendimento',
            description: 'Entre em contato com o nosso time',
        },
    ];

    return(
        <aside className=" flex flex-col absolute top-0 left-0 .min-h-screen w-40 text-center text-white bg-logo">
            {buttons.map(({ img, alt,description}) => {
                return (
                    <button
                        className="border-dotted border-b-2 py-6 border-white-100 outline-none relative"
                        key={`img_${img}_${alt}`}
                        onClick={({buttons, target}) => {
                            if(buttons === 2){ //ALTERAR
                                if(target.className.indexOf('border-dotted') !== -1){
                                    let text = target.childNodes[0].childNodes[1].innerHTML
                                    text = text === description ? alt : description;
                                    target.childNodes[0].childNodes[1].innerHTML = text;
                                }
                                else if(target.className.indexOf('flex') !== -1){
                                    let text = target.childNodes[1].innerHTML
                                    text = text === description ? alt : description;
                                    target.childNodes[1].innerHTML = text;
                                }else if(target.className.indexOf('cursor-pointer') !== -1){
                                    let text = target.nextElementSibling.innerHTML
                                    text = text === description ? alt : description;
                                    target.nextElementSibling.innerHTML = text;
                                }else{
                                    let text = target.innerHTML
                                    text = text === description ? alt : description;
                                    target.innerHTML = text;
                                }
                            }
                        }} 
                    >
                        <div 
                        className="flex justify-center align-center flex-col py-2"
                        >
                            <img className="w-8 mx-auto cursor-pointer" src={img} alt={alt} />
                            <h4 className="select-none">{alt}</h4>
                        </div>
                    </button>

                )
            })}


        </aside> 
    );
}