import React from 'react';
import BOT from '../assets/categories/bot.svg'

export default function Categories() {

    const Title = ({children}) => {
        return (
            <h3 className="text-[#1D0072] font-bold font-[Montserrat] desktop:text-4xl tablet-lg:text-3xl tablet:text-2xl mobile:text-lg">{children}</h3>
        )
    }

    return (
        <div className="w-screen">
            <div className="w-[50vw] absolute right-0 desktop:top-[95rem] tablet-lg:top-[90rem] tablet:top-[89rem] mobile:top-[105rem]">
                {/*<img src={BOT} alt="bot1"/>*/}
            </div>
            <div className='w-screen text-[#0B0B33] max-w-[1440px] mx-auto'>
                <div className='w-full tablet-lg:text-5xl tablet:text-3xl font-bold text-center my-10 desktop:mb-20 tablet-lg:mb-16 tablet:mb-10 mobile:text-2xl mobile:mt-0 mobile:mb-4 tablet:px-0 mobile:px-3'>
                    <h2 className="text-[#0B0B33]">Категории применения</h2>
                </div>
                <ul className='border-solid border-gray-500 tablet:mx-11 mobile:mx-7 font-[Geist]'>
                    <li className='border-y border-t-2 border-slate-300 tablet:py-10 mobile:py-3 flex justify-between tablet:flex-row mobile:flex-col'>
                        <div>
                            <Title>Одежда/Обувь</Title>
                        </div>
                        <div className="flex desktop:flex-row tablet:justify-between mobile:flex-col tablet-lg:mr-12">
                            <ul className="tablet-lg:w-72 desktop:mr-16 tablet-lg:text-lg tablet:text-md mobile:text-[13px] mobile:ml-5">
                                <li>Консультация по размерам</li>
                                <li>по наличию</li>
                                <li>по брендам</li>
                                <li>по стилю</li>
                                <li>по заменам - рекомендациям</li>
                                <li>по цене, акциям</li>
                                <li>по рассрочкам</li>
                            </ul>
                            <ul className="w-60 tablet-lg:mr-40 tablet-lg:text-lg tablet:mr-16 tablet:text-md mobile:text-[13px] mobile:ml-5">
                                <li>Интеграция с 1C и с CRM</li>
                                <li>Аналитика</li>
                            </ul>
                        </div>
                    </li>
                    <li className='border-y tablet:py-10 mobile:py-3 border-slate-300 flex justify-between tablet:flex-row mobile:flex-col'>
                        <div>
                            <Title>
                                Техника
                            </Title>
                        </div>
                        <div className="flex desktop:flex-row mobile:flex-col tablet-lg:mr-12">
                            <ul className="tablet-lg:w-72 desktop:mr-16 tablet-lg:text-lg tablet:text-md mobile:text-[13px] mobile:ml-5">
                                <li>Консультация по наличию</li>
                                <li>по характеристикам</li>
                                <li>по заменам - рекомендациям</li>
                                <li>по цене, акциям</li>
                                <li>по рассрочкам</li>
                                <li>Доп продажи по рассходникам</li>
                            </ul>
                            <ul className="w-60 tablet-lg:mr-40 tablet:mr-16 tablet-lg:text-lg tablet:text-md mobile:text-[13px] mobile:ml-5">
                                <li>Интеграция с 1C и с CRM</li>
                                <li>Аналитика</li>
                            </ul>
                        </div>
                    </li>
                    <li className='border-y tablet:py-10 mobile:py-3 border-slate-300 flex justify-between tablet:flex-row mobile:flex-col'>
                        <div>
                            <Title>
                                Общепит
                            </Title>
                        </div>
                        <div>
                            <ul className="tablet-lg:w-72 desktop:mr-[532px] tablet-lg:mr-40 tablet:mr-[172px] tablet-lg:text-lg tablet:text-md mobile:text-[13px] mobile:ml-5">
                                <li>Доставка продуктов</li>
                                <li>Доставка еды</li>
                            </ul>
                        </div>
                    </li>
                    <li className='border-y tablet:py-10 mobile:py-3 border-slate-300 flex justify-between tablet:flex-row mobile:flex-col'>
                        <div>
                            <Title>
                                Медиа
                            </Title>
                        </div>
                        <div>
                            <ul className="tablet-lg:w-96 tablet:w-60 desktop:mr-[436px] tablet:mr-16 tablet-lg:text-lg tablet:text-md mobile:text-[13px] mobile:ml-5 tablet-lg:mr-16">
                                <li>Инфобизнес - продажа курсов, консультации</li>
                                <li>Блогеры - реклама</li>
                                <li>Медиа ресурсы</li>
                            </ul>
                        </div>
                    </li>
                    <li className='border-y border-b-2 tablet:py-10 mobile:py-3 border-slate-300 flex justify-between tablet:flex-row mobile:flex-col'>
                        <div>
                            <Title>
                                Услуги
                            </Title>
                        </div>
                        <div>
                            <ul className="tablet-lg:w-60 desktop:mr-[580px] tablet:mr-40 tablet-lg:text-lg tablet:text-md mobile:text-[13px] mobile:ml-5 tablet-lg:mr-52">
                                <li>Клиники, стоматологи</li>
                                <li>Авто салоны</li>
                                <li>Туризм</li>
                                <li>Цветы</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
