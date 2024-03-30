import React, {useState} from 'react';
import CROSS from '../assets/faqs/cross.svg'
import {BsPlusLg} from "react-icons/bs";

export default function Faqs() {

    const Question = ({title}) => {
        return (
            btnActive ?
                <div onClick={() => setBtnActive(false)}
                    className="h-auto text-white p-8 w-1/2 rounded-xl flex items-center hover:shadow-lg hover:shadow-[#835EF0] all duration-300 cursor-pointer bg-[#643CDA]">
                    <div className="flex flex-col">
                        <div className="flex items-center">
                            <div
                                className="w-auto mr-8 border-2 border-white rounded-xl bg-white text-white all duration-300">
                                {/*<img className="m-3 w-8" src={CROSS} alt=""/>*/}
                                <BsPlusLg className="m-3 text-4xl text-[#643CDA] all duration-300"/>
                            </div>
                            <h4 className="font-bold">{title}</h4>
                        </div>
                        <div>
                            <p className="ml-24 w-4/5 text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
                :
                <div onClick={() => setBtnActive(true)}
                    className="h-auto border p-8 w-1/2 rounded-xl flex items-center hover:shadow-lg hover:shadow-[#835EF0] all duration-300 cursor-pointer">
                    <div className="flex flex-col">
                        <div className="flex items-center">
                            <div
                                className="w-auto mr-8 border-2 rounded-xl hover:bg-[#835EF0] hover:border-[#835EF0] all duration-300 hover:text-white">
                                {/*<img className="m-3 w-8" src={CROSS} alt=""/>*/}
                                <BsPlusLg className="m-3 text-4xl"/>
                            </div>
                            <h4>{title}</h4>
                        </div>
                    </div>
                </div>
        )
    }

    const [btnActive, setBtnActive] = useState(false)

    return (
        <>
            <div>
                <div className='mx-auto tracking-wide py-24 font-[Geist] max-w-[1440px]'>
                    <div className="font-bold text-4xl text-center mb-12">
                        Частые вопросы
                    </div>
                    <div className="text-2xl text-[#000C71] space-y-6">
                        <div className="flex mx-12 space-x-8">
                            <Question title="Сколько стоит сервис?"
                                      description="lorem "/>
                            <Question title="Как начать работу?"/>
                        </div>
                        <div className="flex mx-12 space-x-8">
                            <Question title="Можно ли заказать разработку у вас?"/>
                            <Question title="Могу ли я подключить коллег или клиентов?"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}