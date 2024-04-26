import React from 'react';
import BOT3 from '../assets/subscription/bot3.svg'
import price1 from '../assets/subscription/price-lite.svg'
import price2 from '../assets/subscription/price-pro.svg'
import {Link} from "react-router-dom";


export default function Subscription() {
    return (
        <div id='prices' className="w-screen">
            {/* bot */}
            <div className="z-10 relative ">
                <img src={BOT3} alt="bot2"
                     className='absolute mobile:w-1/3 mobile:top-[900px] mobile:left-[390px] tablet:right-24 tablet-lg:right-18  desktop:right-36  desktop:w-1/4 '/>
            </div>
            {/* Header */}
            <div className="flex items-center  text-center font-bold  h-96  bg-light-pink ">
                <div
                    className=" mx-auto my-auto desktop:w-full text-lg mobile:text-xl tablet:text-2xl tablet-lg:-3xl desktop:text-4xl font-[Geist] ">
                    Moscobot дает исчерпывающий <br/> ответ на запросы покупателей <br/> и
                    ведет их к покупке
                </div>
            </div>
            <div className="flex flex-col tablet:flex-row tablet-lg:flex-row desktop:flex-row desktop-lg:flex-rowmobile:flex-col w-full justify-center tablet:grid-cols-2 tablet-lg:grid-cols-2 ">
                {/* left */}
                <div
                    className=" flex justify-center items-center mobile:w-full tablet:w-full size-1/2 bg-light-pink h-[580px] ">
                    <div className='mx-auto'>
                        <div className="p-5 text-4xl text-slate-500 font-bold m-2 font-[Geist]">Набор Lite</div>
                        <div className="desktop:w-[440px] p-10 shadow-slate-200 shadow-lg desktop:h-[300px]  rounded-2xl bg-white">
                            {/* Image */}
                            <div className='z-10 relative  '>
                                <img src={price1} alt="price"
                                    className='absolute mobile:w-2/3  mobile:-top-18 mobile:left-36 tablet:w-4/5 tablet:-top-20 tablet:left-36  tablet-lg:w-4/5 desktop:w-3/5  desktop:left-64 desktop:-top-16'/>
                            </div>

                            <ul role="list" className="marker:text-slate-500 list-disc pl-5 space-y-3 ">
                                <li>Бот продавец</li>
                                <li>Бот консультант <br/> Боты ведут пользователей <br/> к покупке</li>
                            </ul>
                            <Link to="/form">
                                <button
                                    className="text-sm p-5 m-4 mt-16 font-[Roboto] font-normal bg-light-purple rounded-xl text-white hover:bg-[#451CC0] all duration-300 active:bg-[#3B16A9]">
                                    Заказать
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* right */}
                <div className=" flex justify-center items-center mobile:w-full tablet:w-full  size-1/2 bg-light-purple h-[580px]">
                    <div className='mx-auto'>
                        <div className="p-5 text-4xl text-slate-300 font-bold m-2 font-[Geist]">Pro Решения</div>
                        <div className="desktop:w-[440px] p-10 shadow-xs desktop:h-[300px] rounded-2xl bg-white">
                            {/* Image */}
                            <div className='z-10 relative  '>
                                <img src={price2} alt="price"
                                     className='absolute desktop:left-52 desktop:-top-28  tablet-lg:w-4/5 tablet:-top-20 tablet:left-36 tablet:w-4/5 mobile:w-2/3 mobile:-top-18 mobile:left-36'/>
                            </div>
                            <ul role="list" className="marker:text-slate-500 list-disc pl-5 space-y ">
                                <li>Анализ</li>
                                <li>Рекоммендация</li>
                                <li>Статистика</li>
                                <li>Тех. поддержка</li>
                            </ul>
                            <Link to="/form">
                                <button
                                    className="text-sm p-5 m-4 mt-16 font-[Roboto] font-normal bg-light-purple rounded-xl text-white hover:bg-[#451CC0] all duration-300 active:bg-[#3B16A9]">
                                    Заказать
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
