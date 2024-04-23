import React from 'react';
import footer_logo from '../assets/footer/footer_logo.svg';
import bot3 from '../assets/footer/bot3.svg';

export default function Footer() {

        const Link = ({link, children}) => {
            return (
                <div className="link">
                    <a className="group transition duration-300" href={link} target="_blank">{children}
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-white"></span>
                    </a>
                </div>
            )
        }

    return (
        <>
            <div className="bg-light-purple w-screen">
                <div
                    className="h-auto mobile:px-[3vw] desktop:px-12 w-full font-normal overflow-hidden tracking-tighter max-w-[1440px] mx-auto">
                    <div className="font-normal desktop:pt-16 mobile:pt-[3vw] desktop:text-8xl mobile:text-[7vw] tracking-tighter text-white font-[Geist] ">
                        <a href="mailto:sale@moscoweb.agency" target="_blank">sale@moscoweb.agency</a>
                    </div>
                    <div className="font-[Geist] tracking-tighter mobile:mt-[0.5vw] desktop:mt-10 font-medium text-[#B4C0FF] desktop:text-6xl mobile:text-[4vw]">
                        Напишите нам
                    </div>

                    <div className="flex justify-between items-end desktop:mt-12">
                        <div className="mobile:w-[24vw] desktop:w-80">
                            <img src={bot3} alt="Bot"/>
                        </div>
                        <div className='flex flex-col justify-end items-end'>
                            <div className="w-1/4 desktop:mb-6 mobile:mb-[1vw]">
                                <img src={footer_logo} className="right-0" alt="logo"/>
                            </div>
                            <div
                                className='flex flex-col tracking-tighter justify-center items-end text-white desktop:text-6xl mobile:text-[4vw] desktop:gap-6 mobile:gap-[0.1vw] font-[Geist] font-medium mb-[1vw]'>
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
