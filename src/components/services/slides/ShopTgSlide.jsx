import React from 'react';
import Title from "../ui/Title.jsx";

const ShopTgSlide = () => {
	return (
		<div className='flex items-start justify-between w-full h-full mb-10 pl-21'>
			<div className='w-1/2 flex flex-col items-start justify-start pt-20'>
				<img src='/src/assets/services/work.png' alt='work' className='h-[83px] w-[83px]'/>
				<Title className='mt-15'>Магазины в Telegram WebApp</Title>
				<ul className='flex flex-col font-[Roboto] font-regular gap-y-5 mt-7.5 pl-8 text-[19px] max-w-[400px]'>
					<li>загружайте товары с категориями и модификациями на платформу</li>
					<li>удобная корзина для пользователя и сценарии со сбором данных и доставкой в боте</li>
					<li>принимайте оплату в боте через популярные сервисы</li>
				</ul>
			</div>
			<div className='w-1/2 bg-[#F3F5FF] absolute right-0 h-full'>
				<img src="/src/assets/services/phone2.png" alt="phone" className='relative h-[70%] top-[100px] left-7.5'/>
			</div>
		</div>
	);
};

export default ShopTgSlide;
