import React from 'react';
import Title from "../ui/Title.jsx";

const SettingsSlide = () => {
	return (
	<div className='flex items-start justify-between w-full h-full mb-10 pl-21'>
		<div className='w-1/2 flex flex-col items-start justify-start pt-15'>
			<img src='/src/assets/services/settings.png' alt='settings' className='h-[83px] w-[83px]'/>
			<Title className='mt-15'>Конструктор чат-бота интерактивного
				ответа.</Title>
			<Title className='mt-3'>Поддержка на частые вопросы 24/7</Title>
			<ul className='flex flex-col font-[Roboto] font-regular mt-7.5 pl-8 text-[19px]'>
				<li>добавляйте интеграцию со сторонними сервисами</li>
				<li>подключайте сразу несколько мессенджеров</li>
				<li>создавайте сценарии ботов</li>
			</ul>
			<ul className='flex flex-col font-[Roboto] font-regular mt-3 pl-8 text-[19px]'>
				<li>бот автоматически отвечает на вопросы клиентов</li>
				<li>подключите бота в любые мессенджеры</li>
				<li>бот проанализирует тексты и будет отвечать, как человек</li>
			</ul>
		</div>
		<div className='w-1/2 bg-[#F3F5FF] absolute right-0 h-full'>
			<img src="/src/assets/services/botillustration.png" alt="botillustration" className='relative top-[144px] -left-[128px]'/>
		</div>
	</div>
	);
};

export default SettingsSlide;
