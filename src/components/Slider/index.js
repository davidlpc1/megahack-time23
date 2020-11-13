import React ,{ useState } from 'react';
import Carousel from "react-elastic-carousel";
import fundos from '../../assets/img/fundos.jpeg';

export default function Slider(){
    const [ sliderClassName, setSliderClassName ] = useState("flex justify-center align-center h-64 w-full bg-blue-100 text-white mx-2 text-xl")
    const [itemsToShow,setItemsToShow] = useState([
        { width: 1, itemsToShow: 1 },
        { width: 768, itemsToShow: 2, },
        { width: 1250, itemsToShow: 3 ,},
        { width: 1700, itemsToShow: 4 },
    ])

    return (
      <>  
        <h1 className="text-center p-8 text-3xl">Tutorial</h1>
        <div className="App">
          <Carousel breakPoints={itemsToShow } enableAutoPlay={sliderClassName.indexOf('hidden', 0) === -1} autoPlaySpeed={7000}>
            <div 
                className={sliderClassName}
                onClick={event => {
                    setItemsToShow([
                        { width: 1, itemsToShow: 1,itemsToScroll:0 },
                        { width: 768, itemsToShow: 1 ,itemsToScroll:0},
                        { width: 1250, itemsToShow: 1,itemsToScroll:0 },
                        { width: 1700, itemsToShow: 1 ,itemsToScroll:0},
                    ])
                    setSliderClassName(`${sliderClassName} hidden`);
                    if(event.target.alt === 'Orama'){
                        event.target.parentNode.style.display = 'flex';
                        event.target.parentNode.style.height = '400px';
                    }else{
                        event.target.style.display = 'flex';
                    }

                }}    
            >
              <img src={fundos} alt="Orama" />
            </div>
            <div className={sliderClassName}>
                <img src={fundos} alt="Orama" />
            </div>
            <div className={sliderClassName}>
                <img src={fundos} alt="Orama" />
            </div>
            <div className={sliderClassName}>
                <img src={fundos} alt="Orama" />
            </div>
            <div className={sliderClassName}>
                <img src={fundos} alt="Orama" />
            </div>
            <div className={sliderClassName}>
                <img src={fundos} alt="Orama" />
            </div>
            <div className={sliderClassName}>
                <img src={fundos} alt="Orama" />
            </div>
            <div className={sliderClassName}>
                <img src={fundos} alt="Orama" />
            </div>
          </Carousel>
        </div>
      </>
    );
}