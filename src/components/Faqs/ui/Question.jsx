import React, {useEffect} from 'react';
import {BsPlusLg} from "react-icons/bs";

const Question = ({title, btnActive}) => {

	useEffect(() => {
		return console.log(btnActive)
	})

	return (
		<div
			className={`flex items-center h-auto p-8 rounded-xl  hover:shadow-lg hover:shadow-[#835EF0] all duration-300 cursor-pointer ${btnActive.title === title ? 'bg-[#643CDA] text-white' : 'text-[#000C71]'}`}>
			<div className="flex flex-col">
				<div className="flex items-center">
					<div
						className="w-auto mr-8 border-2 rounded-xl bg-white text-white all duration-300">
						<BsPlusLg
							className={`m-3 text-4xl ${btnActive.title === title ? 'text-[#643CDA]' : 'text-[#000C71]'} all duration-300`}/>
					</div>
					<h4 className={`${btnActive.title === title ? 'font-bold' : ''}`}>{title}</h4>
				</div>
				<div>
					{btnActive.title === title ? <p className="ml-24 w-4/5 text-lg">{btnActive.description}</p> : ''}
				</div>
			</div>
		</div>
	)
};

export default Question;
