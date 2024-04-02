import React from 'react';
import LOGO from '../assets/header/logo.svg';
import buttonArrow from '../assets/header/button-arrow.svg';
import SOCIALS from '../assets/header/socials.svg';
import {IoMdArrowForward} from "react-icons/io";
import banner from '../assets/header/back.svg';

const Header = () => {
    return (
        <>
        {/* header */}
            <div className="bg-[#F3F5FF] w-screen">
                <div className="flex flex-col justify-center items-center w-screen">
                    <div className="w-screen bg-[#F3F5FF] overflow-hidden max-w-[1440px]">
                        <div>
                            <div
                                className="flex justify-between items-center text-md font-bold py-8 mx-16 font-[Geist] text-xl">
                                <ul className="flex justify-center items-center list-none">
                                    <li className="cursor-pointer mr-4 hover:bg-[#643CDA] hover:text-white active:bg-[#451CC0] py-1 px-4 rounded-full all duration-300"><a href="#services">Функции</a></li>
                                    <li className="cursor-pointer hover:bg-[#643CDA] hover:text-white active:bg-[#451CC0] py-1 px-4 rounded-full all duration-300">Документация</li>
                                </ul>
                                <div className="w-32 cursor-pointer">
                                    <img src={LOGO} alt=""/>
                                </div>
                                <ul className="flex justify-center items-center list-none">
                                    <li className="cursor-pointer ml-5 mr-4 hover:bg-[#643CDA] hover:text-white active:bg-[#451CC0] py-1 px-4 rounded-full all duration-300"><a href="#prices">Цены</a></li>
                                    <li className="cursor-pointer hover:bg-[#643CDA] hover:text-white active:bg-[#451CC0] py-1 px-4 rounded-full all duration-300"><a href="#">Заказать</a></li>
                                </ul>
                            </div>
                        </div>
                        {/* banner */}
                        <div className="w-screen relative">
                            <img src={banner} className="h-[785px] absolute z-0 max-w-[1440px]  bg-no-repeat bg-contain bg-top" />
                                <div className="flex flex-col ml-36 pt-20 z-10">
                                    <div className="text-white z-50">
                                        <h1 className="text-[115px] font-semibold font-['Poppins'] z-50">Moscobot</h1>
                                        <p className="font-[Geist] text-2xl font-medium pl-2 z-50">Создаем чат-ботов
                                            которые: <br/> увеличивают ваши продажии <br/> консультируют клиентов</p>
                                    </div>
                                    <div className="mt-40 ml-3 z-50">
                                        <a href="#">
                                            <div
                                                className="font-[Geist] flex justify-center z-50 items-center pl-2 bg-white w-72 text-md font-semibold rounded-full py-4 hover:w-80 hover:bg-[#835BF7] hover:text-white all duration-300 active:bg-[#451CC0]">
                                                Заказать бота под ключ
                                                {/*<img className="ml-5 font-bold w-6 hover:text-white" src={buttonArrow}*/}
                                                {/*     */}
                                                {/*     alt=""/>*/}
                                                <IoMdArrowForward className="ml-5 font-bold text-4xl hover:text-white"/>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            
                        </div>

                        <div className="flex flex-col justify-center items-center">
                            <div className="flex flex-col justify-center items-center pt-10 mt-48 pb-20 z-50">
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
