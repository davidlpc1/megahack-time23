import React from 'react';
import { useHistory } from 'react-router-dom';
import Slider from '../Slider';

export default function Tutorial(){
    const history = useHistory()
    function setSkipTutorial(){
        localStorage.setItem('skipTutorialOrama',String(true));
        history.push('/')
    }

    return (
        <>
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
        </>
    )
    
}