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
        },
        {
            img:Conta_Corrente,
            alt:'Conta Corrente',
        },
        {
            img:Invista,
            alt:'Invista Agora',
        },
        {
            img:Moedas,
            alt:'Moedas e Serviços',
        },
        {
            img:Ferramentas,
            alt:'Ferramentas',
        },
        {
            img:Aprenda,
            alt:'Aprenda',
        },
        {
            img:Atendimento,
            alt:'Atendimento',
        },
    ]
    return(
        <aside className="absolute top-0 left-0 .min-h-screen w-40 text-center text-white">
            {buttons.map(({ img, alt}) => {
                return (
                    <div 
                        key={`img_${img}_${alt}`} 
                        className="flex justify-center align-center flex-col border-dotted border-b-2 py-6 border-white-100">
                        <img className="w-8 mx-auto cursor-pointer" src={img} alt={alt} />
                        <h4 className="select-none">{alt}</h4>
                    </div>
                )
            })}


        </aside> 
    );
}