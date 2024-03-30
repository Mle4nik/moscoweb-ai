import React, {useEffect, useState} from 'react';
import {BsPlusLg} from "react-icons/bs";
import {PiMinusLight} from "react-icons/pi";

const Question = ({title, btnActive}) => {

    return (
        <div
            className={`flex items-center h-auto p-8 rounded-xl border hover:border-none hover:shadow-lg hover:shadow-[#835EF0] all duration-300 cursor-pointer ${btnActive.title === title ? 'bg-[#643CDA] text-white' : 'text-[#000C71]'}`}>
            <div className="flex flex-col">
                <div className="flex items-center">
                    <div
                        className='w-auto mr-8 border-2 rounded-xl bg-white text-white all duration-300'>
                        {btnActive.title === title ?
                            <PiMinusLight
                                className={`m-3 text-4xl ${btnActive.title === title ? 'text-[#643CDA]' : 'text-[#000C71]'} all duration-300`}/>
                            :
                            <BsPlusLg
                                className={`m-3 text-4xl ${btnActive.title === title ? 'text-[#643CDA]' : 'text-[#000C71]'} all duration-300`}/>
                        }
                    </div>
                    <h4 className={`text-start ${btnActive.title === title ? 'font-bold' : ''}`}>{title}</h4>
                </div>
                <div>
                    {btnActive.title === title ?
                        <p className="ml-24 w-4/5 text-lg text-start">{btnActive.description}</p> : ''}
                </div>
            </div>
        </div>
    )
};

export default Question;
