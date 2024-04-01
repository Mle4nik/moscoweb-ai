import React from 'react';
import BOT3 from '../assets/subscription/bot3.svg'
import price1 from '../assets/subscription/price-lite.svg'
import price2 from '../assets/subscription/price-pro.svg'


export default function Subscription() {
    return (
        <div className="w-screen">
            <div className="z-10 relative  ">
                <img src={BOT3} alt="bot2" className='absolute xl:right-36 md:-right-4'/>
            </div>
            <div className="flex justify-center items-center text-5xl text-center font-bold w-full h-96 bg-light-pink ">
                <div className="w-full font-[Geist] ">
                    Бот дает исчерпывающий <br/> ответ на запросы покупателей <br/> и
                    ведет их к покупке
                </div>
            </div>
            <div className="w-full flex justify-center ">
                {/* left */}
                <div className=" flex jusstify-center items-center size-1/2 bg-light-pink h-[580px] max-w-[1440px] mx-auto">
                    <div className='mx-auto'>
                        <div className="p-5 text-4xl text-slate-500 font-bold m-2 font-[Geist]">Набор Lite</div>
                        <div className='z-10 relative  '>
                            <img src={price1} alt="price"
                                 className='absolute xl:left-64 xl:-top-16 md:left-36 md:-top-16'/>
                        </div>
                        <div className="xl:w-[440px] p-10 shadow-slate-200 shadow-lg xl:h-[300px] rounded-2xl bg-white">

                            <ul role="list" className="marker:text-slate-500 list-disc pl-5 space-y-3 ">
                                <li>Бот продавец</li>
                                <li>Бот консультант <br/> Боты ведут пользователей <br/> к покупке</li>
                            </ul>
                            <button
                                className="text-sm p-5 m-4 mt-16 font-[Roboto] font-normal bg-light-purple rounded-xl text-white">
                                Заказать
                            </button>
                        </div>
                    </div>
                </div>

                {/* right */}
                <div className=" flex jusstify-center items-center size-1/2 bg-light-purple h-[580px]">
                    <div className='mx-auto'>
                        <div className="p-5 text-4xl text-slate-300 font-bold m-2 font-[Geist]">Pro Решения</div>
                        <div className="xl:w-[440px] p-10 shadow-xs xl:h-[300px] rounded-2xl bg-white">
                            <div className='z-10 relative  '>
                                <img src={price2} alt="price"
                                     className='absolute xl:left-64 xl:-top-24 md:left-36 md:-top-24'/>
                            </div>
                            <ul role="list" className="marker:text-slate-500 list-disc pl-5 space-y ">
                                <li>Анализ</li>
                                <li>Рекоммендация</li>
                                <li>Статистика</li>
                                <li>Тех. поддержка</li>
                            </ul>
                            <button
                                className="text-sm p-5 m-4 mt-16 font-[Roboto] font-normal bg-light-purple rounded-xl text-white">
                                Заказать
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
