import React from 'react';

const IntegrationSlide = () => {
	return (
		<div className='flex items-start justify-between w-full h-full mb-36 pl-21'>
			<div className='w-1/2 flex flex-col items-start justify-start pt-20'>
				<img src='/src/assets/services/message.png' alt='message'/>
				<h2 className='font-[Geist] font-bold text-[40px] mt-12.5 max-w-[534px]'>Чаты с пользователями</h2>
				<div className='flex flex-col items-start justify-start gap-y-2.5 mt-12.5 max-w-[519px]'>
					<h3 className='font-[Roboto-Bold] text-[30px]'>Диалоги из всех мессенджеров</h3>
					<p className='font-[Roboto-Regular] text-[25px]'>Чаты из всех подключенных каналов попадают в единый интерфейс</p>
				</div>
				<div className='flex flex-col items-start justify-start gap-y-2.5 mt-12.5 max-w-[519px]'>
					<h3 className='font-[Roboto-Bold] font-bold text-[30px]'>Интеграция с CRM</h3>
					<p className='font-[Roboto-Regular] font-regular text-[25px]'>Подключайте бота к CRM и автоматизируйте продажи</p>
				</div>
			</div>
			<div className='w-1/2 bg-[#F3F5FF] absolute right-0 h-full'>
				<img src="/src/assets/services/integration.png" alt="integration" className='relative top-[198px] -left-[152px]'/>
				{/*<img src="/src/assets/services/integration.png" alt="integration" className='relative top-[215px] -left-[152px]'/>*/}
			</div>
		</div>
	);
};

export default IntegrationSlide;
