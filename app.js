const navSlide = ()=> {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.menu');
	const menu = document.querySelectorAll('.menu li');
	
	//Toggle Nav
	
	burger.addEventListener('click',()=>{
		nav.classList.toggle('nav-active');
		
		
		//Animate Links
	menu.forEach((link, index) => {
		link.style.animation = `menuFade 0.5s ease forwards ${index / 7}s`;
	});
		//Burger-Animation
		burger.classList.toggle('toggle');
	});
	
}

navSlide();