import React from 'react';
import Carousel from "react-elastic-carousel";
import Slider from './components/Slider';


function App() {
  const Logo = "https://minhaconta.orama.com.br/static/img/logos/orama.svg";
  return (
    <>
      <header className="bg-green-600 p-8 flex justify-center">
        <img src={Logo} alt="Orama" />
      </header>

      <Slider />
    </>
  );
}

export default App;
