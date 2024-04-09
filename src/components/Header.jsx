import React, {useState} from 'react';
import LOGO from '../assets/header/logo.svg';
import buttonArrow from '../assets/header/button-arrow.svg';
import SOCIALS from '../assets/header/socials.svg';
import {IoMdArrowForward} from "react-icons/io";
import banner from '../assets/header/back.svg';
import {Link, Navigate, NavLink} from "react-router-dom";
import footer_logo from "../assets/footer/footer_logo.svg";
import burgerBot from '../assets/header/burger.svg'

const Header = () => {

    const BurgerLink = ({link, children}) => {
        return (
            <div className="tablet:text-4xl mobile:text-xl font-medium py-1">
                <a href={link} target="_blank">{children}</a>
            </div>
        )
    }

    const [isClicked, setIsClicked] = useState(false)

    return (
        <>
            {/* header */}
            <div className={`bg-[#F3F5FF] w-screen ${isClicked ? 'h-screen overflow-hidden' : null}`}>
                <div className="flex flex-col justify-center items-center w-screen">
                    <div className="w-screen bg-[#F3F5FF] overflow-hidden max-w-[1440px]">
                        <div>
                            <div
                                className="flex justify-between items-center desktop:text-md desktop:text-lg tablet-lg:text-[18px] font-bold desktop:py-8 tablet:py-5 mobile:py-2 desktop:mx-16 tablet-lg:mx-10 tablet:mx-6 mobile:mx-2.5 font-[Geist] text-xl">
                                <ul className="tablet-lg:flex justify-center items-center list-none mobile:hidden">
                                    <li className="cursor-pointer mr-4 hover:bg-[#643CDA] hover:text-white active:bg-[#451CC0] py-1 px-4 rounded-full all duration-300">
                                        <a href="#services">Функции</a></li>
                                    <li className="cursor-pointer hover:bg-[#643CDA] hover:text-white active:bg-[#451CC0] py-1 px-4 rounded-full all duration-300">Документация</li>
                                </ul>
                                <div
                                    className="desktop:w-32 tablet:w-24 mobile:w-16 cursor-pointer mobile:ml-3 tablet-lg:m-0">
                                    <img src={LOGO} alt=""/>
                                </div>
                                <div onClick={() => setIsClicked(!isClicked)} className="mobile:block tablet-lg:hidden">
                                    {isClicked ?
                                        <div
                                            className="active:text-light bg-[#643CDA] tablet:px-3.5 mobile:px-2 tablet:py-[1.6rem] mobile:py-4.5 rounded-full">
                                            <nav
                                                className="tablet:w-8 mobile:w-7 relative top-0.5 rounded-3xl h-1 bg-black rotate-[45deg]"></nav>
                                            <nav
                                                className="tablet:w-8 mobile:w-7 relative bottom-0.5 rounded-3xl h-1 bg-black rotate-[-45deg]"></nav>
                                        </div>
                                        :
                                        <div
                                            className="active:text-light tablet:px-4 mobile:px-2.5 tablet:py-5 mobile:py-3 rounded-full">
                                            <nav className="tablet:w-7 mobile:w-6 rounded-full h-1 bg-black"></nav>
                                            <nav className="tablet:w-7 mobile:w-6 rounded-full h-1 bg-black my-1"></nav>
                                            <nav className="tablet:w-7 mobile:w-6 rounded-full h-1 bg-black"></nav>
                                        </div>
                                    }
                                </div>
                                <ul className="tablet-lg:flex justify-center items-center list-none mobile:hidden">
                                    <li className="cursor-pointer ml-5 mr-4 hover:bg-[#643CDA] hover:text-white active:bg-[#451CC0] py-1 px-4 rounded-full all duration-300">
                                        <a href="#prices">Цены</a></li>
                                    <Link to="/form">
                                        <li className="cursor-pointer hover:bg-[#643CDA] hover:text-white active:bg-[#451CC0] py-1 px-4 rounded-full all duration-300">
                                            <a href="#">Заказать</a></li>
                                    </Link>
                                </ul>
                            </div>
                            {isClicked ?
                                <div
                                    className="absolute tablet:h-[89%] mobile:h-[92.5%] w-screen bottom-0 z-50 mobile:block tablet-lg:hidden bg-[#F3F5FF]">
                                    <div
                                        className="bg-[#643CDA] flex flex-col justify-between h-[90%] rounded-3xl tablet:mx-10 mobile:mx-5 tablet:p-10 mobile:p-5 m-auto text-white overflow-hidden">
                                        <div className="tablet:text-4xl mobile:text-xl font-medium">
                                            <h2 className="py-1">
                                                Функции
                                            </h2>
                                            <h2 className="py-1">
                                                Документация
                                            </h2>
                                            <h2 className="py-1">
                                                Цены
                                            </h2>
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <div className="tablet:w-2/12 mobile:w-auto tablet:relative mobile:absolute tablet:top-0 tablet:left-0 mobile:top-[20%] mobile:left-[7.7%] text-end">
                                                <img className="tablet:w-auto mobile:w-[84vw]" src={footer_logo} alt="logo"/>
                                            </div>
                                            <BurgerLink link="https://www.youtube.com/@agatsarsky">Youtube</BurgerLink>
                                            <BurgerLink link="https://t.me/moscoweb">t.me/moscoweb</BurgerLink>
                                            <BurgerLink
                                                link="https://www.instagram.com/mweb.agency/">inst.com/mweb.agency</BurgerLink>
                                        </div>
                                        <div className="absolute bottom-[10%] left-[40px] tablet:block mobile:hidden">
                                            <img className="w-60" src={burgerBot} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                :
                                null
                            }
                        </div>
                        {/* banner */}
                        <div className="w-screen relative">
                            <img src={banner}
                                 className="h-[785px] absolute z-0 max-w-[1440px] bg-no-repeat bg-contain bg-top left-5"/>
                            <div className="flex flex-col ml-36 pt-20 z-10">
                                <div className="text-white z-40">
                                    <h1 className="text-[115px] font-semibold font-['Poppins'] z-40">Moscobot</h1>
                                    <p className="font-[Geist] text-2xl font-medium pl-2 z-40">Создаем чат-ботов
                                        которые: <br/> увеличивают ваши продажии <br/> консультируют клиентов</p>
                                </div>
                                <div className="mt-40 ml-3 z-40">
                                    <Link to='/form'><a href="#">
                                        <div onClick={() => setIsClicked(true)}
                                             className="font-[Geist] flex justify-center z-50 items-center pl-2 bg-white w-72 text-md font-semibold rounded-full py-4 hover:w-80 hover:bg-[#835BF7] hover:text-white all duration-300 active:bg-[#451CC0]">
                                            Заказать бота под ключ
                                            {/*<img className="ml-5 font-bold w-6 hover:text-white" src={buttonArrow}*/}
                                            {/*     */}
                                            {/*     alt=""/>*/}
                                            <IoMdArrowForward className="ml-5 font-bold text-4xl hover:text-white"/>
                                        </div>
                                    </a></Link>
                                </div>
                            </div>

                        </div>

                        <div className="flex flex-col justify-center items-center">
                            <div className="flex flex-col justify-center items-center pt-10 mt-48 pb-20 z-40">
                                <h2 className="text-center text-xl mobile:text-2xl tablet:text-4xl tablet-lg:text-5xl desktop:text-6xl font-bold text-[#0B0B33]">Мы собрали всё, что вам нужно</h2>
                                <p className="text-xs mobile:text-sm tablet:text-lg tablet-lg:text-xl desktop:text-2xl font-semibold mt-6 font-[Geist]">Собирайте ботов сразу</p>
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
