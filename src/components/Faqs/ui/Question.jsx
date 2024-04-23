import React, {useState} from 'react';
import {BsPlusLg} from "react-icons/bs";
import {PiMinusLight} from "react-icons/pi";

const Question = ({title, description}) => {

    const [isClicked, setIsClicked] = useState(false)

    const [color, setColor] = useState("");
    const styles = color


    return (
        <div onClick={() => setIsClicked(!isClicked)} onMouseEnter={() => setColor(`text-white bg-[#835EF0] border-[#835EF0]`)} onMouseLeave={() => setColor('')}
            className={`w-full flex items-start h-auto tablet-lg:p-8 tablet:p-6 mobile:p-5 tablet-lg:rounded-xl mobile:rounded-md border hover:border-b-[6px] hover:border-r-[6px] hover:border-[#835EF0] all duration-300 cursor-pointer ${isClicked ? 'bg-[#643CDA] text-white hover:border-none border-none' : 'text-[#000C71]'}`}>
            <div className="flex flex-col">
                <div className="flex items-center">
                    <div
                        className={`w-auto tablet-lg:mr-8 tablet:mr-5 mobile:mr-4 ${!isClicked ? 'tablet-lg:border-2 mobile:border-[1px]' : 'border-2 border-white'} tablet-lg:rounded-xl mobile:rounded-md bg-white text-white all duration-300 ${styles}`}>
                        {isClicked ?
                            <PiMinusLight
                                className={`m-1 tablet-lg:text-5xl mobile:text-4xl ${isClicked ? 'text-[#643CDA]' : 'text-[#000C71]'} all duration-300`}/>
                            :
                            <BsPlusLg
                                className={`${styles} m-1 tablet-lg:text-5xl mobile:text-4xl ${isClicked ? 'text-[#643CDA]' : 'text-[#000C71]'} all duration-300 bg-white`}/>
                        }
                    </div>
                    <h4 className={`text-start tablet-lg:text-2xl tablet:text-xl mobile:text-lg ${isClicked ? 'font-bold' : ''}`}>{title}</h4>
                </div>
                <div>
                    {isClicked ?
                        <p className="tablet-lg:ml-[5.8rem] tablet:ml-[4.3rem] mobile:ml-[4rem] w-4/5 text-sm tablet-lg:text-lg tablet:text-sm text-start">{description}</p> : ''}
                </div>
            </div>
        </div>
    )
};

export default Question;
