import React from 'react';
import LOGO from '../assets/header/logo.svg'
import buttonArrow from '../assets/header/button-arrow.svg'
import SOCIALS from '../assets/header/socials.svg'

const Header = () => {
    return (
        <>
            <div className="w-screen bg-[#F3F5FF] overflow-hidden">
                <div>
                    <div className="flex justify-between items-center text-md font-bold py-5 mx-16 font-['Geist']">
                        <ul className="flex justify-center items-center list-none">
                            <li className="cursor-pointer w-22 mr-8">Функции</li>
                            <li className="cursor-pointer w-20">Документация</li>
                        </ul>
                        <div className="w-28">
                            <img src={LOGO} alt=""/>
                        </div>
                        <ul className="flex justify-center items-center list-none">
                            <li className="cursor-pointer w-20 ml-5">Цены</li>
                            <li className="cursor-pointer w-20">Заказать</li>
                        </ul>
                    </div>
                </div>

                <div className="w-screen">
                    <div className="h-[55vw] w-screen bg-headerBackBg bg-no-repeat bg-contain bg-top">
                        <div className="flex flex-col ml-28 pt-28">
                            <div className="text-white">
                                <h1 className="mb-7 text-9xl font-semibold font-['Poppins']">Moscobot</h1>
                                <p className="font-['Geist'] text-2xl font-medium pl-2">Создаем чат-ботов которые: <br/> увеличивают ваши продажии <br/> консультируют клиентов</p>
                            </div>
                            <div className="mt-48 ml-3">
                                <a href="#">
                                    <div className="font-['Geist'] flex justify-center items-center pl-2 bg-white w-64 text-sm font-semibold rounded-full py-4">
                                        Заказать бота под ключ
                                        <img className="ml-5 font-bold w-6" src={buttonArrow} alt=""/>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-center items-center pt-6 pb-16">
                        <h2 className="text-5xl font-bold text-[#0B0B33]">Мы собрали всё, что вам нужно</h2>
                        <p className="text-xl font-semibold mt-6 font-['Geist']">Собирайте ботов сразу</p>
                    </div>
                    <div className="ml-16 mr-5">
                        <img src={SOCIALS} alt=""/>
                    </div>
                </div>
            </div>
            <div id="rectangle"></div>
        </>
    );
};

export default Header;
