const menuEmail = document.querySelector('.navbar-email');
const menuHamburguer = document.querySelector('.menu');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburguer.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleCartMenu);

// menu desktop

function toggleDesktopMenu(){	
	const shoppingCartContainerClose = shoppingCartContainer.classList.contains('inactive');

	if (! shoppingCartContainerClose){
		shoppingCartContainer.classList.add('inactive');
	}

	desktopMenu.classList.toggle('inactive');
}

// menu mobile

function toggleMobileMenu(){
	const shoppingCartContainerClose = shoppingCartContainer.classList.contains('inactive');

	if (! shoppingCartContainerClose){
		shoppingCartContainer.classList.add('inactive');
	}

	mobileMenu.classList.toggle('inactive');

}

// carrito de compras

function toggleCartMenu(){
	const mobileMenuClose = mobileMenu.classList.contains('inactive');
	const desktopMenuClose = mobileMenu.classList.contains('inactive');

	if (! mobileMenuClose || desktopMenuClose){
		mobileMenu.classList.add('inactive');
		desktopMenu.classList.add('inactive');
	} 

	shoppingCartContainer.classList.toggle('inactive');
	
}

// lista de product

const productList = [];
productList.push({
	name: 'bike',
	price : 120,
	img : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
	name: 'Pantalla',
	price : 250,
	img : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
	name: 'Pc',
	price : 500,
	img : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts(arr){

	for (product of arr){

		// product-card 
		const productCard  = 	document.createElement('div');
		productCard.classList.add('product-card');
		
		const img = document.createElement('img');
		img.setAttribute('src', product.img);


		// product-info
		const productinfo = document.createElement('div');
		productinfo.classList.add('product-info');


		// Div in product-info
		const productinfoDiv = document.createElement('div');

		const productPrice = document.createElement('p');
		productPrice.innerText = '$' + product.price;
		const productName = document.createElement('p');
		productName.innerText = product.name;

		productinfoDiv.append(productPrice, productName);

		//figure
		const productinfoFigure = document.createElement('figure');
		const imgFigure = document.createElement('img');
		imgFigure.setAttribute('src', './icons/bt_add_to_cart.svg');

		//--------------------

		// figure
		productinfoFigure.append(imgFigure);

		// productinfo
		productinfo.append(productinfoDiv, productinfoFigure);

		// productCard 
		productCard.append(img, productinfo);

		// cardContainer
		cardsContainer.append(productCard);

	}
}


renderProducts(productList);
