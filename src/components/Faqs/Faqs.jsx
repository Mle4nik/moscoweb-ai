import React, {useState} from 'react';
import CROSS from '../../assets/faqs/cross.svg'
import {BsPlusLg} from "react-icons/bs";
import Question from "./ui/Question.jsx";

export default function Faqs() {

    const questionItems = [
        {
            title: 'Сколько стоит сервис?',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        },
        {
            title: 'Как начать работу?',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        },
        {
            title: 'Можно ли заказать разработку у вас?',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        },
        {
            title: 'Могу ли я подключить коллег или клиентов?',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        },
    ]
    return (
        <>
            <div className="w-screen">
                <div className='mx-auto tracking-wide tablet-lg:py-24 tablet:py-16 mobile:py-12 font-[Geist] max-w-[1440px]'>
                    <div
                        className="font-bold text-lg mobile:text-2xl tablet-lg:text-3xl desktop:text-4xl text-center mb-12">
                        Частые вопросы
                    </div>
                    {/*<div className="text-2xl grid tablet-lg:grid-cols-2 grid-cols-1 grid-rows-2 gap-6 mobile:mx-6 desktop:mx-12">*/}
                    <div
                        className="text-2xl gap-6 desktop:mx-12 mobile:mx-6 tablet:grid tablet:grid-cols-2 tablet:col-start-auto mobile:flex mobile:flex-col">
                        {questionItems.map(question => {
                            return (
                                <button className='w-full h-auto flex'>
                                    <Question key={question.title} title={question.title}
                                              description={question.description}/>
                                </button>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}