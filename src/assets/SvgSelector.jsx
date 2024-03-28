import React from 'react';

const SvgSelector = ({name}) => {
	switch (name) {
		case 'telegram':
			return (
				<svg width="90" height="89" viewBox="0 0 90 89" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g clipPath="url(#clip0_326_809)">
						<path
							d="M45 0C33.068 0 21.6141 4.69127 13.1836 13.0336C4.74443 21.3793 0.00233768 32.6976 0 44.5C0 56.2974 4.74609 67.624 13.1836 75.9664C21.6141 84.3087 33.068 89 45 89C56.932 89 68.3859 84.3087 76.8164 75.9664C85.2539 67.624 90 56.2974 90 44.5C90 32.7026 85.2539 21.376 76.8164 13.0336C68.3859 4.69127 56.932 0 45 0Z"
							fill="url(#paint0_linear_326_809)"/>
						<path
							d="M20.3697 44.0297C33.49 38.3782 42.2368 34.652 46.6103 32.8518C59.1118 27.7114 61.7064 26.8186 63.4009 26.7883C63.7736 26.7824 64.6032 26.8735 65.1446 27.3064C65.5947 27.6714 65.7212 28.1651 65.7845 28.5117C65.8407 28.8579 65.9181 29.6471 65.8548 30.2632C65.1798 37.2997 62.2478 54.3752 60.7572 62.2566C60.1314 65.5913 58.8868 66.7093 57.6845 66.8185C55.0689 67.0563 53.0861 65.1108 50.5548 63.4706C46.5962 60.9028 44.3603 59.305 40.5142 56.7998C36.0704 53.9045 38.9532 52.3129 41.4845 49.7124C42.1454 49.0317 53.6626 38.6751 53.8806 37.7357C53.9087 37.6182 53.9368 37.1801 53.6697 36.9493C53.4095 36.7178 53.0228 36.797 52.7415 36.8596C52.3407 36.9486 46.0197 41.0843 33.7572 49.2661C31.9642 50.4856 30.34 51.0801 28.8775 51.0488C27.2743 51.0148 24.1806 50.1505 21.8814 49.4121C19.0689 48.5061 16.8259 48.027 17.0228 46.4883C17.1212 45.6873 18.2392 44.8675 20.3697 44.0297Z"
							fill="white"/>
					</g>
					<defs>
						<linearGradient id="paint0_linear_326_809" x1="4500" y1="0" x2="4500" y2="8900"
										gradientUnits="userSpaceOnUse">
							<stop stopColor="#2AABEE"/>
							<stop offset="1" stopColor="#229ED9"/>
						</linearGradient>
						<clipPath id="clip0_326_809">
							<rect width="90" height="89" fill="white"/>
						</clipPath>
					</defs>
				</svg>
			)
		case 'instagram':
			return (
				<svg width="77" height="77" viewBox="0 0 77 77" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g clipPath="url(#clip0_326_822)">
						<path d="M58.9531 0H18.0469C8.07986 0 0 8.07986 0 18.0469V58.9531C0 68.9201 8.07986 77 18.0469 77H58.9531C68.9201 77 77 68.9201 77 58.9531V18.0469C77 8.07986 68.9201 0 58.9531 0Z" fill="url(#paint0_radial_326_822)"/>
						<path d="M58.9531 0H18.0469C8.07986 0 0 8.07986 0 18.0469V58.9531C0 68.9201 8.07986 77 18.0469 77H58.9531C68.9201 77 77 68.9201 77 58.9531V18.0469C77 8.07986 68.9201 0 58.9531 0Z" fill="url(#paint1_radial_326_822)"/>
						<path d="M38.5027 8.42188C30.3341 8.42188 29.3087 8.45767 26.1006 8.60355C22.8985 8.75033 20.7127 9.25714 18.8003 10.001C16.8218 10.7692 15.1437 11.7969 13.472 13.4693C11.7987 15.1413 10.771 16.8194 10.0004 18.797C9.25444 20.71 8.74702 22.8967 8.60295 26.0973C8.45947 29.3057 8.42188 30.3314 8.42188 38.5003C8.42188 46.6692 8.45797 47.6913 8.60355 50.8994C8.75093 54.1015 9.25775 56.2873 10.001 58.1997C10.7698 60.1782 11.7975 61.8563 13.4699 63.528C15.1413 65.2013 16.8194 66.2314 18.7964 66.9996C20.7103 67.7435 22.8964 68.2503 26.0979 68.3971C29.3063 68.5429 30.3308 68.5787 38.4991 68.5787C46.6686 68.5787 47.6907 68.5429 50.8988 68.3971C54.1009 68.2503 56.2891 67.7435 58.203 66.9996C60.1806 66.2314 61.8563 65.2013 63.5274 63.528C65.2006 61.8563 66.2281 60.1782 66.999 58.2006C67.7383 56.2873 68.2461 54.1009 68.3965 50.9C68.5405 47.6919 68.5781 46.6692 68.5781 38.5003C68.5781 30.3314 68.5405 29.3063 68.3965 26.0979C68.2461 22.8958 67.7383 20.7103 66.999 18.7979C66.2281 16.8194 65.2006 15.1413 63.5274 13.4693C61.8545 11.7963 60.1812 10.7686 58.2012 10.0013C56.2837 9.25714 54.0967 8.75003 50.8946 8.60355C47.6862 8.45767 46.6647 8.42188 38.4934 8.42188H38.5027ZM35.8044 13.8423C36.6054 13.8411 37.499 13.8423 38.5027 13.8423C46.5339 13.8423 47.4855 13.8711 50.657 14.0152C53.5896 14.1494 55.1813 14.6393 56.2416 15.0511C57.6453 15.5961 58.646 16.2479 59.6982 17.3009C60.7509 18.3537 61.4024 19.3562 61.9489 20.7599C62.3607 21.8187 62.8513 23.4104 62.9848 26.343C63.1289 29.5139 63.1602 30.4661 63.1602 38.4934C63.1602 46.5206 63.1289 47.4732 62.9848 50.6437C62.8507 53.5764 62.3607 55.1681 61.9489 56.2271C61.4039 57.6309 60.7509 58.6304 59.6982 59.6825C58.6454 60.7353 57.6459 61.3867 56.2416 61.9321C55.1825 62.3456 53.5896 62.8344 50.657 62.9686C47.4861 63.1126 46.5339 63.1439 38.5027 63.1439C30.4712 63.1439 29.5193 63.1126 26.3487 62.9686C23.4161 62.8332 21.8244 62.3432 20.7632 61.9315C19.3598 61.3861 18.357 60.7347 17.3042 59.6819C16.2515 58.6292 15.6 57.6291 15.0535 56.2247C14.6417 55.1657 14.1512 53.574 14.0176 50.6413C13.8735 47.4705 13.8447 46.5182 13.8447 38.4859C13.8447 30.4538 13.8735 29.5063 14.0176 26.3355C14.1518 23.4029 14.6417 21.8112 15.0535 20.7509C15.5988 19.3472 16.2515 18.3446 17.3045 17.2919C18.3573 16.2392 19.3598 15.5874 20.7635 15.0412C21.8238 14.6276 23.4161 14.1388 26.3487 14.0041C29.1234 13.8786 30.1987 13.8411 35.8044 13.8347V13.8423ZM54.5584 18.8364C52.5657 18.8364 50.949 20.4516 50.949 22.4446C50.949 24.4373 52.5657 26.054 54.5584 26.054C56.5511 26.054 58.1678 24.4373 58.1678 22.4446C58.1678 20.4519 56.5511 18.8352 54.5584 18.8352V18.8364ZM38.5027 23.0537C29.9726 23.0537 23.0564 29.9698 23.0564 38.5003C23.0564 47.0308 29.9726 53.9436 38.5027 53.9436C47.0332 53.9436 53.9469 47.0308 53.9469 38.5003C53.9469 29.9701 47.0326 23.0537 38.5021 23.0537H38.5027ZM38.5027 28.4741C44.0398 28.4741 48.5289 32.9626 48.5289 38.5003C48.5289 44.0374 44.0398 48.5265 38.5027 48.5265C32.9653 48.5265 28.4768 44.0374 28.4768 38.5003C28.4768 32.9626 32.9653 28.4741 38.5027 28.4741Z" fill="white"/>
					</g>
					<defs>
						<radialGradient id="paint0_radial_326_822" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20.4531 82.9305) rotate(-90) scale(76.3127 70.9769)">
							<stop stopColor="#FFDD55"/>
							<stop offset="0.1" stopColor="#FFDD55"/>
							<stop offset="0.5" stopColor="#FF543E"/>
							<stop offset="1" stopColor="#C837AB"/>
						</radialGradient>
						<radialGradient id="paint1_radial_326_822" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-12.8978 5.54671) rotate(78.681) scale(34.1122 140.612)">
							<stop stopColor="#3771C8"/>
							<stop offset="0.128" stopColor="#3771C8"/>
							<stop offset="1" stopColor="#6600FF" stopOpacity="0"/>
						</radialGradient>
						<clipPath id="clip0_326_822">
							<rect width="77" height="77" fill="white"/>
						</clipPath>
					</defs>
				</svg>

			)
		case 'whatsapp':
			return (
				<svg width="80" height="82" viewBox="0 0 80 82" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g clipPath="url(#clip0_326_815)">
						<path
							d="M1.70762 40.4297C1.70574 47.3058 3.47574 54.0197 6.84137 59.9375L1.38574 80.1569L21.7707 74.7314C27.409 77.847 33.7262 79.4795 40.1457 79.4799H40.1626C61.3548 79.4799 78.6057 61.9756 78.6148 40.4605C78.6189 30.0349 74.6226 20.2313 67.362 12.8556C60.1026 5.48059 50.4479 1.41687 40.1611 1.41211C18.9664 1.41211 1.71668 18.9155 1.70793 40.4297"
							fill="url(#paint0_linear_326_815)"/>
						<path
							d="M0.334375 40.4171C0.332188 47.5406 2.16562 54.4947 5.65125 60.6244L0 81.5685L21.1159 75.9486C26.9341 79.1685 33.4847 80.8662 40.1503 80.8688H40.1675C62.12 80.8688 79.9906 62.7347 80 40.4494C80.0038 29.6492 75.8637 19.4932 68.3438 11.8533C60.8228 4.2144 50.8228 0.00444088 40.1675 0C18.2112 0 0.343125 18.1315 0.334375 40.4171ZM12.9097 59.5687L12.1212 58.2983C8.80687 52.9489 7.0575 46.7672 7.06 40.4196C7.06687 21.8964 21.9181 6.82627 40.18 6.82627C49.0238 6.83007 57.335 10.3295 63.5863 16.6787C69.8372 23.0285 73.2769 31.4693 73.2747 40.4469C73.2666 58.9701 58.415 74.0422 40.1675 74.0422H40.1544C34.2128 74.039 28.3856 72.4193 23.3037 69.3586L22.0944 68.6306L9.56375 71.9654L12.9097 59.5687Z"
							fill="url(#paint1_linear_326_815)"/>
						<path
							d="M30.2121 23.5201C29.4665 21.8379 28.6818 21.804 27.9727 21.7745C27.3921 21.7491 26.7284 21.751 26.0652 21.751C25.4015 21.751 24.323 22.0045 23.4115 23.0148C22.499 24.026 19.9277 26.4698 19.9277 31.4401C19.9277 36.4107 23.4943 41.2141 23.9915 41.8888C24.4893 42.5622 30.8768 53.0884 40.993 57.1378C49.4005 60.5031 51.1115 59.8338 52.9362 59.665C54.7612 59.4969 58.8249 57.2219 59.654 54.8629C60.4837 52.5041 60.4837 50.4822 60.2349 50.0597C59.9862 49.6388 59.3224 49.386 58.3271 48.881C57.3315 48.3757 52.4384 45.9316 51.5262 45.5944C50.6137 45.2575 49.9502 45.0894 49.2865 46.101C48.6227 47.111 46.7168 49.386 46.1359 50.0597C45.5555 50.7351 44.9746 50.8191 43.9796 50.3138C42.9837 49.8069 39.7784 48.7414 35.9755 45.3C33.0168 42.6222 31.0193 39.3153 30.4387 38.3038C29.858 37.2938 30.3765 36.7463 30.8755 36.2429C31.3227 35.7902 31.8712 35.0632 32.3693 34.4735C32.8655 33.8835 33.0312 33.4626 33.363 32.7888C33.6952 32.1144 33.529 31.5244 33.2805 31.0191C33.0312 30.5138 31.0971 25.5175 30.2121 23.5201Z"
							fill="white"/>
					</g>
					<defs>
						<linearGradient id="paint0_linear_326_815" x1="3862.84" y1="7875.89" x2="3862.84" y2="1.41211"
										gradientUnits="userSpaceOnUse">
							<stop stopColor="#1FAF38"/>
							<stop offset="1" stopColor="#60D669"/>
						</linearGradient>
						<linearGradient id="paint1_linear_326_815" x1="4000" y1="8156.85" x2="4000" y2="0"
										gradientUnits="userSpaceOnUse">
							<stop stopColor="#F9F9F9"/>
							<stop offset="1" stopColor="white"/>
						</linearGradient>
						<clipPath id="clip0_326_815">
							<rect width="80" height="81.8391" fill="white"/>
						</clipPath>
					</defs>
				</svg>

			)
		case 'chrome':
			return (
				<img src='/src/assets/chrome.png' alt='chrome'/>
			)
		case 'settings':
			return (
				<img src="/src/assets/services/settings.png" alt="settings"/>
			)
		case 'shop':
			return (
				<img src="/src/assets/services/shop.png" alt="shop"/>
			)
		case 'work':
			return (
				<img src="/src/assets/services/work.png" alt="work"/>
			)
		case 'brain':
			return (
				<img src="/src/assets/services/brain.png" alt="brain"/>
			)
		default:
			return <svg></svg>;
			break;
	}
};

export default SvgSelector;