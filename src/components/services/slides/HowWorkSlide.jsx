import React from 'react';
import Title from "../ui/Title.jsx";

const HowWorkSlide = () => {
	return (
		<div className='flex items-start justify-between w-full h-full mb-10 pl-21'>
			<div className='w-1/2 flex flex-col items-start justify-start pt-20 font-[Roboto]'>
				<img src='/src/assets/services/brain.png' alt='brain' className='h-[83px] w-[83px]'/>
				<Title className='mt-15'>MoscoAi на основе ChatGpt</Title>
				<div className='flex flex-col items-start justify-start mt-15 gap-y-4.5 max-w-[519px]'>
					<Title className='font-[Roboto]'>Умный чат-бот за 5 минут</Title>
					<p className='font-regular text-[19px]'>Просто напишите о своем продукте или загрузите файл с текстом. Больше ничего настраивать не нужно!</p>
				</div>
				<div className='flex flex-col items-start justify-start mt-7.5 gap-y-4.5 max-w-[519px]'>
					<Title className='font-[Roboto] text-[30px]'>Настройка за 5 минут</Title>
					<p className='font-regular text-[19px]'>Просто напишите о своем продукте или загрузите файл с текстом. Больше ничего настраивать не нужно!</p>
				</div>
			</div>
			<div className='w-1/2 bg-[#F3F5FF] absolute right-0 h-full'>
				<img src="/src/assets/services/botIllustration2.png" alt="botIllustration" className='relative h-[40%] top-[270px] -left-8'/>
			</div>
		</div>
	);
};

export default HowWorkSlide;
