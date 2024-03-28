// import React from 'react';
// import icon1 from '../assets/img_google_tables.svg'
// import icon2 from '../assets/Youmoney.svg'
// import icon3 from '../assets/amo.svg'
// import icon4 from '../assets/getCourse.svg'
// import oval from '../assets/oval.svg'

export default function Integration() {
    return (
        <>
            <div className="flex justify-center items-center">
                <div className="p-3 font-bold text-6xl text-center size-1/2">
                    MoscoAI bot интегрирован с множеством популярных сервисов
                </div>
            </div>
            <div className='p-9'>
                <div className="flex justify-center items-center text-center text-4xl text-slate-500 font-medium ">
                    Мы сделали удобные блоки в конструкторе, чтобы вам не приходилось
                    разбираться со сложными интеграциями
                </div>
            </div>

            <div className='flex justify-center m-10 '>
                <div className='size-1/5'>
                    {/*<img src={icon1} />*/}
                    <div className='text-4xl py-5 font-bold'>Google-таблицы</div>
                    <div className=' text-slate-500 py-1 text-2xl font-semibold'>Добавляйте строки, получайте значения из ячеек и многое другое</div>
                </div>
                <div  className='size-1/5 mx-10'>
                    {/*<img src={icon2} />*/}
                    <div className='text-4xl py-5 font-bold'>Платежи</div>
                    <div className='text-slate-500 py-1 text-2xl font-semibold'>Получайте платежи через популярные сервисы</div>
                </div>
                <div  className='size-1/5 mx-10'>
                    {/*<img src={icon3} />*/}
                    <div className='text-4xl py-5 font-bold'>CRM</div>
                    <div className='text-slate-500 py-1 text-2xl font-semibold'>Отправляйте заявки из бота в CRM</div>
                </div>

                <div  className='size-1/5'>
                    {/*<img src={icon4} />*/}
                    <div className='text-4xl py-5 font-bold'>GetCourse</div>
                    <div className='text-slate-500 py-1 text-2xl font-semibold'>Добавляйте пользователей в GetCouse, отправляйте ссылки на оплату</div>
                </div>

            </div>

            <div>
                <div className='my-16 font-bold text-6xl text-center'>А еще у нас есть</div>
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
