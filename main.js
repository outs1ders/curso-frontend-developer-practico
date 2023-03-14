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
		aside.classlist.add('inactive');
	}

	desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
	const asideClose = aside.classList.contains('inactive');
	
	if (! asideClose){
		aside.classlist.add('inactive');
	}

	mobileMenu.classList.toggle('inactive');

}

function toggleCartMenu(){

	const mobileMenuClose = mobileMenu.classList.contains('inactive');

	if (! mobileMenuClose){
		mobileMenu.classList.add('inactive');
	}

	aside.classList.toggle('inactive');
	
	
}
