import React from 'react';

const HowWorkSlide = () => {
	return (
		<div className='flex items-start justify-between w-full h-full mb-16 pl-21'>
			<div className='w-1/2 flex flex-col items-start justify-start pt-20'>
				<img src='/src/assets/services/brain.png' alt='brain'/>
				<h2 className='font-[Geist] font-bold text-[40px] mt-12.5 max-w-[534px]'>MoscoAi на основе ChatGpt</h2>
				<div className='flex flex-col items-start justify-start gap-y-4.5 max-w-[519px]'>
					<h3 className='font-[Roboto-Bold] text-[30px] mt-12.5'>Умный чат-бот за 5 минут</h3>
					<p className='font-[Roboto-Regular] text-[25px]'>Просто напишите о своем продукте или загрузите файл с текстом. Больше ничего настраивать не нужно!</p>
				</div>
				<div className='flex flex-col items-start justify-start gap-y-4.5 max-w-[519px]'>
					<h3 className='font-[Roboto-Bold] font-bold text-[30px] mt-12.5'>Настройка за 5 минут</h3>
					<p className='font-[Roboto-Regular] font-regular text-[25px]'>Просто напишите о своем продукте или загрузите файл с текстом. Больше ничего настраивать не нужно!</p>
				</div>
			</div>
			<div className='w-1/2 bg-[#F3F5FF] absolute right-0 h-full'>
				<img src="/src/assets/services/botIllustration2.png" alt="botIllustration" className='relative top-[232px] -left-18'/>
			</div>
		</div>
	);
};

export default HowWorkSlide;
