import React from 'react';
import icon1 from '../assets/integration/image 19.svg';
import icon2 from '../assets/integration/image 20.svg';
import icon3 from '../assets/integration/image 21.svg';
import icon4 from '../assets/integration/image 22.svg';
import icon5 from '../assets/integration/image 25.svg';
import icon6 from '../assets/integration/image 26.svg';
import icon7 from '../assets/integration/image 27.svg';
import oval2 from '../assets/integration/oval2.svg';

export default function Integration() {
  return (
    <div className="w-screen">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex justify-center items-center">
          {/* Заголовок */}
          <div className="p-3 mt-24 font-bold text-xl mobile:text-2xl tablet:text-3xl tablet-lg:text-4xl desktop:text-5xl  w-full text-center font-[Geist]">
            MoscoAI bot интегрирован <br /> с множеством популярных <br />{' '}
            сервисов
          </div>
        </div>
        <div className="pt-5 pb-20">
          <div className=" px-8 font-[Montserrat] flex justify-center items-center text-center text-[12px] mobile:text-lg tablet:text-xl desktop:text-2xl text-slate-500 font-medium">
            Мы сделали удобные блоки в конструкторе, чтобы вам не <br />{' '}
            приходилось разбираться со сложными интеграциями
          </div>
        </div>
        {/* 4 блока */}
        <div className="w-full grid desktop:grid-cols-4 tablet:grid-cols-4 grid-cols-2 tablet:justify-center my-6  gap-5 z-50">
          <div className="w-5/6">
            <img className="w-12" src={icon1} />
            <div className="text-lg tablet:text-2xl py-5 font-bold">
              Google таблицы
            </div>
            <div className=" text-slate-500 text-xs tablet:text-xl font-semibold font-[Montserrat]">
              Добавляйте строки, получайте значения из ячеек и многое другое
            </div>
          </div>
          <div className="w-5/6">
            <img className="w-12 tablet:w-16" src={icon2} />
            <div className="text-lg py-4 tablet:py-5 font-bold">Платежи</div>
            <div className="text-slate-500 text-xs tablet:text-xl font-semibold font-[Montserrat]">
              Получайте платежи через популярные сервисы
            </div>
          </div>
          <div className="w-5/6">
            <img className="w-12 tablet:w-16" src={icon3} />
            <div className="text-lg py-5 font-bold">CRM</div>
            <div className="text-slate-500 text-xs tablet:text-xl font-semibold font-[Montserrat]">
              Отправляйте заявки из бота в CRM
            </div>
          </div>

          <div className="w-5/6">
            <img className="w-12 tablet:w-16" src={icon4} />
            <div className="text-lg py-5 font-bold">GetCourse</div>
            <div className="text-slate-500 text-xs tablet:text-xl font-semibold font-[Montserrat]">
              Добавляйте пользователей в GetCourse, отправляйте ссылки на оплату
            </div>
          </div>
        </div>

        {/* Background Image Oval  */}
        <div className="relative ">
          <img
            src={oval2}
            className=" -z-10 absolute -top-[350px] desktop:w-[815px] desktop:h-[400px] tablet:-top-[350px] tablet:w-4/5 tablet:left-[100px] tablet-lg:w-3/5 tablet-lg:-top-[350px] tablet-lg:left-[450px] desktop:-top-[350px] desktop:left-[670px] "
            alt="oval"
          />
        </div>

        <div>
          <div className=" mt-32 mb-12 font-bold text-xl mobile:text-2xl tablet:text-3xl tablet-lg:text-4xl desktop:text-5xl text-center font-[Geist] ">
            А еще у нас есть
          </div>
        </div>

        <div>
          <div className=" flex flex-col mx-5 mobile:mx-6 tablet:mx-10 desktop:mx-12 mb-32 gap-3">
            <div className="w-full shadow-[0_0_60px_-20px_rgba(0,0,0,0.2)] rounded-3xl flex items-start p-9 ">
              <img
                className=" w-8 mobile:w-10 tablet:w-12 tablet-lg:w-14 desktop:w-16 mr-5 "
                src={icon5}
                alt="gpt"
              />
              <div>
                <h4 className="text-sm mobile:text-lg tablet:text-xl desktop:text-2xl mb-2 font-[Geist] font-black tracking-wide">
                  Прямая интеграция с GPT
                </h4>
                <p className="text-[#7C7E9D] text-xs mobile:text-sm tablet:text-base desktop:text-lg font-medium tablet:font-bold  font-[Montserrat] tracking-wide">
                  Вам не нужен аккаунт OpenAi. Просто используйте блок “Ответ
                  через ChatGPT”, указываете промт для GPT и все будет работать!
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 desktop:tablet-lg:grid-cols-2 gap-3">
              <div className="shadow-[0_0_60px_-20px_rgba(0,0,0,0.2)] rounded-3xl flex h-auto items-start p-9">
                <img
                  className=" w-8 mobile:w-10 tablet:w-12 tablet-lg:w-14 desktop:w-16 mr-5"
                  src={icon6}
                  alt="message"
                />
                <div>
                  <h4 className=" text-sm mobile:text-lg tablet:text-xl desktop:text-2xl mb-2 font-[Geist] font-black tracking-wide">
                    Сегментированные авто-рассылки
                  </h4>
                  <p className="text-[#7C7E9D] text-xs mobile:text-sm tablet:text-base desktop:text-lg font-medium tablet:font-bold  font-[Montserrat] tracking-wide">
                    Рассылки в мессенджеры с автоматическимим сценариями для
                    прогрева аудитории
                  </p>
                </div>
              </div>
              <div className="shadow-[0_0_60px_-20px_rgba(0,0,0,0.2)] rounded-3xl flex items-start p-9">
                <img
                  className=" w-8 mobile:w-10 tablet:w-12 tablet-lg:w-14 desktop:w-16 mr-5"
                  src={icon7}
                  alt="card"
                />
                <div>
                  <h4 className="text-sm mobile:text-lg tablet:text-xl desktop:text-2xl mb-2 font-[Geist] font-black tracking-wide">
                    Прием оплат
                  </h4>
                  <p className="text-[#7C7E9D] text-xs mobile:text-sm tablet:text-base desktop:text-lg font-medium tablet:font-bold  font-[Montserrat] tracking-wide">
                    Получайте платежи прямо в чат-боте через популярные
                    платежные системы
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
