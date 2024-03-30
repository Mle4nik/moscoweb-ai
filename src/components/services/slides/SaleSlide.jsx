import React from 'react';

const SaleSlide = () => {
	return (
		<div className='flex items-start justify-between w-full h-full mb-18 pl-21'>
			<div className='w-1/2 flex flex-col items-start justify-start pt-20'>
				<img src='/src/assets/services/shop.png' alt='shop'/>
				<h2 className='font-[Geist] font-bold text-[40px] mt-[51px] max-w-[534px]'>Ваш AI-продажник, продающий 24/7</h2>
				<ul className='flex flex-col gap-y-11 font-[Roboto-Regular] mt-12 pl-8 text-[25px]'>
					<li className='max-w-[460px]'>загружайте WORD со скриптами продажников или ответами на частые
						вопросы
					</li>
					<li className='max-w-[519px]'>бот автоматически ответит на вопросы клиента и доведет до цели</li>
					<li className='max-w-[519px]'>контакт клиента отправляется в вашу CRM или гугл-таблицу</li>
				</ul>
			</div>
			<div className='w-1/2 bg-[#F3F5FF] absolute right-0 h-full'>
				<img src="/src/assets/services/phone.png" alt="phone" className='relative top-[133px] -left-[30px]'/>
			</div>
		</div>
	);
};

export default SaleSlide;
