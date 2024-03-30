import React, {useState} from 'react';
import CROSS from '../../assets/faqs/cross.svg'
import {BsPlusLg} from "react-icons/bs";
import Question from "./ui/Question.jsx";

export default function Faqs() {


    const [btnActive, setBtnActive] = useState(false)
    const showQuestion = (question) => {
        setBtnActive(question)
    }
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
            <div>
                <div className='mx-auto tracking-wide py-24 font-[Geist] max-w-[1440px]'>
                    <div className="font-bold text-4xl text-center mb-12">
                        Частые вопросы
                    </div>
                    <div className="text-2xl grid grid-cols-2 gap-6">
                        {questionItems.map(question => {
                            return (
                                <button onClick={() => showQuestion(question)} className='w-full h-full'>
                                    <Question key={question.title} title={question.title} desciption={question.description} btnActive={btnActive}/>
                                </button>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}