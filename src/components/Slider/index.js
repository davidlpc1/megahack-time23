import React ,{ useState } from 'react';
import Carousel from "react-elastic-carousel";
import fundos from '../../assets/img/fundos.jpeg';
import destaques from '../../assets/img/destaques.jpeg';
import fundos_disponiveis from '../../assets/img/fundos_disponiveis.jpeg';
import legenda from '../../assets/img/legenda.jpeg';
import top_fundos from '../../assets/img/top_fundos.jpeg';
import close from '../../assets/img/close.svg';

export default function Slider({className}){
    const [ sliderClassName, setSliderClassName ] = useState("flex justify-center align-center h-64 w-full bg-pink-100 text-white mx-2 text-xl")
    const [itemsToShow,setItemsToShow] = useState([
        { width: 1, itemsToShow: 1 },
        { width: 768, itemsToShow: 1 },
        { width: 1250, itemsToShow: 1 },
        { width: 1700, itemsToShow: 1 },
    ])

    function openDiv({target}) {
        setItemsToShow([
            { width: 1, itemsToShow: 1,itemsToScroll:0 },
            { width: 768, itemsToShow: 1 ,itemsToScroll:0},
            { width: 1250, itemsToShow: 1,itemsToScroll:0 },
            { width: 1700, itemsToShow: 1 ,itemsToScroll:0},
        ])
        setSliderClassName('flex justify-center align-center h-64 w-full bg-pink-100 text-white mx-2 text-xl hidden');
        if(target.alt !== 'Close' && target.childElementCount !== 2 ){
            target.nextElementSibling.classList.remove('hidden')
            target.parentNode.style.display = 'flex';
            target.parentNode.style.height = '400px';
            target.parentNode.style.width = '100%';
        }else if(target.alt === 'Close'){
            closeDiv({ target })
        }
        else{
            target.childNodes[1].classList.remove('hidden')
            target.style.display = 'flex';
            target.style.height = '400px';
            target.parentNode.style.minWidth = '600px';
            target.parentNode.style.maxWidth = '1600px';
        }
    }

    function closeDiv({target}){
        setItemsToShow([
            { width: 1, itemsToShow: 1,itemsToScroll:1 },
            { width: 768, itemsToShow: 1,itemsToScroll:1 },
            { width: 1250, itemsToShow: 1 ,itemsToScroll:1 },
            { width: 1700, itemsToShow: 1 ,itemsToScroll:1},
        ])
        setSliderClassName("flex justify-center align-center h-64 w-full bg-pink-100 text-white mx-2 text-xl");
        target.classList.add('hidden');
        target.parentNode.style.height = '16rem';
        target.parentNode.style.width = '100%';
    }

    return (
      <div className={className}>  
        <h1 className="text-center p-8 text-3xl">Tutorial</h1>
        <div className="App outline-none">
          <Carousel className="w-full" breakPoints={itemsToShow } enableAutoPlay={sliderClassName.indexOf('hidden', 0) === -1} autoPlaySpeed={7000}>

            <div 
                className={sliderClassName}
                onClick={openDiv}    
            >
              <img src={fundos} className="h-full outline-none" alt="fundos" />
              <img className="h-2 sm:h-4 md:h-4 lg:h-8 xl:h-10 hidden m-4 cursor-pointer" src={close} alt="Close" 
                onClick={closeDiv}
              />
            </div>

            <div 
                className={sliderClassName}
                onClick={openDiv}    
            >
              <img className="h-full outline-none" src={top_fundos} alt="Top fundos" />
              <img className="h-2 sm:h-4 md:h-4 lg:h-8 xl:h-10 hidden m-4 cursor-pointer" src={close} alt="Close" 
                onClick={closeDiv}
              />
            </div>

            <div 
                className={sliderClassName}
                onClick={openDiv}    
            >
              <img className="h-full outline-none" src={fundos_disponiveis} alt="Fundos disponíveis" />
              <img className="h-2 sm:h-4 md:h-4 lg:h-8 xl:h-10 hidden m-4 cursor-pointer" src={close} alt="Close" 
                onClick={closeDiv}
              />
            </div>

            <div 
                className={sliderClassName}
                onClick={openDiv}    
            >
              <img  className="h-full outline-none" src={destaques} alt="Destaques" />
              <img className="h-2 sm:h-4 md:h-4 lg:h-8 xl:h-10 hidden m-4 cursor-pointer" src={close} alt="Close" 
                onClick={closeDiv}
              />
            </div>

            <div 
                className={sliderClassName}
                onClick={openDiv}    
            >
              <img className="h-full outline-none" src={legenda} alt="Legenda" />
              <img className="h-2 sm:h-4 md:h-4 lg:h-8 xl:h-10 hidden m-4 cursor-pointer" src={close} alt="Close" 
                onClick={closeDiv}
              />
            </div>

          </Carousel>
        </div>
      </div>
    );
}