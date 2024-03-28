import React, {useState} from 'react';
import SvgSelector from "../../assets/SvgSelector.jsx";

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
			className='font-[Geist] font-bold max-w-[1820px] w-full m-auto flex flex-col items-center justify-center'>
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

			<div className='mt-7.5 border-[2px] rounded-[50px] border-black border-opacity-40 flex items-center justify-center w-full'>
				<div className='w-1/2 flex flex-col items-start justify-center'>

				</div>
				<div className='w-1/2 bg-[#F3F5FF] relative pt-[133px] pb-[206px]'>
					<img src="/src/assets/services/phone.png" alt="phone" className='relative -left-[30px]'/>
				</div>
			</div>
		</div>
	);
};

export default Services;