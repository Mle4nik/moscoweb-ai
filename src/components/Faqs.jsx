import React from 'react';
import CROSS from '../assets/faqs/cross.svg'
export default function Faqs() {
  return (
    <>
    <div>
        <div className='mx-auto tracking-wide py-24 font-[Geist] max-w-[1440px]'>
            <div className="font-bold text-4xl text-center mb-12">
                Частые вопросы
            </div>
            <div className="text-2xl text-[#000C71] space-y-6">
                <div className="flex mx-12 space-x-8">
                    <div className="border-2 p-8 w-1/2 rounded-xl flex items-center">
                        <div className="w-auto mr-8 border-2 rounded-xl">
                            <img className="m-3 w-8" src={CROSS} alt=""/>
                        </div>
                        <h4>Сколько стоит сервис?</h4>
                    </div>
                    <div className="border-2 p-8 w-1/2 rounded-xl flex items-center">
                        <div className="w-auto mr-8 border-2 rounded-xl">
                            <img className="m-3 w-8" src={CROSS} alt=""/>
                        </div>
                        <h4>Как начать работу?</h4>
                    </div>
                </div>
                <div className="flex mx-12 space-x-8">
                    <div className="border-2 p-8 w-1/2 rounded-xl flex items-center">
                        <div className="w-auto mr-8 border-2 rounded-xl">
                            <img className="m-3 w-8" src={CROSS} alt=""/>
                        </div>
                        <h4>Можно ли заказать разработку у вас?</h4>
                    </div>
                    <div className="border-2 p-8 w-1/2 rounded-xl flex items-center">
                        <div className="w-auto mr-8 border-2 rounded-xl">
                            <img className="m-3 w-8" src={CROSS} alt=""/>
                        </div>
                        <h4>Могу ли я подключить коллег или клиентов?</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    )
  }