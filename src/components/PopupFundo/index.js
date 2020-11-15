import React from 'react';

export default function PopupFundo({ name,type,rentability,minAplication,color,colorHover,colorFocus}){
    return (
        <>
            <div className="hidden fixed z-10 inset-0 overflow-y-auto">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0" >

                    <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>

                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;

                    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                        <div className={`mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-${color} sm:mx-0 sm:h-10 sm:w-10`} />
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                            <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                            Fundo {name}
                            </h3>
                            <div className="mt-2">
                            <p className="text-sm leading-5 text-gray-500">
                                Esse fundo de {type} tem {minAplication} de aplicação mínima e teve {rentability} de rentabilidade nesse mês
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                        <button type="button" className={`inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-${color} text-base leading-6 font-medium text-white shadow-sm hover:bg-${colorHover} focus:outline-none focus:border-${colorFocus} transition ease-in-out duration-150 sm:text-sm sm:leading-5`}
                            onClick={({target}) => {
                            target.parentNode.parentNode.parentNode.parentNode.parentNode.classList.add('hidden');
                            }}
                        >
                            Ok,Obrigado
                        </button>
                        </span>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}