import React from 'react';
import Header from './components/Header';
import Aside from './components/Aside';
import './assets/index.css';
import Tutorial from './components/Tutorial'
import Simulation from './components/Simulation';
import Fundo from './components/Fundo';
import PopupFundo from './components/PopupFundo';

function App() {
  return (
    <div className="relative">
      <Header />

      <Tutorial />

      <Simulation />
      
      {Boolean(localStorage.getItem('skipTutorialOrama')) && Boolean(localStorage.getItem('skipSimuladorOrama')) && (
        <>
          <Aside />
          <h1 className="ml-48 my-4 text-black text-4xl">Top Fundos</h1>


          <Fundo
            name={"Western Asset FIA BDR"}
            minPrice={"R$68,68 "}
            maxPrice={"R$72,86 "}
            atualization={"14/11/2020"}
            color={"orange-600"}
          />

          <PopupFundo 
            name={"Western Asset FIA BDR"}
            type={"Ações"}
            rentability={"4,37"}
            minAplication={"R$1000,00"}
            color={"orange-600"}
            colorHover={"orange-700"}
            colorFocus={"orange-800"}
          />

          <Fundo
            name={"Órama Ouro Fim"}
            minPrice={"R$60,77 "}
            maxPrice={"R$63,87 "}
            atualization={"15/11/2020"}
            color={"yellow-600"}
          />

          <PopupFundo 
            name={"Órama Ouro Fim"}
            type={"MultiMercado"}
            rentability={"-2,10"}
            minAplication={"R$0,00"}
            color={"yellow-600"}
            colorHover={"yellow-700"}
            colorFocus={"yellow-800"}
          />

        </>
      )} 

      <span className="m-48">
        Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
      </span>

    </div>
  );
}

export default App;
