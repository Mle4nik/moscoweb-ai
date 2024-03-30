import React from 'react';
import Title from "../ui/Title.jsx";

const SaleSlide = () => {
	return (
		<div className='flex items-start justify-between w-full h-full mb-10 pl-21'>
			<div className='w-1/2 flex flex-col items-start justify-start pt-20'>
				<img src='/src/assets/services/shop.png' alt='shop' className='h-[83px] w-[83px]'/>
				<Title className='mt-15'>Ваш AI-продажник, продающий 24/7</Title>
				<ul className='flex flex-col gap-y-4.5 font-[Roboto] font-regular mt-7.5 pl-8 text-[19px]'>
					<li className='max-w-[460px]'>загружайте WORD со скриптами продажников или ответами на частые
						вопросы
					</li>
					<li className='max-w-[519px]'>бот автоматически ответит на вопросы клиента и доведет до цели</li>
					<li className='max-w-[519px]'>контакт клиента отправляется в вашу CRM или гугл-таблицу</li>
				</ul>
			</div>
			<div className='w-1/2 bg-[#F3F5FF] absolute right-0 h-full'>
				<img src="/src/assets/services/phone.png" alt="phone" className='relative h-[60%] top-[120px] -left-[30px]'/>
			</div>
		</div>
	);
};

export default SaleSlide;
