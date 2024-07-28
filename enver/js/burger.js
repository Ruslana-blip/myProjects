'use strict';

function burgerMenu(selector) {
	let menu = document.querySelector(selector);
	let button = menu.querySelector('.burger__button');
	let links = menu.querySelectorAll('.burger__link');
	let overlay = menu.querySelector('.burger__overlay');

	button.addEventListener('click', e => {
		e.preventDefault();
		toggleMenu();
	});

	links.forEach(link => link.addEventListener('click', () => toggleMenu()));
	overlay.addEventListener('click', () => toggleMenu());

	function toggleMenu() {
		menu.classList.toggle('burger-active');

		if (menu.classList.contains('burger-active')) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'visible';
		}
	}
}

burgerMenu('.header__burger');
