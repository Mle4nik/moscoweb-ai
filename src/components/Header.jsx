import React, {useState} from 'react';
import LOGO from '../assets/header/logo.svg';
import buttonArrow from '../assets/header/button-arrow.svg';
import SOCIALS from '../assets/header/socials.svg';
import {IoMdArrowForward} from "react-icons/io";
import banner from '../assets/header/back.svg';
import {Link, Navigate, NavLink} from "react-router-dom";
import footer_logo from "../assets/footer/footer_logo.svg";
import burgerBot from '../assets/header/burger.svg'
import mobBanner from '../assets/header/mobile_banner.svg'
import mobBack from '../assets/header/back_mobile.svg'
import botBanner from '../assets/header/bot_banner.svg'

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
                                                <a href="#services">Функции</a>

                                            </h2>
                                            <h2 className="py-1">
                                                Документация
                                            </h2>
                                            <h2 className="py-1">
                                                <a href="#prices">Цены</a>
                                            </h2>
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <div
                                                className="tablet:w-2/12 mobile:w-auto tablet:relative mobile:absolute tablet:top-0 tablet:left-0 mobile:top-[20%] mobile:left-[7.7%] text-end">
                                                <img className="tablet:w-auto mobile:w-[84vw]" src={footer_logo}
                                                     alt="logo"/>
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
                                 className="desktop:block mobile:hidden h-[785px] absolute z-0 max-w-[1440px] bg-no-repeat bg-contain bg-top left-5"/>
                            <img src={banner}
                                 className="desktop:hidden tablet:block mobile:hidden h-auto absolute z-0 w-full bg-no-repeat bg-contain bg-top left-0.5 px-3"/>
                            <div>
                                <img src={mobBack}
                                     className="tablet:hidden mobile:block h-auto absolute z-0 w-full bg-no-repeat bg-contain bg-top left-0.5 px-1.5"/>
                                <img src={botBanner} className="mobile:block tablet:hidden absolute right-[4vw] w-[95vw] top-[57vw]"/>
                            </div>
                            <div className="flex flex-col desktop:ml-36 tablet:ml-[10vw] mobile:ml-[10vw] desktop:pt-20 tablet:pt-[5vw] mobile:pt-[5vw] z-10">
                                <div className="text-white z-40">
                                    <h1 className="desktop:text-[115px] tablet:text-[8.5vw] mobile:text-[13vw] font-semibold font-['Poppins'] z-40">Moscobot</h1>
                                    <p className="font-[Geist] desktop:text-2xl tablet:text-[1.7vw] mobile:text-[3.8vw] font-medium desktop:pl-2 mobile:pl-[0.5vw] z-40 mt-[2vw]">Создаем чат-ботов
                                        которые: <br/> увеличивают ваши продажи <br/> консультируют клиентов</p>
                                </div>
                                <div className="mobile:hidden tablet:block desktop:mt-40 mobile:mt-[10vw] desktop:ml-3 tablet:ml-[0.5vw] z-40">
                                    <Link to='/form'><a href="#">
                                        <div onClick={() => setIsClicked(true)}
                                             className="font-[Geist] flex justify-center z-50 items-center pl-2 bg-white desktop:w-72 tablet-lg:w-64 tablet:w-60 desktop:text-md tablet-lg:text-sm tablet:text-[13px] font-semibold rounded-full desktop:py-4 tablet-lg:py-3 tablet:py-2.5 desktop:hover:w-80 tablet-lg:hover:w-72 tablet:hover:w-64 hover:bg-[#835BF7] hover:text-white all duration-300 active:bg-[#451CC0]">
                                            Заказать бота под ключ
                                            {/*<img className="ml-5 font-bold w-6 hover:text-white" src={buttonArrow}*/}
                                            {/*     */}
                                            {/*     alt=""/>*/}
                                            <IoMdArrowForward className="ml-5 font-bold desktop:text-4xl tablet-lg:text-3xl tablet:text-2xl hover:text-white"/>
                                        </div>
                                    </a></Link>
                                </div>
                                <div className="mobile:block tablet:hidden mt-[10vw] z-40">
                                    <Link to='/form'><a href="#">
                                        <div onClick={() => setIsClicked(true)}
                                             className="font-[Geist] flex justify-center z-50 items-center pl-[1vw] bg-white w-[36vw] text-[3vw] font-semibold rounded-full py-[2vw] hover:w-[42vw] hover:bg-[#835BF7] hover:text-white all duration-300 active:bg-[#451CC0]">
                                            Заказать бота
                                            {/*<img className="ml-5 font-bold w-6 hover:text-white" src={buttonArrow}*/}
                                            {/*     */}
                                            {/*     alt=""/>*/}
                                            <IoMdArrowForward className="ml-[2.5vw] font-bold text-[5vw] hover:text-white"/>
                                        </div>
                                    </a></Link>
                                </div>
                            </div>

                        </div>

                        <div className="flex flex-col justify-center items-center">
                            <div className="flex flex-col justify-center items-center pt-10 tablet-lg:mt-44 tablet:mt-32 mobile:mt-[80vw] tablet:pb-20 mobile:pb-10 z-40">
                                <h2 className="text-center text-xl mobile:text-2xl tablet:text-4xl tablet-lg:text-5xl desktop:text-6xl font-bold text-[#0B0B33] mobile:px-7">Мы
                                    собрали всё, что вам нужно</h2>
                                <p className="text-xs mobile:text-lg tablet:text-lg tablet-lg:text-xl desktop:text-2xl font-semibold mt-6 font-[Geist]">Собирайте
                                    ботов сразу</p>
                            </div>
                            <div className="ml-16 mr-5 mobile:hidden tablet:block">
                                <img src={SOCIALS} alt=""/>
                            </div>
                            <div className="mobile:block tablet:hidden w-full px-5">
                                <img className="w-full ml-2" src={mobBanner}/>
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
