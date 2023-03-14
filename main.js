const menuEmail = document.querySelector('.navbar-email');
const menuHamburguer = document.querySelector('.menu');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburguer.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleCartMenu())

function toggleDesktopMenu(){
	desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
	mobileMenu.classList.toggle('inactive');
}

function toggleCartMenu(){
	aside.classList.toggle('inactive');
}
