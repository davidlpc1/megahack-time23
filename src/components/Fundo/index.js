import React from 'react';

export default function Fundo({ name,minPrice,maxPrice ,atualization,color}){
    return (
        <>
            <div className={`border-solid border-l-4 border-${color} lg:flex ml-48 m-12 lg:items-center lg:justify-between shadow-xl p-8`}>
                <div className="flex-1 min-w-0">
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate"
                    onMouseDown={({ buttons ,target}) => {
                    if(buttons === 2){
                        target.parentNode.parentNode.nextElementSibling.classList.remove('hidden')
                    }
                    }}
                >
                    {name}
                </h2>
                <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap">

                    <div className="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mr-6">

                    <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                    </svg>
                    {minPrice} &ndash; {maxPrice}
                    </div>
                    <div className="mt-2 flex items-center text-sm leading-5 text-gray-500">

                    <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    {atualization}
                    </div>
                </div>
                </div>
                <div className="mt-5 flex lg:mt-0 lg:ml-4">

                <span className="hidden sm:block ml-3 shadow-sm rounded-md">
                    <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
                    onClick={( {target}) => {
                        const isSvg = target.childElementCount === 1;
                        const isButton = target.type === 'button';
                        if(!isButton && isSvg){
                            target.parentNode.parentNode.parentNode.parentNode.nextElementSibling.classList.remove('hidden')
                        }else if(!isButton){
                            target.parentNode.parentNode.parentNode.parentNode.parentNode.nextElementSibling.classList.remove('hidden')
                        }else{
                            target.parentNode.parentNode.parentNode.nextElementSibling.classList.remove('hidden')
                        }
                        
                    }}
                    >

                    <svg className="-ml-1 mr-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                    </svg>
                    Ver mais
                    </button>
                </span>

                </div>
            </div>
        </>
    )
}