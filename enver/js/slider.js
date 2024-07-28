'use strict';
const swiper = new Swiper('.slider__wrapper', {
	// безпереривний  цикл
	loop: true,
	// зміна курсору
	grabCursor: true,
	// відстань між слайдами
	spaceBetween: 30,

	// пагінація
	pagination: {
		//назва класа для пагінації
		el: '.swiper-pagination',
		//при кліку на пагінацію можна переходити на інший слайд
		clickable: true,
		// при активному слайді збільшується панінація
		dynamicBullets: true,
	},

	// навігаційні стрілки
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	//клавіатура
	keyboard: {
		// включає можливість управління клавіатурою
		enabled: true,
		// включається можливість управління клавіатурою, коли безпосередньо до скролили до нього
		onlyInViewport: true,
	},
	//Автовисота slider
	// autoHeight: true,
	// якщо слайдів 1, то слайдер відключ.
	watchOverflow: true,
	// кількість слайдів, що простуються
	// slidesPerGroup: 3

	//aктивний слайд по центру
	//centeredSlies: true,

	//стартовий слайд
	// initialSlide: 0,

	//вільний режим
	//freeMode: true,

	//Aвтопрокрутка
	autoplay: {
		//затримка між прокруткою
		delay: 1000,
		//Закінчити на останньому слайді
		stopOnLastSlide: true,
		//відключити після ручної прокрутки
		disableOnInteration: false,
	},
	//швидкість default 300
	speed: 800,

	//вертикальний слайдер, додатково встановлюємо висоту
	// direction: 'vertical',

	//ефекти переключення слайдів
	//листання slide=> default
	//
	//fade підходить для виводу одного слайда
	//effect: 'fade',
	//додаткові налаштування до fade
	//	fadeEffect: {
	//паралельна
	//зміна прозорості
	//crossFade: true,
	//},
	//
	//переворот
	//effect: 'flip'
	//додаткові налаштування до flip
	//	flipEffect: {
	//shadow
	//slideShadows: true,
	//показ тільки активного слайду
	//limitRotation: true,
	//},
	//
	//3d куб
	//effect: 'cube',
	effect: 'slide',
	//брейкпоінти
	//ширина екрана
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		// when window width is >= 480px
		576: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
		// when window width is >= 640px
		992: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
	},
	//для оптимізації
	// preloadImages: false,
	// lazy: {
	// 	loadOnTransitionStart: false,
	// 	loadPrevNext: false,
	// },
	// watchSlidesProgress: true,
	// watchSlidesVisibility: true,
});
