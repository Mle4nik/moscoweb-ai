import React from 'react';

const Title = ({children, className}) => {
	return (
		<p className={`${className} font-[Geist] font-bold text-[30px] max-w-[400px]`}>
			{children}
		</p>
	);
};

export default Title;
