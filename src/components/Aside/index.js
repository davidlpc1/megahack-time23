import React from 'react';
import Home from '../../assets/img/home.svg'

export default function Aside(){
    return(
        <aside className="absolute top-0 left-0 h-screen w-32 text-center text-white my-8">
            <div className="flex justify-center align-center flex-col border-solid border-b-2 pb-6 border-white-100">
                <img className="w-12 mx-auto cursor-pointer" src={Home} alt="Home" />
                <h4>Home</h4>
            </div>
        </aside> 
    );
}