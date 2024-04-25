import React from 'react';
import icon1 from '../assets/integration/image 19.svg';
import icon2 from '../assets/integration/image 20.svg';
import icon3 from '../assets/integration/image 21.svg';
import icon4 from '../assets/integration/image 22.svg';
import icon5 from '../assets/integration/image 25.svg';
import icon6 from '../assets/integration/image 26.svg';
import icon7 from '../assets/integration/image 27.svg';
import oval2 from '../assets/integration/oval2.svg';
import mobOval from '../assets/integration/rectangle.svg'

export default function Integration() {

    function Blocks({title, desc, pics}) {
        return (
            <div
                className="shadow-[0_0_60px_-20px_rgba(0,0,0,0.2)] rounded-3xl flex items-start tablet:p-9 mobile:p-5">
                <img
                    className=" w-8 mobile:w-10 tablet:w-12 tablet-lg:w-14 desktop:w-16 mr-5 mt-1.5"
                    src={pics}
                    alt="gpt"
                />
                <div>
                    <h4 className="text-sm mobile:text-sm tablet:text-xl desktop:text-2xl mb-2 font-[Geist] font-black tracking-normal">
                        {title}
                    </h4>
                    <p className="text-[#7C7E9D] text-xs mobile:text-[11px] tablet:text-base desktop:text-lg font-medium tablet:font-bold  font-[Montserrat] tracking-normal">
                        {desc}
                    </p>
                </div>
            </div>
        )
    }

    function Service({pics, picClass, title, desc}) {
        return (
            <div className="">
                <img className={picClass} src={pics}/>
                <div className="desktop:text-2xl tablet-lg:text-[1.9vw] tablet:text-[2.1vw] mobile:text-[17px] desktop:py-6 py-[1vw] font-bold">{title}</div>
                <div className="desktop:text-xl text-slate-500 tablet-lg:text-[1.4vw] tablet:text-[1.6vw] mobile:text-[13px] font-semibold font-[Montserrat]">
                    {desc}
                </div>
            </div>
        )
    }

    return (
        <div className="w-screen overflow-hidden">
            <div className="max-w-[1440px] mx-auto">
                <div className="flex justify-center items-center">
                    {/* Заголовок */}
                    <div
                        className="p-3 mt-24 font-bold text-xl mobile:text-xl tablet:text-3xl tablet-lg:text-4xl desktop:text-5xl w-full text-center font-[Geist]">
                        MoscoAI bot интегрирован <br/> с множеством популярных <br/>{' '}
                        сервисов
                    </div>
                </div>
                <div className="tablet:pt-5 mobile:pt-0 desktop:pb-20 tablet-lg:pb-12 tablet:pb-6 mobile:pb-8">
                    <div
                        className="px-8 font-[Montserrat] flex justify-center items-center text-center mobile:text-sm tablet:text-xl desktop:text-2xl text-slate-500 font-medium">
                        Мы сделали удобные блоки в конструкторе, чтобы вам не <br/>{' '}
                        приходилось разбираться со сложными интеграциями
                    </div>
                </div>
                {/* 4 блока */}
                {/* Background Image Oval  */}
                <div className="relative mobile:hidden tablet:block">
                    <img
                        src={oval2}
                        // className="-z-10 absolute -top-[350px] desktop:w-[815px] desktop:h-[400px] tablet:-top-[350px] tablet:w-4/5 tablet:left-[100px] tablet-lg:w-3/5 tablet-lg:-top-[350px] tablet-lg:left-[450px] desktop:-top-[350px] desktop:left-[670px] "
                        className="absolute z-[-10] right-[-3rem] top-[-2vw] w-7/12"
                        alt="oval"
                    />
                </div>
                <div className="relative mobile:block tablet:hidden">
                    <img
                        src={mobOval}
                        // className="-z-10 absolute -top-[350px] desktop:w-[815px] desktop:h-[400px] tablet:-top-[350px] tablet:w-4/5 tablet:left-[100px] tablet-lg:w-3/5 tablet-lg:-top-[350px] tablet-lg:left-[450px] desktop:-top-[350px] desktop:left-[670px] "
                        className="absolute z-[-10] right-[-5rem] top-[-2vw]"
                        alt="oval"
                    />
                </div>
                <div
                    className="w-auto grid tablet:grid-cols-4 mobile:grid-cols-2 my-6 z-50 tablet-lg:gap-11 tablet:gap-7 mobile:gap-4 desktop:mx-12 tablet-lg:mx-10 mobile:mx-6">
                    <Service pics={icon1} picClass="desktop:w-12 tablet-lg:w-[3.5vw] tablet:w-[4vw] mobile:w-8" title="Google-таблицы"
                             desc="Добавляйте строки, получайте значения из ячеек и многое другое"/>
                    <Service pics={icon2} picClass="desktop:w-16 tablet-lg:w-[4.8vw] tablet:w-[5.5vw] mobile:w-11" title="Платежи"
                             desc="Получайте платежи через популярные сервисы"/>
                    <Service pics={icon3} picClass="desktop:w-16 tablet-lg:w-[4.8vw] tablet:w-[5.5vw] mobile:w-11" title="CRM"
                             desc="Отправляйте заявки из бота в CRM"/>
                    <Service pics={icon4} picClass="desktop:w-16 tablet-lg:w-[4.8vw] tablet:w-[5.5vw] mobile:w-11" title="GetCourse"
                             desc="Добавляйте пользователей в GetCourse, отправляйте ссылки на оплату"/>
                </div>

                <div>
                    <div
                        className="tablet:mt-32 mobile:mt-16 tablet:mb-12 mobile:mb-4 font-bold text-xl mobile:text-2xl tablet:text-3xl tablet-lg:text-4xl desktop:text-5xl text-center font-[Geist] ">
                        А еще у нас есть
                    </div>
                </div>

                <div>
                    <div className=" flex flex-col mx-5 mobile:mx-6 tablet-lg:mx-10 desktop:mx-12 mb-32 gap-3">
                        <Blocks pics={icon5} title="Прямая интеграция с GPT"
                                desc="Вам не нужен аккаунт OpenAi. Просто используйте блок “Ответ через ChatGPT”, указываете промт для GPT и все будет работать!"/>
                        <div className="grid grid-cols-1 desktop:tablet-lg:grid-cols-2 gap-3">
                            <Blocks pics={icon6} title="Сегментированные авто-рассылки"
                                    desc="Рассылки в мессенджеры с автоматическимим сценариями для прогрева аудитории"/>
                            <Blocks pics={icon7} title="Прием оплат"
                                    desc="Получайте платежи прямо в чат-боте через популярные платежные системы"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
