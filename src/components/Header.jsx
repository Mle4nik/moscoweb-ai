import React from 'react';
import LOGO from '../assets/header/logo.svg'
import buttonArrow from '../assets/header/button-arrow.svg'
import SOCIALS from '../assets/header/socials.svg'

const Header = () => {
    return (
        <>
            <div className="bg-[#F3F5FF] w-screen">
                <div className="flex flex-col justify-center items-center w-screen">
                    <div className="w-screen bg-[#F3F5FF] overflow-hidden max-w-[1440px]">
                        <div>
                            <div className="flex justify-between items-center text-md font-bold py-8 mx-16 font-[Geist] text-xl">
                                <ul className="flex justify-center items-center list-none">
                                    <li className="cursor-pointer mr-4 hover:bg-[#643CDA] hover:text-white active:bg-[#451CC0] py-1 px-4 rounded-full all duration-300">Функции</li>
                                    <li className="cursor-pointer hover:bg-[#643CDA] hover:text-white active:bg-[#451CC0] py-1 px-4 rounded-full all duration-300">Документация</li>
                                </ul>
                                <div className="w-32">
                                    <img src={LOGO} alt=""/>
                                </div>
                                <ul className="flex justify-center items-center list-none">
                                    <li className="cursor-pointer ml-5 mr-4 hover:bg-[#643CDA] hover:text-white active:bg-[#451CC0] py-1 px-4 rounded-full all duration-300">Цены</li>
                                    <li className="cursor-pointer hover:bg-[#643CDA] hover:text-white active:bg-[#451CC0] py-1 px-4 rounded-full all duration-300">Заказать</li>
                                </ul>
                            </div>
                        </div>

                        <div className="w-screen">
                            <div className="h-[785px] max-w-[1440px] bg-headerBackBg bg-no-repeat bg-contain bg-top">
                                <div className="flex flex-col ml-36 pt-20">
                                    <div className="text-white">
                                        <h1 className="text-[115px] font-semibold font-['Poppins']">Moscobot</h1>
                                        <p className="font-[Geist] text-2xl font-medium pl-2">Создаем чат-ботов которые: <br/> увеличивают ваши продажии <br/> консультируют клиентов</p>
                                    </div>
                                    <div className="mt-40 ml-3">
                                        <a href="#">
                                            <div className="font-[Geist] flex justify-center items-center pl-2 bg-white w-72 text-md font-semibold rounded-full py-6 hover:w-80 hover:bg-[#835BF7] hover:text-white all duration-300 active:bg-[#451CC0]">
                                                Заказать бота под ключ
                                                <img className="ml-5 font-bold w-6 hover:text-white" src={buttonArrow} alt=""/>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center items-center">
                            <div className="flex flex-col justify-center items-center pt-10 pb-20">
                                <h2 className="text-6xl font-bold text-[#0B0B33]">Мы собрали всё, что вам нужно</h2>
                                <p className="text-2xl font-semibold mt-6 font-[Geist]">Собирайте ботов сразу</p>
                            </div>
                            <div className="ml-16 mr-5">
                                <img src={SOCIALS} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div id="rectangle"></div>
                </div>
            </div>
        </>
    );
};

export default Header;
