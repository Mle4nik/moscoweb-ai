import React from 'react';

const SettingsSlide = () => {
	return (
	<div className='flex items-start justify-between w-full h-full mb-18 pl-21'>
		<div className='w-1/2 flex flex-col items-start justify-start py-20'>
			<img src='/src/assets/services/settings.png' alt='settings'/>
			<h2 className='font-[Geist] font-bold text-[40px] mt-12.5 max-w-[534px]'>Конструктор чат-бота интерактивного
				ответа.</h2>
			<h2 className='font-[Geist] font-bold text-[40px] mt-4.5 max-w-[534px]'>Поддержка на частые вопросы 24/7</h2>
			<ul className='flex flex-col font-[Roboto] font-regular mt-10 pl-8 text-[25px]'>
				<li>добавляйте интеграцию со сторонними сервисами</li>
				<li>подключайте сразу несколько мессенджеров</li>
				<li>создавайте сценарии ботов</li>
			</ul>
			<ul className='flex flex-col font-[Roboto] font-regular pl-8 text-[25px] mt-4.5'>
				<li>бот автоматически отвечает на вопросы клиентов</li>
				<li>подключите бота в любые мессенджеры</li>
				<li>бот проанализирует тексты и будет отвечать, как человек</li>
			</ul>
		</div>
		<div className='w-1/2 bg-[#F3F5FF] absolute right-0 h-full'>
			<img src="/src/assets/services/botillustration.png" alt="botillustration" className='relative top-[156px] -left-[192px]'/>

		</div>
	</div>
	);
};

export default SettingsSlide;