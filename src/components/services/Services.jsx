import React, {useState} from 'react';
import ActionButton from "./ui/ActionButton.jsx";
import HowWorkSlide from "./slides/HowWorkSlide.jsx";
import ShopTgSlide from "./slides/ShopTgSlide.jsx";
import SaleSlide from "./slides/SaleSlide.jsx";
import SettingsSlide from "./slides/SettingsSlide.jsx";
import IntegrationSlide from "./slides/IntegrationSlide.jsx";

const Services = () => {
	const serviceItems = [
		{
			title: 'Автоматизация',
			component: <SettingsSlide />
		},
		{
			title: 'Продажи',
			component: <SaleSlide />
		},
		{
			title: 'Магазины TG',
			component: <ShopTgSlide />
		},
		{
			title: 'Как работает',
			component: <HowWorkSlide />
		},
		{
			title: 'Интеграция с CRM',
			component: <IntegrationSlide />
		},
	]

	const [activeTitle, setActiveTitle] = useState(serviceItems[0].title)

	const handleClick = (title) => {
		setActiveTitle(title)
	}

	return (
		<div
			className='font-[Geist] max-w-[1365px] w-full m-auto flex flex-col items-center justify-center mt-[108px]'>
			<h2 className='font-bold text-center text-[45px] maw-w-[399px]'>Все сервисы <br/> в одной подписке</h2>
			<div className='flex items-center justify-center gap-x-9 w-full mt-12.5'>
				{serviceItems?.map((item) => {
					return (
						<button key={item.title}
								className={`${activeTitle === item.title ? 'bg-[#F3F5FF]' : 'bg-transparent'} flex item-center justify-center py-2.5 px-7.5 border-2 border-[#F3F5FF] rounded-full min-w-max text-center text-[#4457FF] text-[22px] transition`}
								onClick={() => handleClick(item.title)}>
							{item.title}
						</button>
					)
				})}
			</div>
			<div
				className='border-[0.75px] rounded-[50px] border-gray-300 flex flex-col items-center justify-center w-full h-full mt-7.5 pb-[35px] relative overflow-hidden'>
				{serviceItems.find(item => item.title === activeTitle).component}
				<ActionButton>Заказать бота под ключ</ActionButton>
			</div>
		</div>
	);
};

export default Services;
