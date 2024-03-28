import React from 'react';
import icon1 from '../assets/integration/image 19.svg'
import icon2 from '../assets/integration/image 20.svg'
import icon3 from '../assets/integration/image 21.svg'
import icon4 from '../assets/integration/image 22.svg'
// import oval from '../assets/oval.svg'

export default function Integration() {
    return (
        <>
            <div className="flex justify-center items-center">
                <div className="p-3 mt-24 font-bold text-5xl text-center w-full font-['Geist']">
                    MoscoAI bot интегрирован <br /> с множеством популярных <br /> сервисов
                </div>
            </div>
            <div className='pt-5 pb-20'>
                <div className=" font-['Montserrat'] flex justify-center items-center text-center text-2xl text-slate-500 font-medium">
                    Мы сделали удобные блоки в конструкторе, чтобы вам не <br /> приходилось
                    разбираться со сложными интеграциями
                </div>
            </div>

            <div className='w-screen flex justify-center my-6 space-x-16'>
                <div className='size-1/5'>
                    <img className="w-12" src={icon1} />
                    <div className='text-2xl py-5 font-bold'>Google-таблицы</div>
                    <div className=' text-slate-500 text-xl font-semibold font-[Montserrat]'>Добавляйте строки, получайте значения из ячеек и многое другое</div>
                </div>
                <div className='size-1/5'>
                    <img className="w-16" src={icon2} />
                    <div className='text-2xl py-5 font-bold'>Платежи</div>
                    <div className='text-slate-500 text-xl font-semibold font-[Montserrat]'>Получайте платежи через популярные сервисы</div>
                </div>
                <div className='size-1/5'>
                    <img className="w-16" src={icon3} />
                    <div className='text-2xl py-5 font-bold'>CRM</div>
                    <div className='text-slate-500 text-xl font-semibold font-[Montserrat]'>Отправляйте заявки из бота в CRM</div>
                </div>

                <div className='size-1/5'>
                    <img className="w-16" src={icon4} />
                    <div className='text-2xl py-5 font-bold'>GetCourse</div>
                    <div className='text-slate-500 text-xl font-semibold font-[Montserrat]'>Добавляйте пользователей в GetCourse, отправляйте ссылки на оплату</div>
                </div>

            </div>

            <div>
                <div className='my-16 font-bold text-6xl text-center font-[Geist] '>А еще у нас есть</div>
            </div>

            <div>
                <div className='grid grid-rows-2 gap-4 m-2'>
                    <div className='w-full h-60 border rounded-3xl'>GPT</div>
                    <div className='w-1/2 h-60 border rounded-3xl'>segment</div>
                    <div className='w-1/2 h-60 border rounded-3xl shadow-sm'>oplata</div>
                </div>
            </div>




        </>
    );
}
