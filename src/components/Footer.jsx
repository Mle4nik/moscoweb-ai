import React from 'react';
import footer_logo from '../assets/footer/footer_logo.svg';
import bot3 from '../assets/footer/bot3.svg';

export default function Footer() {

    const Link = ({link, children, className}) => {
        return (
            <div className="link">
                <a className={className} href={link} target="_blank">{children}</a>
            </div>
        )
    }

    return (
        <>
            <div className="bg-light-purple w-screen">
                <div
                    className="h-auto px-12 w-full font-normal overflow-hidden tracking-tighter max-w-[1440px] mx-auto">
                    <div className="font-normal py-16 text-8xl tracking-tighter text-white font-[Geist] ">
                        <a href="sale@moscoweb.agency" target="_blank">sale@moscoweb.agency</a>
                    </div>
                    <div className="font-[Geist] tracking-tighter mb-8 font-medium text-[#B4C0FF] text-6xl">
                        Напишите нам
                    </div>

                    <div className="flex justify-between items-end">
                        <div className="w-1/4">
                            <img src={bot3} alt="Bot"/>
                        </div>
                        <div className='flex flex-col justify-start items-end'>
                            <div className="w-1/4 mb-7">
                                <img src={footer_logo} className="right-0" alt="logo"/>
                            </div>
                            <div
                                className='flex flex-col tracking-tighter justify-center items-end text-white text-6xl gap-4 font-[Geist] font-medium mb-16'>
                                <Link className="border-b-4 border-white" link="https://www.youtube.com/@agatsarsky">Youtube</Link>
                                <Link link="https://t.me/moscoweb">t.me/moscoweb</Link>
                                <Link link="https://www.instagram.com/mweb.agency/">inst.com/mweb.agency</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
