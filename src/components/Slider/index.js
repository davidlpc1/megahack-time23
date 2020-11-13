import React from 'react';
import Carousel from "react-elastic-carousel";
import fundos from '../../assets/img/fundos.jpeg';

export default function Slider(){
    const sliderClass = "flex justify-center align-center h-64 w-full bg-blue-100 text-white mx-2 text-xl";
  
    return (
      <>  
        <h1 className="text-center p-8 text-3xl">Tutorial</h1>
        <div className="App">
          <Carousel breakPoints={[
            { width: 1, itemsToShow: 1 },
            { width: 768, itemsToShow: 2 },
            { width: 1250, itemsToShow: 3 },
            { width: 1700, itemsToShow: 4 },
          ]}>
            <div className={sliderClass}>
              <img src={fundos} alt="Orama" />
            </div>
            <div className={sliderClass}>
                <img src={fundos} alt="Orama" />
            </div>
            <div className={sliderClass}>
                <img src={fundos} alt="Orama" />
            </div>
            <div className={sliderClass}>
                <img src={fundos} alt="Orama" />
            </div>
            <div className={sliderClass}>
                <img src={fundos} alt="Orama" />
            </div>
            <div className={sliderClass}>S
                <img src={fundos} alt="Orama" />
            </div>
            <div className={sliderClass}>
                <img src={fundos} alt="Orama" />
            </div>
            <div className={sliderClass}>
                <img src={fundos} alt="Orama" />
            </div>
          </Carousel>
        </div>
      </>
    );
}