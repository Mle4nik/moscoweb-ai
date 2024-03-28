import React from 'react';
import footer_logo from '../assets/footer/footer_logo.svg';
import bot3 from '../assets/footer/bot3.svg';

export default function Footer() {
  return (
    <>
      <div>
        <div className="h-svh bg-light-purple px-12 w-full font-normal overflow-hidden tracking-tighter ">
          <div className="font-normal py-16 text-8xl tracking-tighter text-white font-[Geist] ">
            sale@moscoweb.agency
          </div>
          <div className="font-[Geist] tracking-tighter mb-8 font-medium text-[#B4C0FF] text-6xl">
            Напишите нам
          </div>

          <div className="flex justify-between items-end">
            <div className="w-1/4">
              <img src={bot3} alt="Bot" />
            </div>
            <div className='flex flex-col justify-start items-end'>
              <div className="w-1/4 mb-7">
                <img src={footer_logo} className="right-0" alt="logo" />
              </div>
              <div className='flex flex-col tracking-tighter justify-center items-end text-white text-6xl gap-4 font-[Geist] font-medium mb-16'>
                <a className='border-b-4 border-white' href="#">Youtube</a>
                <a href="#">t.me/moscoweb</a>
                <a href="#">inst.com/mweb.agency</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
