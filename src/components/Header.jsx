import React from 'react';
import LOGO from '../assets/header/logo.svg'
import buttonArrow from '../assets/header/button-arrow.svg'
import SOCIALS from '../assets/header/socials.svg'

const Header = () => {
    return (
        <>
            <div className="w-screen bg-slate-100 overflow-hidden">
                <div>
                    <div className="flex justify-between items-center font-black py-5 mx-16">
                        <ul className="flex justify-center items-center">
                            <li className="cursor-pointer w-20 mr-8">Функции</li>
                            <li className="cursor-pointer w-20">Документация</li>
                        </ul>
                        <div className="w-28">
                            <img src={LOGO} alt=""/>
                        </div>
                        <ul className="flex justify-center items-center">
                            <li className="cursor-pointer w-20 ml-5">Цены</li>
                            <li className="cursor-pointer w-20">Заказать</li>
                        </ul>
                    </div>
                </div>

                <div className="w-screen">
                    <div className="h-screen w-screen bg-headerBackBg bg-no-repeat bg-cover bg-top">
                        <div className="flex flex-col ml-28 pt-28">
                            <div className="text-white ">
                                <h1 className="mb-7 text-9xl font-semibold">Moscobot</h1>
                                <p className="text-2xl font-medium pl-2">Создаем чат-ботов которые: <br/> увеличивают ваши продажии <br/> консультируют клиентов</p>
                            </div>
                            <div className="mt-48 ml-3">
                                <a href="#">
                                    <div className="flex justify-center items-center pl-2 bg-white w-64 text-sm font-semibold rounded-full py-5">
                                        Заказать бота под ключ
                                        <img className="ml-5 font-bold w-5" src={buttonArrow} alt=""/>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-center items-center pt-24 pb-16">
                        <h2 className="text-5xl font-black">Мы собрали всё, что вам нужно</h2>
                        <p className="text-xl font-semibold mt-4">Собирайте ботов сразу</p>
                    </div>
                    <div className="mx-16">
                        <img src={SOCIALS} alt=""/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
