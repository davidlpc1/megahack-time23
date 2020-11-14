import React from 'react';
import Header from './components/Header';
import Aside from './components/Aside';
import './assets/index.css';
import Tutorial from './components/Tutorial'
import Simulation from './components/Simulation';

function App() {
  return (
    <div className="relative">
      <Header />

      <Tutorial />

      <Simulation />
      
      {Boolean(localStorage.getItem('skipTutorialOrama')) && Boolean(localStorage.getItem('skipSimuladorOrama')) && (
        <>
          <Aside />
          <div className="ml-40">
            Acabou o tutorial e a simulação
          </div>
        </>
      )} 

    </div>
  );
}

export default App;
