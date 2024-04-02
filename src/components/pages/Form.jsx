import React from 'react';
import {Link, Navigate, useNavigate} from "react-router-dom";
import {RxCross1} from "react-icons/rx";
import {IoMdArrowForward} from "react-icons/io";

const Input = ({type, placeholder}) => {
    return (
        <label>
            <input type={type} placeholder={placeholder} className="py-4 w-5/12 bg-transparent border-b broder-violet-300 placeholder:text-3xl placeholder:text-violet-300 placeholder:tracking-tighter placeholder:font-medium focus:outline-none text-3xl text-white font-medium tracking-normal"/>
        </label>
    )
}

const Form = () => {
    return (
        <div className="w-screen h-screen overflow-hidden">
            <Link to='/'>
                <div
                    className="w-24 h-24 bg-[#643CDA] rounded-full absolute top-5 right-48 flex justify-center items-center">
                    <RxCross1 className="text-white text-5xl font-bold"/>
                </div>
            </Link>
            <div className="w-full h-full flex justify-center items-center">
                <div className="w-2/3 h-4/5 bg-[#643CDA] rounded-[70px] pl-20 w-4/6 overflow-hidden relative">
                    <img className="absolute right-[-44px] bottom-[-5.1rem] rotate-[67deg]" src="src/assets/form/figure.svg" alt=""/>
                    <h1 className="tracking-[-0.20rem] font-medium mt-16 text-white text-6xl">Заполните форму и мы
                        свяжемся <br/> с вами в ближайшее время!
                    </h1>
                    <form className="mt-20 gap-8 flex flex-col w-full" action="">
                        <Input type="text" placeholder="Введите имя"/>
                        <Input type="tel" placeholder="Введите номер телефона"/>
                        <Input type="email" placeholder="Введите e-mail"/>
                    </form>
                    <button
                        className="my-16 font-[Geist] text-2xl flex justify-center z-50 items-center pl-2 bg-white w-80 text-md font-semibold rounded-full py-5 hover:w-96 hover:bg-[#835BF7] hover:text-white all duration-300 active:bg-[#451CC0]">
                        Оставить заявку
                        {/*<img className="ml-5 font-bold w-6 hover:text-white" src={buttonArrow}*/}
                        {/*     */}
                        {/*     alt=""/>*/}
                        <IoMdArrowForward className="ml-5 font-normal text-5xl hover:text-white"/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Form;