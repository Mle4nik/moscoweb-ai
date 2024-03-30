import React, {useState} from 'react';
import ActionButton from "./ui/ActionButton.jsx";
import SaleSlide from "./slides/SaleSlide.jsx";
import SettingsSlide from "./slides/SettingsSlide.jsx";
import ShopTgSlide from "./slides/ShopTgSlide.jsx";
import HowWorkSlide from "./slides/HowWorkSlide.jsx";
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
			className='font-[Geist] font-bold max-w-[1820px] w-full m-auto flex flex-col items-center justify-center mt-[193px]'>
			<h2 className='text-6xl'>Все сервисы в одной подписке</h2>
			<div className='flex items-center justify-center gap-x-12 w-full mt-[70px]'>
				{serviceItems?.map((item) => {
					return (
						<button key={item.title}
								className={`${activeBtn === item.title ? 'bg-[#F3F5FF]' : 'bg-transparent'} flex item-center justify-center py-3.5 px-11 border-2 border-[#F3F5FF] rounded-full font-[Geist] text-[#4457FF] text-[29px] transition`}
								onClick={() => handleClick(item.title)}>
							{item.title}
						</button>
					)
				})}
			</div>

			<div
				className='border-[2px] rounded-[50px] border-black border-opacity-40 flex flex-col items-center justify-center w-full h-full mt-7.5 pb-12.5 relative'>
				{/*<SettingsSlide/>*/}
				{/*<SaleSlide />*/}
				{/*<ShopTgSlide/>*/}
				<HowWorkSlide/>
				{/*<IntegrationSlide/>*/}
				<ActionButton>Заказать бота под ключ</ActionButton>
			</div>
		</div>
	);
};

export default Services;
