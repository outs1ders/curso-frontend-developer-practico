const menuEmail = document.querySelector('.navbar-email');
const menuHamburguer = document.querySelector('.menu');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburguer.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleCartMenu);

function toggleDesktopMenu(){	

	const asideClose = aside.classList.contains('inactive');

	if (! asideClose){
		aside.classList.add('inactive');
	}

	desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){

	const asideClose = aside.classList.contains('inactive');

	if (!asideClose){
		aside.classList.add('inactive');
	}

	mobileMenu.classList.toggle('inactive');

}

function toggleCartMenu(){

	const mobileMenuClose = mobileMenu.classList.contains('inactive');
	const desktopMenuClose = mobileMenu.classList.contains('inactive');

	if (! mobileMenuClose || desktopMenuClose){
		mobileMenu.classList.add('inactive');
		desktopMenu.classList.add('inactive');
	} 

	aside.classList.toggle('inactive');
	
}


