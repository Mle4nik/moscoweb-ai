import React from 'react';
import {Link, Navigate, useNavigate} from "react-router-dom";
import {RxCross1} from "react-icons/rx";
import {IoMdArrowForward} from "react-icons/io";
import { InputMask } from 'primereact/inputmask';

const Input = ({name, type, placeholder}) => {
    return (
        <label>
            <input name={name} type={type} placeholder={placeholder} className="tablet-lg:py-4 tablet-lg:w-5/12 bg-transparent border-b broder-violet-300 desktop-lg:placeholder:text-3xl placeholder:text-violet-300 placeholder:tracking-tighter placeholder:font-medium focus:outline-none desktop-lg:text-3xl text-white font-medium tracking-normal desktop:text-2xl desktop:placeholder:text-2xl tablet-lg:placeholder:text-2xl tablet:text-2xl tablet:w-8/12 tablet:py-2 mobile:w-full mobile:py-2"/>
        </label>
    )
}

const Form = () => {
    return (
        <div className="w-screen h-screen overflow-hidden">
            <Link to='/'>
                <div
                    className="w-20 h-20 bg-[#643CDA] rounded-full absolute top-5 desktop-lg:right-48 flex justify-center items-center desktop-lg:w-24 desktop-lg:h-24 desktop:right-40 tablet-lg:w-20 tablet-lg:h-20 tablet-lg:right-11 tablet:h-16 tablet:w-16 tablet:right-8 mobile:h-10 mobile:w-10 mobile:right-5">
                    <RxCross1 className="text-white tablet-lg:text-5xl font-bold tablet:text-4xl mobile:text-2xl"/>
                </div>
            </Link>
            <div className="w-full h-full flex justify-center items-center">
                <div className="desktop:w-2/3 desktop-lg:h-4/5 bg-[#643CDA] tablet-lg:rounded-[70px] desktop:pl-20 overflow-hidden relative desktop:h-5/6 tablet-lg:pl-16 tablet-lg:w-11/12 tablet-lg:mt-12 tablet:w-11/12 tablet:rounded-[50px] tablet:pl-12 mobile:rounded-[20px] mobile:w-full mobile:flex mobile:flex-col mobile:justify-center mobile:items-start mobile:px-5 mobile:mx-5">
                    <img className="absolute tablet-lg:right-[-44px] tablet-lg:bottom-[-5.1rem] rotate-[67deg] desktop-lg:w-auto desktop:w-5/12 tablet:w-5/12 tablet:bottom-[-3.2rem] tablet:right-[-66px] tablet:block mobile:hidden" src="src/assets/form/figure.svg" alt=""/>
                    <h1 className="tablet-lg:tracking-[-0.20rem] tablet:tracking-[-0.07rem] font-medium desktop:mt-16 text-white desktop-lg:text-6xl desktop:text-5xl tablet-lg:text-5xl tablet-lg:mt-12 tablet:mt-12 mobile:mt-5 tablet:text-4xl mobile:text-2xl mobile:tracking-[-0.1rem]">Заполните форму и мы
                        свяжемся <br/> с вами в ближайшее время!
                    </h1>
                    <form className="desktop:mt-20 gap-8 flex flex-col w-full tablet-lg:mt-16 tablet:mt-16 mobile:mt-10" action="https://api.web3forms.com/submit" method="POST">
                        <input type="hidden" name="access_key" value="042bbeca-7680-42d3-8b3e-9007934cc152" />

                        <Input name="Имя" type="text" placeholder="Введите имя" required/>
                        <InputMask name="Номер телефона" id="phone" mask="+7 (999) 999-99-99" placeholder="Введите номер телефона" className="tablet-lg:py-4 tablet-lg:w-5/12 bg-transparent border-b broder-violet-300 desktop-lg:placeholder:text-3xl placeholder:text-violet-300 placeholder:tracking-tighter placeholder:font-medium focus:outline-none desktop-lg:text-3xl text-white font-medium tracking-normal desktop:text-2xl desktop:placeholder:text-2xl tablet-lg:placeholder:text-2xl tablet:text-2xl tablet:w-8/12 tablet:py-2 mobile:w-full mobile:py-2" required></InputMask>

                        <button type="submit"
                                className="tablet:my-16 mobile:my-6 font-[Geist] desktop-lg:text-2xl flex justify-center z-50 items-center pl-2 bg-white desktop-lg:w-80 text-md font-semibold rounded-full desktop-lg:py-5 desktop-lg:hover:w-96 hover:bg-[#835BF7] hover:text-white all duration-300 active:bg-[#451CC0] desktop:text-xl desktop:py-4 desktop:w-72 desktop:hover:w-80 tablet-lg:text-xl tablet-lg:py-4 tablet-lg:w-72 tablet-lg:hover:w-80 tablet:py-4 tablet:text-xl tablet:w-72 tablet:hover:w-80 mobile:p-3 mobile:text-md mobile:hover:w-60">
                            Оставить заявку
                            {/*<img className="ml-5 font-bold w-6 hover:text-white" src={buttonArrow}*/}
                            {/*     */}
                            {/*     alt=""/>*/}
                            <IoMdArrowForward className="ml-5 font-normal desktop-lg:text-5xl hover:text-white desktop:text-4xl tablet-lg:text-4xl tablet:text-4xl mobile:text-3xl"/>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;