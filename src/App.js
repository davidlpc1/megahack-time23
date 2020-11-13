import React from 'react';
import { Link } from 'react-router-dom';
import Slider from './components/Slider';


function App() {
  const Logo = "https://minhaconta.orama.com.br/static/img/logos/orama.svg";
  
  function setSkipTutorial(){
    localStorage.setItem('skipTutorialOrama',String(true));
  }

  return (
    <>
      <header className="bg-green-500 p-8 flex justify-center">
        <Link to="/">
          <img src={Logo} alt="Orama" />
        </Link>
      </header>

      {(!Boolean(localStorage.getItem('skipTutorialOrama'))) && (
        <>
          <Slider className="bg-pink-100 pb-8" />

          <button 
            className="rounded bg-green-500 p-3 flex justify-center mx-auto my-8 text-white
            hover:bg-green-200 hover:text-green-600 outline-none transition duration-500 ease-in-out"
            onClick={setSkipTutorial}
          >
            Pular Tutorial
          </button>
        </>
      )}

      {Boolean(localStorage.getItem('skipTutorialOrama')) && (
        <>

        </>
      )}

    </>
  );
}

export default App;
