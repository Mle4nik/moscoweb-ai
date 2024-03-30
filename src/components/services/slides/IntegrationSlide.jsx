import React from 'react';
import Title from "../ui/Title.jsx";

const IntegrationSlide = () => {
	return (
		<div className='flex items-start justify-between w-full h-full mb-10 pl-21'>
			<div className='w-1/2 flex flex-col items-start justify-start pt-20 font-[Roboto]'>
				<img src='/src/assets/services/message.png' alt='message' className='h-[83px] w-[83px]'/>
				<Title className='mt-15'>Чаты с пользователями</Title>
				<div className='flex flex-col items-start justify-start gap-y-2.5 mt-7.5'>
					<Title className='font-[Roboto]'>Диалоги из всех мессенджеров</Title>
					<p className='font-regular text-[19px]'>Чаты из всех подключенных каналов попадают <br/> в единый интерфейс</p>
				</div>
				<div className='flex flex-col items-start justify-start gap-y-2.5 mt-7.5'>
					<Title className='font-[Roboto]'>Интеграция с CRM</Title>
					<p className='font-regular text-[19px]'>Подключайте бота к CRM и автоматизируйте продажи</p>
				</div>
			</div>
			<div className='w-1/2 bg-[#F3F5FF] absolute right-0 h-full'>
				<img src="/src/assets/services/integration.png" alt="integration" className='relative h-[40%] top-[198px] -left-8'/>
				{/*<img src="/src/assets/services/integration.png" alt="integration" className='relative top-[215px] -left-[152px]'/>*/}
			</div>
		</div>
	);
};

export default IntegrationSlide;
