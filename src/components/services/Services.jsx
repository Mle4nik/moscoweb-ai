import React, {useState} from 'react';
import ActionButton from "./ui/ActionButton.jsx";
import HowWorkSlide from "./slides/HowWorkSlide.jsx";
import ShopTgSlide from "./slides/ShopTgSlide.jsx";
import SaleSlide from "./slides/SaleSlide.jsx";
import SettingsSlide from "./slides/SettingsSlide.jsx";
import IntegrationSlide from "./slides/IntegrationSlide.jsx";

const Services = () => {
	const handleClick = (btn) => {
		setActiveBtn(btn)
	}
	const serviceItems = [
		{
			title: 'Автоматизация'
		},
		{
			title: 'Продажи'
		},
		{
			title: 'Магазины TG'
		},
		{
			title: 'Как работает'
		},
		{
			title: 'Интеграция с CRM'
		},
	]

	const [activeBtn, setActiveBtn] = useState(serviceItems[0].title)

	return (
		<div
			className='font-[Geist] max-w-[1365px] w-full m-auto flex flex-col items-center justify-center mt-[108px]'>
			<h2 className='font-bold text-center text-[45px] maw-w-[399px]'>Все сервисы <br/> в одной подписке</h2>
			<div className='flex items-center justify-center gap-x-12 w-full mt-12.5'>
				{serviceItems?.map((item) => {
					return (
						<button key={item.title}
								className={`${activeBtn === item.title ? 'bg-[#F3F5FF]' : 'bg-transparent'} flex item-center justify-center py-3.5 px-11 border-2 border-[#F3F5FF] rounded-full min-w-max text-center text-[#4457FF] text-[22px] transition`}
								onClick={() => handleClick(item.title)}>
							{item.title}
						</button>
					)
				})}
			</div>
			<div
				className='border-[0.75px] rounded-[50px] border-gray-300 flex flex-col items-center justify-center w-full h-full mt-7.5 pb-[35px] relative overflow-hidden'>
				<SettingsSlide/>
				{/*<SaleSlide />*/}
				{/*<ShopTgSlide/>*/}
				{/*<HowWorkSlide/>*/}
				{/*<IntegrationSlide/>*/}
				<ActionButton>Заказать бота под ключ</ActionButton>
			</div>
		</div>
	);
};

export default Services;
