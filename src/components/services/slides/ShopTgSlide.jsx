import React from 'react';

const ShopTgSlide = () => {
	return (
		<div className='flex items-start justify-between w-full h-full mb-[106px] pl-21'>
			<div className='w-1/2 flex flex-col items-start justify-start pt-20'>
				<img src='/src/assets/services/work.png' alt='work'/>
				<h2 className='font-[Geist] font-bold text-[40px] mt-12.5 max-w-[534px]'>Магазины в Telegram WebApp</h2>
				<ul className='flex flex-col font-[Roboto-Regular] gap-y-10 mt-14 pl-8 text-[25px] max-w-[620px]'>
					<li>загружайте товары с категориями и модификациями на платформу</li>
					<li>удобная корзина для пользователя и сценарии со сбором данных и доставкой в боте</li>
					<li>принимайте оплату в боте через популярные сервисы</li>
				</ul>
			</div>
			<div className='w-1/2 bg-[#F3F5FF] absolute right-0 h-full'>
				<img src="/src/assets/services/phone2.png" alt="phone" className='relative top-[151px] left-11.5'/>
			</div>
		</div>
	);
};

export default ShopTgSlide;
