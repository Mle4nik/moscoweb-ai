import React from 'react';

export default function Subscription() {
  return (
    <>
      <div className="flex justify-center items-center text-5xl text-center font-bold w-full h-96 bg-light-pink">
        <div className="w-full font-[Geist] ">
          Бот дает исчерпывающий <br /> ответ на запросы покупателей <br /> и
          ведет их к покупке
        </div>
      </div>
      <div className="w-full flex justify-center">
        {/* left */}
        <div className=" flex jusstify-center items-center size-1/2 bg-light-pink h-96">
          <div className='mx-auto'>
            <div className="p-5 text-4xl text-gray-200 font-bold m-3 font-[Geist]">Набор Lite</div>
            <div className="w-60 h-60 rounded-2xl bg-white">  
              <button className="p-4 bg-light-blue rounded-2xl text-white">
                Заказать
              </button>
            </div>
          </div>
        </div>

        {/* right */}
        <div className=" flex jusstify-center items-center size-1/2 bg-light-purple h-96">
          <div className='mx-auto'>
            <div className="p-5 text-4xl text-gray-200 font-bold m-3 font-[Geist]">Pro Решения</div>
            <div className="w-60 h-60 rounded-2xl bg-white">
              <button className="p-4 bg-light-blue rounded-2xl text-white">
                Заказать
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
