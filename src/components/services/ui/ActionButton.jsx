import React from 'react';

const ActionButton = ({children}) => {
	return (
		<button className='z-50 bg-light-purple flex items-center justify-center gap-x-7.5 pl-10 pr-7 py-5 rounded-[70px] text-white hover:pl-12 hover:pr-9 hover:bg-[#461CC0] hover:text-white all duration-300 active:bg-[#3B16A9]'>
			{children}
			<svg width="34" height="32" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M18.1719 1.9375L32.2344 16L18.1719 30.0625M30.2812 16L1.76562 16" stroke="white"
					  stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>
		</button>
	);
};

export default ActionButton;
