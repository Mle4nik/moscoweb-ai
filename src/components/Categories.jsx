import React from 'react';
import BOT from '../assets/categories/bot.svg'

export default function Categories() {
    return (
        <>
            <div className="w-[50vw] absolute right-0 top-[95rem]">
                <img src={BOT} alt="bot1"/>
            </div>
            <div className='w-screen text-[#0B0B33] max-w-[1440px] mx-auto'>
                <div className='w-full text-5xl font-bold text-center my-10 mb-20'>
                    <h2 className="text-[#0B0B33]">Категории применения</h2>
                </div>
                <ul className='border-solid border-gray-500 mx-11 font-[Geist]'>
                    <li className='border-y border-t-2 border-slate-300 py-10 flex justify-between'>
                        <div>
                            <h3 className="text-[#1D0072] font-bold font-[Montserrat] text-4xl">
                                Одежда/Обувь
                            </h3>
                        </div>
                        <div className="flex">
                            <ul className="w-72 mr-16 text-lg">
                                <li>Консультация по размерам</li>
                                <li>по наличию</li>
                                <li>по брендам</li>
                                <li>по стилю</li>
                                <li>по заменам - рекомендациям</li>
                                <li>по цене, акциям</li>
                                <li>по рассрочкам</li>
                            </ul>
                            <ul className="w-60 mr-40 text-lg">
                                <li>Интеграция с 1C и с CRM</li>
                                <li>Аналитика</li>
                            </ul>
                        </div>
                    </li>
                    <li className='border-y py-10 border-slate-300 flex justify-between'>
                        <div>
                            <h3 className="text-[#1D0072] font-bold font-[Montserrat] text-4xl">
                                Техника
                            </h3>
                        </div>
                        <div className="flex">
                            <ul className="w-72 mr-16 text-lg">
                                <li>Консультация по наличию</li>
                                <li>по характеристикам</li>
                                <li>по заменам - рекомендациям</li>
                                <li>по цене, акциям</li>
                                <li>по рассрочкам</li>
                                <li>Доп продажи по рассходникам</li>
                            </ul>
                            <ul className="w-60 mr-40 text-lg">
                                <li>Интеграция с 1C и с CRM</li>
                                <li>Аналитика</li>
                            </ul>
                        </div>
                    </li>
                    <li className='border-y py-10 border-slate-300 flex justify-between'>
                        <div>
                            <h3 className="text-[#1D0072] font-bold font-[Montserrat] text-4xl">
                                Общепит
                            </h3>
                        </div>
                        <div>
                            <ul className="w-72 mr-[466px] text-lg">
                                <li>Доставка продуктов</li>
                                <li>Доставка еды</li>
                            </ul>
                        </div>
                    </li>
                    <li className='border-y py-10 border-slate-300 flex justify-between'>
                        <div>
                            <h3 className="text-[#1D0072] font-bold font-[Montserrat] text-4xl">
                                Медиа
                            </h3>
                        </div>
                        <div>
                            <ul className="w-96 mr-[370px] text-lg">
                                <li>Инфобизнес - продажа курсов, консультации</li>
                                <li>Блогеры - реклама</li>
                                <li>Медиа ресурсы</li>
                            </ul>
                        </div>
                    </li>
                    <li className='border-y border-b-2 py-10 border-slate-300 flex justify-between'>
                        <div>
                            <h3 className="text-[#1D0072] font-bold font-[Montserrat] text-4xl">
                                Услуги
                            </h3>
                        </div>
                        <div>
                            <ul className="w-60 mr-[515px] text-lg">
                                <li>Клиники, стоматологи</li>
                                <li>Авто салоны</li>
                                <li>Туризм</li>
                                <li>Цветы</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
}
